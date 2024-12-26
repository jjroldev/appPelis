import { useEffect, useState } from "react";
import "./App.css";
import "react-multi-carousel/lib/styles.css";
import { MovieSwiper } from "./components/MovieSwiper/MovieSwiper";
export const URL_IMAGE = "https://image.tmdb.org/t/p/original";
export const BASE_URL = "https://api.themoviedb.org/3";
export const API_KEY = "6e6a632ff00b90c42dadea3c48a464ab";
import { Banner } from "./components/Banner/Banner";

interface Genre {
  id: number;
  name: string;
}

interface GenresResponse {
  genres: Genre[];
}

function App() {
  const [language, setLanguage] = useState<string>("es");
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const storedGenres = localStorage.getItem(`genres_${language}`);
        if (storedGenres) {
          setGenres(JSON.parse(storedGenres));
          return;
        }

        const response = await fetch(
          `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=${language}`
        );
        const data: GenresResponse = await response.json();
        setGenres(data.genres);

        localStorage.setItem(`genres_${language}`, JSON.stringify(data.genres));
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, [language]);

  const fetchURLS = [{
    popularMovies: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=${language}`,
    topRatedMovies: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=${language}`,
    upcomingMovies: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=${language}`,
    discoverMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}`,
    nowPlaying: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=${language}`,
    actionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=28`,
    adventureMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=12`,
    animationMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=16`,
    comedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=35`,
    crimeMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=80`,
    documentaryMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=99`,
    dramaMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=18`,
    familyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=10751`,
    fantasyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=14`,
    historyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=36`,
    horrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=27`,
    musicMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=10402`,
    mysteryMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=9648`,
    romanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=10749`,
    scienceFictionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=878`,
    thrillerMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=53`,
  }]; 

  return (
    <>
      <Banner URL={fetchURLS[0].popularMovies} language={language} />
      <div className="contenedorPeliculas">
        <MovieSwiper URL={fetchURLS[0].popularMovies} title="Populares" />
        <MovieSwiper URL={fetchURLS[0].topRatedMovies} title="Mejores Votadas" />
        <MovieSwiper URL={fetchURLS[0].upcomingMovies} title="Próximamente" />
        {genres.map((genre) => (
          <MovieSwiper
            key={genre.id}
            URL={`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=${genre.id}`}
            title={genre.name}
          />
        ))}
      </div>
    </>
  );
}

export default App;
