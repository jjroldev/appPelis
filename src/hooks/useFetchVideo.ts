import { useState, useEffect } from "react";
import axios from "axios";
import { openDB } from "idb";
import { Trailer } from "../interface/Trailer";
import { BASE_URL, API_KEY } from "../App";
import { useLanguage } from "../context/LanguageContext";

const DB_NAME = "MoviesDB-trailers";
const STORE_NAME = "movie-trailers";

const getDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "key" });
      }
    },
  });
};

const useFetchTrailer = (movieId: number | undefined) => {
  const [trailer, setTrailer] = useState<Trailer | null>(null);
  const {language} = useLanguage()
  useEffect(() => {
    const fetchTrailer = async () => {
      if (!movieId) return;

      const db = await getDB();
      const key = `${movieId}_${language}`;
      const cachedTrailer = await db.get(STORE_NAME, key);

      if (cachedTrailer) {
        setTrailer(cachedTrailer.data);
        return;
      }

      try {
        const { data } = await axios.get(`${BASE_URL}/movie/${movieId}`, {
          params: {
            api_key: API_KEY,
            append_to_response: "videos",
            language,
          },
        });

        if (data.videos && data.videos.results) {
          const foundTrailer = data.videos.results.find(
            (vid: any) => vid.name === "Official Trailer"
          ) || data.videos.results[0];

          if (foundTrailer) {
            setTrailer(foundTrailer);

            await db.put(STORE_NAME, { key, data: foundTrailer });
          }
        }
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    fetchTrailer();
  }, [movieId, language]);

  return trailer;
};

export default useFetchTrailer;
