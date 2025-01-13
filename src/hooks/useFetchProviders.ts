import { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from "../App";

const useFetchProviders = (movieId: number) => {
  const [movieProviders, setMovieProviders] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieProviders = async () => {
      if (!movieId) {
        setMovieProviders(null);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);

      try {
        const response = await fetch(
          `${BASE_URL}/movie/${movieId}/watch/providers?api_key=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error(`Error fetching details for movie ID: ${movieId}`);
        }

        const data = await response.json();
        if (data?.results) {
          const list: any[] = [];
          const addedProviderIds = new Set<string>();

          for (const provider in data.results) {
            const region = data.results[provider];
            ["flatrate", "buy", "rent"].forEach((category) => {
              if (region[category]) {
                region[category].forEach((providerF: any) => {
                  if (!addedProviderIds.has(providerF.provider_name)) {
                    addedProviderIds.add(providerF.provider_name);
                    list.push(providerF);
                  }
                });
              }
            });
          }

          setMovieProviders(list);
        }
      } catch (err: any) {
        console.error("Error fetching movie details:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieProviders();
  }, [movieId]);

  return { movieProviders, isLoading, error };
};

export default useFetchProviders;
