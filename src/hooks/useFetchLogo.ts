// import { useState,useEffect } from "react";
// import { BASE_URL,API_KEY } from "../App";
// export const useFetchLogo = (movieId: number, language: string) => {
//     const [logo, setLogo] = useState<string | null>(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);
  
//     useEffect(() => {
//       const fetchLogo = async () => {
//         setIsLoading(true);
//         setError(null);
  
//         try {
//           const response = await fetch(
//             `${BASE_URL}/movie/${movieId}/images?api_key=${API_KEY}&language=${language}`
//           );
//           const data = await response.json();
  
//           const logo =
//             data.logos.find((l: { iso_639_1: string }) => l.iso_639_1 === language) ||
//             data.logos[0];

//           setLogo(logo.file_path);
//         } catch (err: any) {
//           setError(err.message || "Error fetching logo");
//         } finally {
//           setIsLoading(false);
//         }
//       };
  
//       if (movieId) {
//         fetchLogo();
//       }
//     }, [movieId, language]);
  
//     return { logo, isLoading, error };
//   };