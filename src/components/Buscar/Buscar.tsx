import { useFetchMoviesWithDetails } from '../../hooks/useFecthMovieDetails';
import './Buscar.css';
import { API_KEY, BASE_URL } from '../../App';
import { useState, useEffect } from 'react';
import CardMovie from '../CardMovie/CardMovie';
import { Banner } from '../Banner/Banner';
import { Lupa } from '../Lupa/Lupa';

export default function Buscar({ language }: { language: string }) {
    const [nameMovie, setNameMovie] = useState(() => {
        return localStorage.getItem('nameMovie') || '';
    });

    const [featuredMovie, setFeaturedMovie] = useState(() => {
        const storedMovie = localStorage.getItem('featuredMovie-buscar');
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
        localStorage.setItem('nameMovie', nameMovie);
    }, [nameMovie]);

    useEffect(() => {
        const movieToStore = validMovies[0] || validMoviesPopular[0];
        if (movieToStore) {
            localStorage.setItem('featuredMovie-buscar', JSON.stringify(movieToStore));
            setFeaturedMovie(movieToStore);
        }
    }, [validMovies, validMoviesPopular]);

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
                <div className='contenedorPeliculasBuscar'>
                    {movies
                        .filter((movie) => movie.poster_path)
                        .map((movie, index) => (
                            movie.backdrop_path && movie.poster_path
                            && movie.images.logos[0] && movie.credits.cast[0] &&
                            movie.credits.crew[0] && (<CardMovie key={index} movie={movie} language={language} />)
                        ))
                    }
                </div>
            ) : (
                <>
                    <div className='textoNoC'>
                        <p className='text-white'>{language === 'es' ? "No hay coincidencias" : `There are no 
                        coincidences of ${nameMovie}, but these are the most popular movies we have`}</p>
                    </div>
                    <div className='contenedorPeliculasBuscar'>
                        {moviesPopulars
                            .filter((movie) => movie.poster_path)
                            .map((movie, index) => (
                                movie.backdrop_path && movie.poster_path
                                && movie.images.logos[0] && movie.credits.cast[0] &&
                                movie.credits.crew[0] && (<CardMovie key={index} movie={movie} language={language} />)
                            ))
                        }
                    </div>
                </>
            )}
        </div>
    );
}

