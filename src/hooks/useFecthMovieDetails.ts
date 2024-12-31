import { useState, useEffect } from "react";
import { Movie } from "../interface/Movie";
import { BASE_URL, API_KEY } from "../App";

// Función para obtener IDs de películas
const fetchMovies = async (url: string, totalPages: number): Promise<number[]> => {

  let allMovieIds: number[] = [];
  for (let page = 1; page <= totalPages; page++) {
    const response = await fetch(`${url}&page=${page}`);
    const data = await response.json();
    allMovieIds = [...allMovieIds, ...data.results.map((movie: Movie) => movie.id)];
  }

  return allMovieIds;
};

// Función para obtener detalles de películas
const fetchMovieDetails = async (
  movieIds: number[],
  language: string,
  appendProps: string[]
): Promise<Movie[]> => {
  const movieDetailPromises = movieIds.map((id) =>
    fetch(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=${language}&append_to_response=${appendProps.join(",")}`
    ).then((response) => {
      if (!response.ok) {
        return Promise.reject(new Error(`Error fetching details for movie ID: ${id}`));
      }
      return response.json();
    })
  );

  const allMovies = await Promise.all(movieDetailPromises);
  return allMovies;
};


export const useFetchMoviesWithDetails = (
  url: string,
  totalPages: number,
  language: string,
  appendProps: string[]
) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const movieIds = await fetchMovies(url, totalPages);
        const movies = await fetchMovieDetails(movieIds, language, appendProps);
        setMovies(movies);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, totalPages, language]);

  return { movies, isLoading, error };
};
