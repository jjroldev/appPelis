import { useState, useEffect } from "react";
import { Banner } from "../Banner/Banner";
import './Home.css';
import React from "react";
import { Movie } from "../../interface/Movie";
const MovieSwiper = React.lazy(() => import("../MovieSwiper/MovieSwiper"));
import { BASE_URL, API_KEY } from "../../App";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import { useLanguage } from "../../context/LanguageContext";
export default function Home() {
  const { language } = useLanguage();
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

  const { movies } = useFetchMovies(fetchURLS[0].actionMovies, 2);

  const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem(`featuredMovie-home-${language}`);
    const currentTime = new Date().getTime();
    const ecuadorTimeOffset = -5;
    const ecuadorTime = new Date(currentTime + ecuadorTimeOffset * 3600 * 1000).getTime();

    if (storedData) {
      const { movie, timestamp } = JSON.parse(storedData);
      if (ecuadorTime - timestamp < 3600000) {
        setFeaturedMovie(movie);
        return;
      }
    }

    if (movies && movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      const selectedMovie = movies[randomIndex];
      setFeaturedMovie(selectedMovie);
      sessionStorage.setItem(
        `featuredMovie-home-${language}`,
        JSON.stringify({ movie: selectedMovie, timestamp: ecuadorTime })
      );
    }
  }, [movies, language]);

  if (movies.length === 0) {
    return <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className="spinner"></div>
    </div>
  }

  return (
    <div className="contenedorHome">
      <>
        {featuredMovie && (
          <Banner movie={featuredMovie} logoBuscar={true} isShort={false} />
        )}
        <div className="contenedorPeliculas">
          <MovieSwiper
            URL={fetchURLS[0].popularMovies}
            title={language === 'es' ? 'Películas Populares' : 'Popular Movies'}
          />
          <MovieSwiper
            URL={fetchURLS[0].topRatedMovies}
            title={language === 'es' ? 'Mejores Votadas' : 'Best Voted'}
            isLarge
          />
          <MovieSwiper
            URL={fetchURLS[0].upcomingMovies}
            title={language === 'es' ? 'Próximamente' : 'Upcoming'}
            isLarge
          />
          <MovieSwiper
            URL={fetchURLS[0].actionMovies}
            title={language === 'es' ? 'Acción' : 'Action'}
            isLarge
          />
          <MovieSwiper
            URL={fetchURLS[0].adventureMovies}
            title={language === 'es' ? 'Aventura' : 'Adventure'}
            isLarge
          />
          <MovieSwiper
            URL={fetchURLS[0].animationMovies}
            title={language === 'es' ? 'Animación' : 'Animation'}
            isLarge
          />
          <MovieSwiper
            URL={fetchURLS[0].comedyMovies}
            title={language === 'es' ? 'Comedia' : 'Comedy'}
            isLarge
          />
          <MovieSwiper
            URL={fetchURLS[0].crimeMovies}
            title={language === 'es' ? 'Crimen' : 'Crime'}
            isLarge
          />
          <MovieSwiper
            URL={fetchURLS[0].documentaryMovies}
            title={language === 'es' ? 'Documentales' : 'Documentary'}
            isLarge
          />
          <MovieSwiper
            URL={fetchURLS[0].dramaMovies}
            title={language === 'es' ? 'Drama' : 'Drama'}
            isLarge
          />
          <MovieSwiper
            URL={fetchURLS[0].familyMovies}
            title={language === 'es' ? 'Familia' : 'Family'}
            isLarge
          />
          <MovieSwiper
            URL={fetchURLS[0].fantasyMovies}
            title={language === 'es' ? 'Fantasía' : 'Fantasy'}
            isLarge
          />
          <MovieSwiper
            URL={fetchURLS[0].historyMovies}
            title={language === 'es' ? 'Historia' : 'History'}
          />
          <MovieSwiper
            URL={fetchURLS[0].horrorMovies}
            title={language === 'es' ? 'Terror' : 'Horror'}
          />
          <MovieSwiper
            URL={fetchURLS[0].musicMovies}
            title={language === 'es' ? 'Música' : 'Music'}
            isLarge
          />
          <MovieSwiper
            URL={fetchURLS[0].mysteryMovies}
            title={language === 'es' ? 'Misterio' : 'Mystery'}
            isLarge
          />
          <MovieSwiper
            URL={fetchURLS[0].romanceMovies}
            title={language === 'es' ? 'Románticas' : 'Romance'}
            isLarge
          />
          <MovieSwiper
            URL={fetchURLS[0].scienceFictionMovies}
            title={language === 'es' ? 'Ciencia Ficción' : 'Science Fiction'}
            isLarge
          />
          <MovieSwiper
            URL={fetchURLS[0].thrillerMovies}
            title={language === 'es' ? 'Suspenso' : 'Thriller'}
            isLarge
          />
        </div>
      </>
    </div>
  );
}
