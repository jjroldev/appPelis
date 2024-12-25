import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import "react-multi-carousel/lib/styles.css";
import { Movie } from "./interface/Movie";
import { MovieSwiper } from "./components/MovieSwiper/MovieSwiper";
export const URL_IMAGE = "https://image.tmdb.org/t/p/original";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "6e6a632ff00b90c42dadea3c48a464ab";
  const [logoPath, setLogoPath] = useState("");

  const fetchMovies = async (searchKey: string) => {
    try {
      const type = searchKey ? "search" : "discover";
      const {
        data: { results },
      } = await axios.get(`${API_URL}/${type}/movie`, {
        params: {
          api_key: API_KEY,
          query: searchKey,
        },
      });
      setMovies(results);
    } catch {
      console.error("Error fetching movies");
    }
  };

  const fetchMovieImages = async (movieId: number) => {
    try {
      const { data } = await axios.get(`${API_URL}/movie/${movieId}/images`, {
        params: {
          api_key: API_KEY,
        },
      });
      const logo =
        data.logos.find((logo: any) => logo.iso_639_1 === "en") ||
        data.logos[0];
      setLogoPath(logo.file_path);
    } catch (error) {
      console.error("Error fetching movie images:", error);
    }
  };

  useEffect(() => {
    fetchMovies("us");
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      fetchMovieImages(movies[0].id);
    }
  }, [movies]);

  return (
    <>
      <div className="header">
        <div className="navbar">
          <img
            src="../src/images/Netflix_Logo_RGB.png"
            alt="Netflix Logo"
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        {movies.length > 0 && (
          <>
            <img
              className="fondo"
              src={URL_IMAGE + movies[0].backdrop_path}
              alt={movies[0].title}
            />
            <div className="contenedorLogo">
              <img src={URL_IMAGE + logoPath} alt="" />
              <p>{movies[0].overview}</p>
            </div>
          </>
        )}
      </div>
      <div className="contenedorPeliculas">
        <MovieSwiper movies={movies}/>
      </div>
    </>
  );
}

export default App;
