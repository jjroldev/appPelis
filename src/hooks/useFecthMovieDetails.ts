import { useState, useEffect } from "react";
import { CastMember } from "../interface/CastMember";
import { Movie } from "../interface/Movie";
import { API_KEY } from "../App";
import { BASE_URL } from "../App";

const useFetchMovieDetails = (movieId:number,language:String) => {
  const [movieDetails, setMovieDetails] = useState<Movie | null>(null);
  const [cast, setCast] = useState<CastMember[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const detailsCacheKey = `movie-${movieId}-details-${language}`;
      const castCacheKey = `movie-${movieId}-cast-${language}`;
      const timestampKey = `movie-${movieId}-timestamp`;
      const cacheDuration = 86400000;
      const now = Date.now();

      try {
        let cachedDetails = localStorage.getItem(detailsCacheKey);
        let cachedCast = localStorage.getItem(castCacheKey);
        const cachedTimestamp = localStorage.getItem(timestampKey);

        const isCacheValid =cachedTimestamp && now - parseInt(cachedTimestamp) < cacheDuration;

        if (cachedDetails && cachedCast && isCacheValid) {
          // console.log("Cargando detalles y reparto desde caché");
          setMovieDetails(JSON.parse(cachedDetails));
          setCast(JSON.parse(cachedCast));
        } else {
          // console.log("Cargando detalles y reparto desde la API");

          const detailsResponse = await fetch(
            `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=${language}`
          );
          const detailsData = await detailsResponse.json();

          const castResponse = await fetch(
            `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=${language}`
          );
          const castData = await castResponse.json();

          setMovieDetails(detailsData);
          setCast(castData.cast);

          localStorage.setItem(detailsCacheKey, JSON.stringify(detailsData));
          localStorage.setItem(castCacheKey, JSON.stringify(castData.cast));
          localStorage.setItem(timestampKey, now.toString());
        }
      } catch (err: any) {
        console.error("Error fetching movie data:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (movieId) {
      fetchData();
    }
  }, [movieId, language, BASE_URL, API_KEY]);

  return { movieDetails, cast, isLoading, error };
};

export default useFetchMovieDetails;
