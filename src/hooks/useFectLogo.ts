import { useState, useEffect } from "react";

const useFetchLogo = (
  movieId: number, 
  language: string, 
  BASE_URL: string, 
  API_KEY: string
) => {
  const [logoPath, setLogoPath] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieLogo = async () => {
      const cacheKey = `movie-${movieId}-logo-${language}`;
      const cacheTimestampKey = `${cacheKey}-timestamp`;

      const now = Date.now();
      const cacheDuration = 86400000; 
      const cachedData = localStorage.getItem(cacheKey);
      const cachedTimestamp = localStorage.getItem(cacheTimestampKey);

      if (
        cachedData !== null && 
        cachedData !== "null" && 
        cachedTimestamp !== null && 
        now - parseInt(cachedTimestamp) < cacheDuration 
      ) {
        setLogoPath(cachedData);
        return; 
      }

      try {
        const response = await fetch(
          `${BASE_URL}/movie/${movieId}/images?api_key=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const logo =
          data.logos.find((l: { iso_639_1: string }) => l.iso_639_1 === language) ||
          data.logos.find((l: { iso_639_1: string }) => l.iso_639_1 === "en");

        const logoFilePath = logo?.file_path
        setLogoPath(logoFilePath);
        if (logoFilePath) {
          localStorage.setItem(cacheKey, logoFilePath);
          localStorage.setItem(cacheTimestampKey, now.toString());
        } else {
          localStorage.removeItem(cacheKey);
          localStorage.removeItem(cacheTimestampKey);
        }
      } catch (err) {
        console.error("Error fetching movie logo:", err);
        setLogoPath(null);
      }
    };

    if (movieId) {
      fetchMovieLogo();
    }
  }, [movieId, language, BASE_URL, API_KEY]);

  return logoPath;
};

export default useFetchLogo;
