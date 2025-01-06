import './Buscar.css';
import { API_KEY, BASE_URL } from '../../App';
import { useState, useMemo, useEffect } from 'react';
import CardMovie from '../CardMovie/CardMovie';
import { Banner } from '../Banner/Banner';
import { Lupa } from '../Lupa/Lupa';
import { Movie } from '../../interface/Movie';
import { useFetchMovies } from '../../hooks/useFetchMovies';

export default function Buscar({ language }: { language: string }) {
  const [nameMovie, setNameMovie] = useState(() => {
    const storedData = sessionStorage.getItem(`nameMovie-${language}`);
    if (storedData) {
      const { value, timestamp } = JSON.parse(storedData);
      if (new Date().getTime() - timestamp < 600000) {
        return value;
      }
    }
    return '';
  });

  const [savedMovie, setSavedMovie] = useState<Movie | null>(() => {
    const storedData = sessionStorage.getItem(`featuredMovie-buscar-${language}`);
    return storedData ? JSON.parse(storedData) : null;
  });

  const fetchPopular = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}`;
  const fetchSearch = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=${language}&query=${nameMovie}`;
  const fetchURL = fetchSearch || fetchPopular;

  const { movies } = useFetchMovies(fetchURL, 4, language);
  const { movies: moviesPopulars } = useFetchMovies(fetchPopular, 6, language);

  const validMovies = useMemo(() => movies.filter((movie) => movie.backdrop_path), [movies]);
  const validMoviesPopular = useMemo(() => moviesPopulars.filter((movie) => movie.backdrop_path), [moviesPopulars]);

  const featuredMovie = validMovies[0] || validMoviesPopular[0];

  const handleSearch = (value: string) => {
    setNameMovie(value);

    sessionStorage.setItem(
      `nameMovie-${language}`,
      JSON.stringify({ value, timestamp: new Date().getTime() })
    );
  };

  useEffect(() => {
    if (featuredMovie) {
      setSavedMovie(featuredMovie);
      sessionStorage.setItem(`featuredMovie-buscar-${language}`, JSON.stringify(featuredMovie));
    }
  }, [featuredMovie, language]);

  const renderMovies = (movies: Movie[]) =>
    movies.map((movie, index) => (
      <CardMovie key={index} movie={movie} language={language} />
    ));

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
      {savedMovie && <Banner
        movie={savedMovie}
        language={language}
        logoBuscar={true}
        isShort={true}
        isBuscar={true}
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