import { useState, useEffect } from "react";
import { Movie } from "../interface/Movie";

export const useFetchMovies = (url: string, totalPages: number) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const cacheKey = `${url}-${totalPages}`;
  const cacheTimestampKey = `${cacheKey}-timestamp`;

  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      let allMovies: Movie[] = [];
      
      const cachedData = localStorage.getItem(cacheKey);
      const cachedTimestamp = localStorage.getItem(cacheTimestampKey);
      const now = Date.now();
      const cacheDuration = 86400000; 
      if (cachedData && cachedTimestamp && now - parseInt(cachedTimestamp) < cacheDuration) {
        console.log("Cargando datos desde el local storage movies");
        allMovies = JSON.parse(cachedData);
      } else {
        console.log("Cargando datos desde la API movies");
        for (let page = 1; page <= totalPages; page++) {
          const response = await fetch(`${url}&page=${page}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          allMovies = [...allMovies, ...data.results];
        }

        localStorage.setItem(cacheKey, JSON.stringify(allMovies));
        localStorage.setItem(cacheTimestampKey, now.toString());
      }

      setMovies(allMovies);
      console.log(allMovies)
    } catch (err: any) {
      console.error("Error fetching movies:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [url, totalPages]);

  return { movies, isLoading, error };
};
