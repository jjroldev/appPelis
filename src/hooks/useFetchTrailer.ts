import { useState, useEffect } from "react";
import axios from "axios";
import { Trailer } from "../interface/Trailer";

const useFetchTrailer = (movieId: number | undefined, language: string, BASE_URL: string, API_KEY: string) => {
  const [trailer, setTrailer] = useState<Trailer | null>(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      if (!movieId) return;

      try {
        const { data } = await axios.get(`${BASE_URL}/movie/${movieId}`, {
          params: {
            api_key: API_KEY,
            append_to_response: "videos",
            language,
          },
        });

        if (data.videos && data.videos.results) {
          const trailer = data.videos.results.find(
            (vid: any) => vid.name === "Official Trailer"
          );
          setTrailer(trailer ? trailer : data.videos.results[0]);
        }
      } catch (error) {
        console.log("Error fetching trailer:", error);
      }
    };

    fetchTrailer();
  }, [movieId, language, BASE_URL, API_KEY]);

  return trailer;
};

export default useFetchTrailer;
