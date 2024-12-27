import { useState, useEffect } from "react";
import { Movie } from "../interface/Movie";

export const useFetchMovies = (url: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async (signal: AbortSignal) => {
    try {
      const response = await fetch(url, { signal });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setMovies(data.results);
    } catch (err: any) {
      if (err.name === "AbortError") {
        console.log("Fetch cancelled");
      } else {
        console.error("Error fetching movies:", err);
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchMovies(signal);

    return () => {
      controller.abort();
    };
  }, [url]);

  return { movies, isLoading, error };
};
