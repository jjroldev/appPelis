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
        cachedData &&
        cachedTimestamp &&
        now - parseInt(cachedTimestamp, 10) < cacheDuration
      ) {
        setLogoPath(cachedData);
        return;
      }

      try {
        const response = await fetch(
          `${BASE_URL}/movie/${movieId}/images?api_key=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (!data || !data.logos || !Array.isArray(data.logos) || data.logos.length === 0) {
          console.warn("No logos found in the API response.");
          setLogoPath(null);
          localStorage.removeItem(cacheKey);
          localStorage.removeItem(cacheTimestampKey);
          return;
        }

        const logo =
          data.logos.find((l: { iso_639_1: string }) => l.iso_639_1 === language) ||
          data.logos.find((l: { iso_639_1: string }) => l.iso_639_1 === "en") ||
          data.logos[0];

        if (logo?.file_path) {
          setLogoPath(logo.file_path);
          localStorage.setItem(cacheKey, logo.file_path);
          localStorage.setItem(cacheTimestampKey, now.toString());
        } else {
          console.warn("No valid logo file path found.");
          setLogoPath(null);
          localStorage.removeItem(cacheKey);
          localStorage.removeItem(cacheTimestampKey);
        }
      } catch (err) {
        console.error("Error fetching movie logo:", err);
        setLogoPath(null);
      }
    };

    if (movieId > 0) {
      fetchMovieLogo();
    } else {
      setLogoPath(null);
    }
  }, [movieId, language, BASE_URL, API_KEY]);

  return logoPath;
};

export default useFetchLogo;
