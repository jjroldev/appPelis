import {Banner}  from "../Banner/Banner";
import { API_KEY, BASE_URL } from "../../App";
import './Home.css';
import React from "react";
const MovieSwiper = React.lazy(() => import('../MovieSwiper/MovieSwiper'));
import { Suspense } from "react";
import { useFetchMovies } from "../../hooks/useFetchMovies";
export function Home({ language }: { language: string }) {

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

  const {movies}=useFetchMovies(fetchURLS[0].actionMovies,2)
  const validMovies = movies.filter((movie) => movie.backdrop_path);

  return (
    <div className="contenedorHome">
      <Banner movie={validMovies[4]} language={language} logoBuscar={true} isShort={false} />
      <div className="contenedorPeliculas">
          <Suspense fallback={<div>Cargando Películas Populares...</div>}>
            <MovieSwiper URL={fetchURLS[0].popularMovies} title={language === 'es' ? 'Películas Populares' : 'Popular Movies'} language={language} />
          </Suspense>
          <Suspense fallback={<div>Cargando Mejores Votadas...</div>}>
            <MovieSwiper URL={fetchURLS[0].topRatedMovies} title={language === 'es' ? 'Mejores Votadas' : 'Best Voted'} isLarge={true} language={language} />
          </Suspense>
          <Suspense fallback={<div>Cargando Próximamente...</div>}>
            <MovieSwiper URL={fetchURLS[0].upcomingMovies} title={language === 'es' ? "Próximamente" : 'Upcoming'} isLarge={true} language={language} />
          </Suspense>
          <Suspense fallback={<div>Cargando Acción...</div>}>
            <MovieSwiper URL={fetchURLS[0].actionMovies} title={language === 'es' ? 'Acción' : 'Action'} isLarge={true} language={language} />
          </Suspense>
          <Suspense fallback={<div>Cargando Aventura...</div>}>
            <MovieSwiper URL={fetchURLS[0].adventureMovies} title={language === 'es' ? 'Aventura' : 'Adventure'} isLarge={true} language={language} />
          </Suspense>
          <Suspense fallback={<div>Cargando Animación...</div>}>
            <MovieSwiper URL={fetchURLS[0].animationMovies} title={language === 'es' ? 'Animación' : 'Animation'} isLarge={true} language={language} />
          </Suspense>
          <Suspense fallback={<div>Cargando Comedia...</div>}>
            <MovieSwiper URL={fetchURLS[0].comedyMovies} title={language === 'es' ? 'Comedia' : 'Comedy'} isLarge={true} language={language} />
          </Suspense>
          <Suspense fallback={<div>Cargando Crimen...</div>}>
            <MovieSwiper URL={fetchURLS[0].crimeMovies} title={language === 'es' ? 'Crimen' : 'Crime'} isLarge={true} language={language} />
          </Suspense>
          <Suspense fallback={<div>Cargando Documentales...</div>}>
            <MovieSwiper URL={fetchURLS[0].documentaryMovies} title={language === 'es' ? 'Documentales' : 'Documentary'} isLarge={true} language={language} />
          </Suspense>
          <Suspense fallback={<div>Cargando Drama...</div>}>
            <MovieSwiper URL={fetchURLS[0].dramaMovies} title={language === 'es' ? 'Drama' : 'Drama'} isLarge={true} language={language} />
          </Suspense>
          <Suspense fallback={<div>Cargando Familia...</div>}>
            <MovieSwiper URL={fetchURLS[0].familyMovies} title={language === 'es' ? 'Familia' : 'Family'} isLarge={true} language={language} />
          </Suspense>
          <Suspense fallback={<div>Cargando Fantasía...</div>}>
            <MovieSwiper URL={fetchURLS[0].fantasyMovies} title={language === 'es' ? 'Fantasía' : 'Fantasy'} isLarge={true} language={language} />
          </Suspense>
          <Suspense fallback={<div>Cargando Historia...</div>}>
            <MovieSwiper URL={fetchURLS[0].historyMovies} title={language === 'es' ? 'Historia' : 'History'} language={language} />
          </Suspense>
          <Suspense fallback={<div>Cargando Terror...</div>}>
            <MovieSwiper URL={fetchURLS[0].horrorMovies} title={language === 'es' ? 'Terror' : 'Horror'} language={language} />
          </Suspense>
          <Suspense fallback={<div>Cargando Música...</div>}>
            <MovieSwiper URL={fetchURLS[0].musicMovies} title={language === 'es' ? 'Música' : 'Music'} isLarge={true} language={language} />
          </Suspense>
          <Suspense fallback={<div>Cargando Misterio...</div>}>
            <MovieSwiper URL={fetchURLS[0].mysteryMovies} title={language === 'es' ? 'Misterio' : 'Mystery'} isLarge={true} language={language} />
          </Suspense>
          <Suspense fallback={<div>Cargando Románticas...</div>}>
            <MovieSwiper URL={fetchURLS[0].romanceMovies} title={language === 'es' ? 'Románticas' : 'Romance'} isLarge={true} language={language} />
          </Suspense>
          <Suspense fallback={<div>Cargando Ciencia Ficción...</div>}>
            <MovieSwiper URL={fetchURLS[0].scienceFictionMovies} title={language === 'es' ? 'Ciencia Ficción' : 'Science Fiction'} isLarge={true} language={language} />
          </Suspense>
          <Suspense fallback={<div>Cargando Suspenso...</div>}>
            <MovieSwiper URL={fetchURLS[0].thrillerMovies} title={language === 'es' ? 'Suspenso' : 'Thriller'} isLarge={true} language={language} />
          </Suspense>
      </div>
    </div>
  );
}
