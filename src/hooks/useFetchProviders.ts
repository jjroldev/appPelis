import { useState, useEffect } from "react";
import { openDB } from "idb";
import { BASE_URL, API_KEY } from "../App";

const DB_NAME = "movieProvidersDB";
const DB_VERSION = 1;
const STORE_NAME = "providers";

const useFetchProviders = (movieId: number) => {
  const [movieProviders, setMovieProviders] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const initializeDB = async () => {
    const db = await openDB(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: "movieId" });
        }
      },
    });
    return db;
  };

  const getCachedProviders = async (db: any, movieId: number) => {
    return await db.get(STORE_NAME, movieId);
  };

  const cacheProviders = async (db: any, movieId: number, providers: any) => {
    await db.put(STORE_NAME, { movieId, providers, timestamp: Date.now() });
  };

  useEffect(() => {
    const fetchMovieProviders = async () => {
      if (!movieId) {
        setMovieProviders(null);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);

      try {
        const db = await initializeDB();
        const cachedData = await getCachedProviders(db, movieId);

        const CACHE_LIFETIME = 24 * 60 * 60 * 1000;
        if (cachedData && Date.now() - cachedData.timestamp < CACHE_LIFETIME) {
          setMovieProviders(cachedData.providers);
          setIsLoading(false);
          console.log("datos desde idb")
          return;
        }

        const response = await fetch(
          `${BASE_URL}/movie/${movieId}/watch/providers?api_key=${API_KEY}`
        );
        console.log("datos desde api")

        if (!response.ok) {
          throw new Error(`Error fetching details for movie ID: ${movieId}`);
        }

        const data = await response.json();
        if (data?.results) {
          const list:any[] = [];
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
          cacheProviders(db, movieId, list);
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
