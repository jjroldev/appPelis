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

    const fetchURL = nameMovie
        ? `${BASE_URL}/search/movie?api_key=${API_KEY}&language=${language}&query=${nameMovie}`
        : `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}`;

    const { movies } = useFetchMoviesWithDetails(fetchURL, 4, language, ["videos", 'images', "credits"])
    const validMovies = movies.filter((movie) => movie.backdrop_path);
    useEffect(() => {
        localStorage.setItem('nameMovie', nameMovie);
    }, [nameMovie]);

    return (
        <div className={`contenedor ${movies.length === 0 && "contenedorNotFound"}`}>
            <Banner
                movie={validMovies[0]}
                language={language}
                logoBuscar={false}
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
                            <CardMovie key={index} movie={movie} language={language} />
                        ))
                    }
                </div>
            ) : (
                <div className='textoNoC'>
                    <p className='text-white'>{language === 'es' ? "No hay coincidencias" : "Not Matches Found"}</p>
                </div>
            )}
        </div>
    );
}

