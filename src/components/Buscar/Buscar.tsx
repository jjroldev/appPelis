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
    const storedData = localStorage.getItem(`nameMovie-${language}`);
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        if (parsedData && typeof parsedData.value === "string" && parsedData.timestamp) {
          if (new Date().getTime() - parsedData.timestamp < 600000) {
            return parsedData.value;
          }
        }
      } catch (err) {
        console.error("Error parsing nameMovie from localStorage:", err);
      }
    }
    return '';
  });  
  
  const [savedMovie, setSavedMovie] = useState<Movie | null>(() => {
    const storedData = localStorage.getItem(`featuredMovie-buscar-${language}`);
    return storedData ? JSON.parse(storedData) : null;
  });

  const fetchPopular = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}`;
  const fetchSearch = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=${language}&query=${nameMovie}`;
  const fetchURL = fetchSearch || fetchPopular;

  const { movies } = useFetchMovies(fetchURL, 4, language);
  const { movies: moviesPopulars } = useFetchMovies(fetchPopular, 6, language);

  const validMovies = useMemo(() => movies.filter((movie) => movie.backdrop_path), [movies]);
  const validMoviesPopular = useMemo(() => moviesPopulars.filter((movie) => movie.backdrop_path), [moviesPopulars]);

  const featuredMovie = validMovies[0] || validMoviesPopular[0] || savedMovie;

  const handleSearch = (value: string) => {
    setNameMovie(value);

    localStorage.setItem(
      `nameMovie-${language}`,
      JSON.stringify({ value, timestamp: new Date().getTime() })
    );
  };

  useEffect(() => {
    if (featuredMovie) {
      setSavedMovie(featuredMovie);
      localStorage.setItem(`featuredMovie-buscar-${language}`, JSON.stringify(featuredMovie));
    }
  }, [featuredMovie, language]);

  const renderMovies = (movies: Movie[]) =>
    movies.map((movie, index) => (
      <CardMovie key={index} movie={movie} language={language} />
    ));

  const noMoviesFoundMessage = (
    <div className="textoNoC">
      <p className="text-white">
        {language === 'es'
          ? `No hay coincidencias de "${nameMovie}", pero estas son las películas más populares:`
          : `There are no matches for "${nameMovie}", but these are the most popular movies:`}
      </p>
    </div>
  );

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
        <>
          {noMoviesFoundMessage}
          <div className="contenedorPeliculasBuscar">{renderMovies(validMoviesPopular)}</div>
        </>
      );
    } else if (moviesPopulars.length > 0) {
      return <div className="contenedorPeliculasBuscar">{renderMovies(validMoviesPopular)}</div>;
    } else {
      return loadingSpinner;
    }
  };
  

  return (
    <div className="contenedor">
      <Banner
        movie={featuredMovie}
        language={language}
        logoBuscar={true}
        isShort={true}
        isBuscar={true}
      />
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