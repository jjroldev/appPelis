import { useFetchMoviesWithDetails } from '../../hooks/useFecthMovieDetails';
import './Buscar.css';
import { API_KEY, BASE_URL } from '../../App';
import { useState, useEffect } from 'react';
import CardMovie from '../CardMovie/CardMovie';
import { Banner } from '../Banner/Banner';
import { Lupa } from '../Lupa/Lupa';
import { Movie } from '../../interface/Movie';
export default function Buscar({ language }: { language: string }) {
    const [nameMovie, setNameMovie] = useState(() => {
        return localStorage.getItem(`nameMovie-${language}`) || '';
    });

    const [featuredMovie, setFeaturedMovie] = useState(() => {
        const storedMovie = localStorage.getItem(`featuredMovie-buscar-${language}`);
        return storedMovie ? JSON.parse(storedMovie) : null;
    });
    const fetchPopular = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}`
    const fetchSearch = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=${language}&query=${nameMovie}`
    const fetchURL = nameMovie
        ? fetchSearch
        : fetchPopular;

    const { movies } = useFetchMoviesWithDetails(fetchURL, 4, language, ["videos", 'images', "credits"])
    const { movies: moviesPopulars } = useFetchMoviesWithDetails(fetchPopular, 6, language, ["videos", 'images', "credits"])

    const validMovies = movies.filter((movie) => movie.backdrop_path);
    const validMoviesPopular = moviesPopulars.filter((movie) => movie.backdrop_path);
    useEffect(() => {
        localStorage.setItem(`nameMovie-${language}`, nameMovie);
    }, [nameMovie]);

    useEffect(() => {
        const movieToStore = validMovies[0] || validMoviesPopular[0];
        if (movieToStore) {
            localStorage.setItem(`featuredMovie-buscar-${language}`, JSON.stringify(movieToStore));
            setFeaturedMovie(movieToStore);
        }
    }, [validMovies, validMoviesPopular]);

    const renderMovies = (movies: Movie[]) => {
        return movies
            .map((movie, index) => (
                movie.poster_path && movie.credits.cast.length > 0 &&
                movie.credits.crew.length > 0 && (<CardMovie key={index} movie={movie} language={language} />)
            ))
    }

    return (
        <div className={`contenedor`}>
            <Banner
                movie={featuredMovie}
                language={language}
                logoBuscar={true}
                isShort={true}
            />
            <div className='contenedorBuscar'>
                <Lupa
                    placeholder={language === 'es' ? 'Buscar películas' : 'Search Movies'}
                    onSubmit={(value) => setNameMovie(value)}
                />
            </div>
            {movies.length !== 0 ? (
                movies.length > 0 ? (
                    <div className='contenedorPeliculasBuscar'>
                        {renderMovies(validMovies)}
                    </div>
                ) : (
                    <div className="w-full h-full min-h-screen bg-black flex items-start justify-center">
                        <div className="spinner"></div>
                    </div>
                )
            ) : (
                moviesPopulars.length > 0 ? (
                    <>
                        <div className='textoNoC'>
                            <p className='text-white'>{language === 'es' ? "No hay coincidencias" : `There are no 
                        coincidences of ${nameMovie}, but these are the most popular movies we have`}</p>
                        </div>
                        <div className='contenedorPeliculasBuscar'>
                            {renderMovies(validMoviesPopular)}
                        </div>
                    </>
                ) : (
                    <div className="w-full h-full min-h-screen bg-black flex items-start justify-center">
                        <div className="spinner"></div>
                    </div>
                )
            )}
        </div>
    );
}

