// import { useState,useEffect } from "react";
// import { Movie } from "../interface/Movie";
// export const useFetchMovies = (url: string, totalPages: number) => {
//     const [movies, setMovies] = useState<Movie[]>([]);
//     const [isLoading, setIsLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);
  
//     const fetchMovies = async () => {
//       try {
//         setIsLoading(true);
//         let allMovies: Movie[] = [];
  
//         for (let page = 1; page <= totalPages; page++) {
//           const response = await fetch(`${url}&page=${page}`);
//           if (!response.ok) {
//             throw new Error("Error fetching movies");
//           }
//           const data = await response.json();
//           allMovies = [...allMovies, ...data.results];
//         }
  
//         setMovies(allMovies);
//       } catch (err: any) {
//         setError(err.message || "An error occurred");
//       } finally {
//         setIsLoading(false);
//       }
//     };
  
//     useEffect(() => {
//       fetchMovies();
//     }, [url, totalPages]);
  
//     return { movies, isLoading, error };
//   };