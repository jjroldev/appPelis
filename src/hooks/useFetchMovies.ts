import { useState, useEffect } from "react";
import { openDB } from "idb";
import { Movie } from "../interface/Movie";

const DB_NAME = "MoviesDB";
const STORE_NAME = "movies";

const getDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "key" });
      }
    },
  });
};

export const useFetchMovies = (url: string, totalPages: number, language: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      const db = await getDB();
      const key = `${url}_${language}`;
      const cachedMovies = await db.get(STORE_NAME, key);

      if (cachedMovies) {
        setMovies(cachedMovies.data);
      } else {
        const fetchPromises = Array.from({ length: totalPages }, (_, i) =>
          fetch(`${url}&page=${i + 1}`).then((response) => response.json())
        );

        const results = await Promise.all(fetchPromises);

        const allMovies = results.flatMap((result) => result.results);

        await db.put(STORE_NAME, { key, data: allMovies });
        setMovies(allMovies);
      }
    } catch (err: any) {
      console.error("Error fetching movies:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [url, totalPages, language]);

  return { movies, isLoading, error };
};
