// import { useState, useEffect } from "react";
// import { Movie } from "../interface/Movie";
// import { BASE_URL, API_KEY } from "../App";

// const fetchMovies = async (url: string, totalPages: number): Promise<number[]> => {
//   let allMovieIds: number[] = [];
//   for (let page = 1; page <= totalPages; page++) {
//     const response = await fetch(`${url}&page=${page}`);
//     const data = await response.json();
//     allMovieIds = [...allMovieIds, ...data.results.map((movie: Movie) => movie.id)];
//   }

//   return allMovieIds;
// };

// // Función para obtener detalles de películas
// const fetchMovieDetails = async (
//   movieIds: number[],
//   language: string,
//   appendProps: string[]
// ): Promise<Movie[]> => {

//   let allMovies: Movie[] = [];

//   for (const id of movieIds) {

//     const response = await fetch(
//       `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=${language}&append_to_response=${appendProps.join(",")}`
//     );
//     const data = await response.json();

//     allMovies.push(data);

//   }

//   return allMovies;
// };

// export const useFetchMoviesWithDetails = (
//   url: string,
//   totalPages: number,
//   language: string,
//   appendProps: string[]
// ) => {
//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const movieIds = await fetchMovies(url, totalPages);
//         const movies = await fetchMovieDetails(movieIds, language, appendProps);
//         setMovies(movies);
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [url, totalPages, language]);

//   return { movies, isLoading, error };
// };
