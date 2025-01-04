import { useState, useEffect } from "react";
import { openDB } from "idb";
import { Movie } from "../interface/Movie";
import { BASE_URL, API_KEY } from "../App";

const DB_NAME = "MoviesDB-details";
const STORE_NAME = "movie-details";

const getDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "key" });
      }
    },
  });
};

const useFetchMovieDetails = (
  movieId: number | undefined,
  language: string,
) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (!movieId) {
        setMovie(null);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      const db = await getDB();
      const key = `${movieId}_${language}`;
      const cachedMovie = await db.get(STORE_NAME, key);

      if (cachedMovie) {
        setMovie(cachedMovie.data);
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=${language}&append_to_response=credits`
        );

        if (!response.ok) {
          throw new Error(`Error fetching details for movie ID: ${movieId}`);
        }

        const data = await response.json();
        setMovie(data);
        await db.put(STORE_NAME, { key, data });
      } catch (err: any) {
        console.error("Error fetching movie details:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId, language]);

  return { movie, isLoading, error };
};

export default useFetchMovieDetails;
