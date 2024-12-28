import { Banner } from "../Banner/Banner";
import { API_KEY, BASE_URL } from "../../App";
import './Home.css';
import { MovieSwiper } from "../MovieSwiper/MovieSwiper";
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

  return (
    <div className="contenedorHome">
      <Banner URL={fetchURLS[0].nowPlaying} language={language} logoBuscar={true} isShort={false}/>
      <div className="contenedorPeliculas">
        <MovieSwiper URL={fetchURLS[0].popularMovies} title={language === 'es' ? 'Películas Populares' : 'Populars Movies'} language={language}/>
        <MovieSwiper URL={fetchURLS[0].topRatedMovies} title={language === 'es' ? 'Mejores Votadas' : 'Best Voted' }isLarge={true} language={language}/>
        <MovieSwiper URL={fetchURLS[0].upcomingMovies} title={language === 'es' ? "Próximamente" : 'Upcoming'} isLarge={true}language={language}/>
        <MovieSwiper URL={fetchURLS[0].actionMovies} title={language === 'es' ? 'Acción' : 'Action'} isLarge={true}language={language}/>
        <MovieSwiper URL={fetchURLS[0].adventureMovies} title={language === 'es' ? 'Aventura' : 'Adventure'} isLarge={true}language={language}/>
        <MovieSwiper URL={fetchURLS[0].animationMovies} title={language === 'es' ? 'Animación' : 'Animation'} isLarge={true}language={language}/>
        <MovieSwiper URL={fetchURLS[0].comedyMovies} title={language === 'es' ? 'Comedia' : 'Comedy'} isLarge={true}language={language}/>
        <MovieSwiper URL={fetchURLS[0].crimeMovies} title={language === 'es' ? 'Crimen' : 'Crime'} isLarge={true}language={language}/>
        <MovieSwiper URL={fetchURLS[0].documentaryMovies} title={language === 'es' ? 'Documentales' : 'Documentary'} isLarge={true}language={language}/>
        <MovieSwiper URL={fetchURLS[0].dramaMovies} title={language === 'es' ? 'Drama' : 'Drama'} isLarge={true}language={language}/>
        <MovieSwiper URL={fetchURLS[0].familyMovies} title={language === 'es' ? 'Familia' : 'Family'} isLarge={true}language={language}/>
        <MovieSwiper URL={fetchURLS[0].fantasyMovies} title={language === 'es' ? 'Fantasía' : 'Fantasy'} isLarge={true}language={language}/>
        <MovieSwiper URL={fetchURLS[0].historyMovies} title={language === 'es' ? 'Historia' : 'History'} language={language}/>
        <MovieSwiper URL={fetchURLS[0].horrorMovies} title={language === 'es' ? 'Terror' : 'Horror'} language={language}/>
        <MovieSwiper URL={fetchURLS[0].musicMovies} title={language === 'es' ? 'Música' : 'Music'} isLarge={true}language={language}/>
        <MovieSwiper URL={fetchURLS[0].mysteryMovies} title={language === 'es' ? 'Misterio' : 'Mystery'} isLarge={true}language={language}/>
        <MovieSwiper URL={fetchURLS[0].romanceMovies} title={language === 'es' ? 'Románticas' : 'Romance'} isLarge={true}language={language}/>
        <MovieSwiper URL={fetchURLS[0].scienceFictionMovies} title={language === 'es' ? 'Ciencia Ficción' : 'Science Fiction'} isLarge={true}language={language}/>
        <MovieSwiper URL={fetchURLS[0].thrillerMovies} title={language === 'es' ? 'Suspenso' : 'Thriller'} isLarge={true}language={language}/>
      </div>
    </div>
  );
}
