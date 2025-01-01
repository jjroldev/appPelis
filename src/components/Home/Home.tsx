import { Banner } from "../Banner/Banner";
// import { useFetchMovieDetails, useFetchMoviesWithDetails } from "../../hooks/useFecthMovieDetails";
import './Home.css';
import { useFetchMoviesWithDetails } from "../../hooks/useFecthMovieDetails";
import React from "react";
import { useEffect,useState } from "react";
const MovieSwiper = React.lazy(() => import("../MovieSwiper/MovieSwiper"));
import { Suspense } from "react";
import { Movie } from "../../interface/Movie";
import { BASE_URL, API_KEY } from "../../App";
export default function Home({ language }: { language: string }) {

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

  const { movies } = useFetchMoviesWithDetails(fetchURLS[0].actionMovies, 2, language, ["videos", 'images', "credits"])

  const [featuredMovie, setFeaturedMovie] = useState<Movie>();

  useEffect(() => {
    const savedMovie = localStorage.getItem("featuredMovie-home");

    if (savedMovie) {
      setFeaturedMovie(JSON.parse(savedMovie));
    } else if (movies && movies.length > 0) {
      localStorage.setItem("featuredMovie-home", JSON.stringify(movies[0]));
      setFeaturedMovie(movies[0]);
    }
  }, [movies]);
  return (
    <div className="contenedorHome">
      <Banner movie={featuredMovie} language={language} logoBuscar={true} isShort={false} />
      <div className="contenedorPeliculas">
        <Suspense fallback={<div>Cargando...</div>}>
          <MovieSwiper
            URL={fetchURLS[0].popularMovies}
            title={language === 'es' ? 'Películas Populares' : 'Popular Movies'}
            language={language}
          />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <MovieSwiper
            URL={fetchURLS[0].topRatedMovies}
            title={language === 'es' ? 'Mejores Votadas' : 'Best Voted'}
            isLarge
            language={language}
          />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <MovieSwiper
            URL={fetchURLS[0].upcomingMovies}
            title={language === 'es' ? 'Próximamente' : 'Upcoming'}
            isLarge
            language={language}
          />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <MovieSwiper
            URL={fetchURLS[0].actionMovies}
            title={language === 'es' ? 'Acción' : 'Action'}
            isLarge
            language={language}
          />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <MovieSwiper
            URL={fetchURLS[0].adventureMovies}
            title={language === 'es' ? 'Aventura' : 'Adventure'}
            isLarge
            language={language}
          />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <MovieSwiper
            URL={fetchURLS[0].animationMovies}
            title={language === 'es' ? 'Animación' : 'Animation'}
            isLarge
            language={language}
          />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <MovieSwiper
            URL={fetchURLS[0].comedyMovies}
            title={language === 'es' ? 'Comedia' : 'Comedy'}
            isLarge
            language={language}
          />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <MovieSwiper
            URL={fetchURLS[0].crimeMovies}
            title={language === 'es' ? 'Crimen' : 'Crime'}
            isLarge
            language={language}
          />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <MovieSwiper
            URL={fetchURLS[0].documentaryMovies}
            title={language === 'es' ? 'Documentales' : 'Documentary'}
            isLarge
            language={language}
          />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <MovieSwiper
            URL={fetchURLS[0].dramaMovies}
            title={language === 'es' ? 'Drama' : 'Drama'}
            isLarge
            language={language}
          />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <MovieSwiper
            URL={fetchURLS[0].familyMovies}
            title={language === 'es' ? 'Familia' : 'Family'}
            isLarge
            language={language}
          />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <MovieSwiper
            URL={fetchURLS[0].fantasyMovies}
            title={language === 'es' ? 'Fantasía' : 'Fantasy'}
            isLarge
            language={language}
          />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <MovieSwiper
            URL={fetchURLS[0].historyMovies}
            title={language === 'es' ? 'Historia' : 'History'}
            language={language}
          />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <MovieSwiper
            URL={fetchURLS[0].horrorMovies}
            title={language === 'es' ? 'Terror' : 'Horror'}
            language={language}
          />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <MovieSwiper
            URL={fetchURLS[0].musicMovies}
            title={language === 'es' ? 'Música' : 'Music'}
            isLarge
            language={language}
          />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <MovieSwiper
            URL={fetchURLS[0].mysteryMovies}
            title={language === 'es' ? 'Misterio' : 'Mystery'}
            isLarge
            language={language}
          />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <MovieSwiper
            URL={fetchURLS[0].romanceMovies}
            title={language === 'es' ? 'Románticas' : 'Romance'}
            isLarge
            language={language}
          />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <MovieSwiper
            URL={fetchURLS[0].scienceFictionMovies}
            title={language === 'es' ? 'Ciencia Ficción' : 'Science Fiction'}
            isLarge
            language={language}
          />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <MovieSwiper
            URL={fetchURLS[0].thrillerMovies}
            title={language === 'es' ? 'Suspenso' : 'Thriller'}
            isLarge
            language={language}
          />
        </Suspense>

      </div>
    </div>
  );
}
