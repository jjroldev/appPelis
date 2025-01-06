import { useState, useEffect } from "react";
import { Movie } from "../interface/Movie";
import { BASE_URL, API_KEY } from "../App";
import { getDB } from "../utils/funcionesIDB";

const DB_NAME = "MoviesDB-details";
const STORE_NAME = "movie-details";

const useFetchMovieDetails = (
  movieId: number | undefined,
  language?: string,
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
      const db = await getDB(DB_NAME,STORE_NAME);
      const key = `${movieId}_details_${language}`;
      const cachedMovie = await db.get(STORE_NAME, key);

      if (cachedMovie) {
        setMovie(cachedMovie.data);
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}${language?`&language=${language}`:""}&append_to_response=credits,images`
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
