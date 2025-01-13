import './Buscar.css';
import { API_KEY, BASE_URL } from '../../App';
import { useState, useMemo } from 'react';
import CardMovie from '../CardMovie/CardMovie';
import { Lupa } from '../Lupa/Lupa';
import { Movie } from '../../interface/Movie';
import { useFetchMovies } from '../../hooks/useFetchMovies';
import { useLanguage } from '../../context/LanguageContext';
import { Banner } from '../Banner/Banner';
export default function Buscar() {
  const { language } = useLanguage();
  const [nameMovie, setNameMovie] = useState(() => {
    return sessionStorage.getItem(`nameMovie-${language}`) || '';
  });

  const fetchPopular = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}`;
  const fetchSearch = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=${language}&query=${nameMovie}`;
  const fetchURL = nameMovie ? fetchSearch : fetchPopular;

  const { movies } = useFetchMovies(fetchURL, 4);
  const { movies: moviesPopulars } = useFetchMovies(fetchPopular, 6);

  const validMovies = useMemo(() => movies.filter((movie) => movie.backdrop_path), [movies]);
  const validMoviesPopular = useMemo(
    () => moviesPopulars.filter((movie) => movie.backdrop_path),
    [moviesPopulars]
  );

  const handleSearch = (value: string) => {
    setNameMovie(value);
    sessionStorage.setItem(`nameMovie-${language}`, value);
  };

  const renderMovies = (movies: Movie[]) =>
    movies.map((movie, index) => <CardMovie key={index} movie={movie} />);

  const loadingSpinner = (
    <div className="w-full h-full min-h-screen bg-black flex items-center justify-center">
      <div className="spinner"></div>
    </div>
  );

  const renderContent = () => {
    if (movies.length > 0) {
      return <div className="contenedorPeliculasBuscar">{renderMovies(validMovies)}</div>;
    } else if (nameMovie && validMovies.length === 0) {
      return (
        <div className="contenedorPeliculasBuscar">{renderMovies(validMoviesPopular)}</div>
      );
    } else if (moviesPopulars.length > 0) {
      return <div className="contenedorPeliculasBuscar">{renderMovies(validMoviesPopular)}</div>;
    } else {
      return loadingSpinner;
    }
  };

  return (
    <div className="contenedor">
      {validMovies[0] && <Banner
        movie={validMovies[0]}
        logoBuscar={true}
        isShort={true}
      />}
      <div className="contenedorBuscar">
        <Lupa
          placeholder={language === 'es' ? 'Buscar películas' : 'Search Movies'}
          onSubmit={handleSearch}
        />
      </div>
      {renderContent()}
    </div>
  );
}
