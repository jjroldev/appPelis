import { useFetchMovies } from '../../hooks/useFetchMovies';
import './Buscar.css';
import { API_KEY, BASE_URL } from '../../App';
import { useState, useEffect } from 'react';
import  CardMovie  from '../CardMovie/CardMovie';
import  {Banner}  from '../Banner/Banner';
import { Lupa } from '../Lupa/Lupa';

export function Buscar({ language }: { language: string }) {
    const [nameMovie, setNameMovie] = useState(() => {
        return localStorage.getItem('nameMovie') || '';
    });

    const [debouncedNameMovie, setDebouncedNameMovie] = useState(nameMovie);

    const fetchURL = debouncedNameMovie
        ? `${BASE_URL}/search/movie?api_key=${API_KEY}&language=${language}&query=${debouncedNameMovie}`
        : `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}`;

    const { movies } = useFetchMovies(fetchURL, 5);

    useEffect(() => {
        localStorage.setItem('nameMovie', nameMovie);
    }, [nameMovie]);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedNameMovie(nameMovie);
        }, 1000);

        return () => clearTimeout(handler);
    }, [nameMovie]);

    return (
        <div className={`contenedor ${movies.length===0 &&("contenedorNotFound")}`}>
            <Banner URL={fetchURL} language={language} logoBuscar={false} isShort={true} />
            <div className='contenedorBuscar'>
                <Lupa
                    value={nameMovie}
                    placeholder={language === 'es' ? 'Buscar películas' : 'Search Movies'}
                    onChange={(e) => setNameMovie(e.target.value)}
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
                    <p className='text-white'>{language=='es'?"No hay coincidencias":"Not Matches Found"}</p>
                </div>
            )}
        </div>
    );
}
