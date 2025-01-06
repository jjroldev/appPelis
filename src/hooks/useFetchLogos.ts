import { useState, useEffect } from "react";
import { getDB } from "../utils/funcionesIDB";
import { BASE_URL, API_KEY } from "../App";
import { useLanguage } from "../context/LanguageContext";

const DB_NAME = "MoviesDBLogos";
const STORE_NAME = "movie-logos";

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
      const db = await getDB(DB_NAME,STORE_NAME);
      const key = `${movieId}_logo_${language}`;
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
