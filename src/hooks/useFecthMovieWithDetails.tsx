// import { useState, useEffect } from "react";
// import { BASE_URL, API_KEY } from "../App";
// import { Movie } from "../interface/Movie";

// export const useFetchMovieWithDetails = (
//   movieId: number,
//   language: string,
//   appendProps: string[] = []
// ) => {
//   const [movie, setMovie] = useState<Movie | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       setIsLoading(true);
//       setError(null);

//       try {
//         const response = await fetch(
//           `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=${language}&append_to_response=${appendProps.join(",")}`
//         );
//         if (!response.ok) {
//           throw new Error("Error fetching movie details");
//         }

//         const data = await response.json();
//         setMovie(data);
//       } catch (err: any) {
//         setError(err.message || "Error fetching movie details");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (movieId) {
//       fetchMovieDetails();
//     }
//   }, [movieId, language]);

//   return { movie, isLoading, error };
// };
