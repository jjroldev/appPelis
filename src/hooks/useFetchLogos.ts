import { useState, useEffect } from "react";
import { openDB } from "idb";
import { BASE_URL, API_KEY } from "../App";
import { useLanguage } from "../context/LanguageContext";

const DB_NAME = "MoviesDBLogos";
const STORE_NAME = "movie-logos";

const getDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "key" });
      }
    },
  });
};

const useFetchLogo = (movieId: number) => {
  const [logoPath, setLogoPath] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {language} = useLanguage()
  useEffect(() => {
    const fetchMovieLogo = async () => {
      if (movieId <= 0) {
        setLogoPath(null);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      const db = await getDB();
      const key = `${movieId}_${language}`;
      const cachedLogo = await db.get(STORE_NAME, key);

      if (cachedLogo) {
        setLogoPath(cachedLogo.path);
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `${BASE_URL}/movie/${movieId}/images?api_key=${API_KEY}`
        );
        const data = await response.json();

        const logo =
          data.logos.find((l: { iso_639_1: string }) => l.iso_639_1 === language) ||
          data.logos.find((l: { iso_639_1: string }) => l.iso_639_1 === "en") ||
          data.logos[0];

        if (logo?.file_path) {
          setLogoPath(logo.file_path);
          await db.put(STORE_NAME, { key, path: logo.file_path });
        } else {
          setLogoPath(null);
        }
      } catch (err) {
        console.error("Error fetching movie logo:", err);
        setLogoPath(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieLogo();
  }, [movieId, language]);

  return { logoPath, isLoading };
};

export default useFetchLogo;
