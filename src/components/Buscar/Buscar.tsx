import { useFetchMovies } from '../../hooks/useFetchMovies';
import './Buscar.css';
import { MdLocalMovies } from "react-icons/md";
import { API_KEY, BASE_URL } from '../../App';
import { useState, useEffect } from 'react';
import { CardMovie } from '../CardMovie/CardMovie';
import { Banner } from '../Banner/Banner';
import { NavBar } from '../NavBar/NavBar';

export function Buscar({ language }: { language: string }) {
    const [nameMovie, setNameMovie] = useState(() => {
        return localStorage.getItem('nameMovie') || '';
    });

    useEffect(() => {
        localStorage.setItem('nameMovie', nameMovie);
    }, [nameMovie]);

    const fetchURL = nameMovie
        ? `${BASE_URL}/search/movie?api_key=${API_KEY}&language=${language}&query=${nameMovie}`
        : `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}`;

    const { movies } = useFetchMovies(fetchURL);

    if (movies.length === 0) {
        return (
            <div className='bg-black contenedorNoC'>
                <NavBar logoBuscar={true} language={language}/>
                <div className='textoNoC'>
                    <p className='text-white'>No hay coincidencias</p>
                </div>
            </div>
        );
    }

    return (
        <div className="contenedor">
            <Banner URL={fetchURL} language={language} logoBuscar={false} />
            <div className='contenedorBuscar'>
                <form
                    className="flex items-center max-w-sm mx-auto"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <MdLocalMovies />
                        </div>
                        <input
                            type="text"
                            id="simple-search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder={language === 'es' ? 'Buscar películas' : "Search Movies"}
                            value={nameMovie}
                            onChange={(e) => setNameMovie(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </button>
                </form>
            </div>
            <div className='contenedorPeliculasBuscar'>
                {movies
                    .filter((movie) => movie.poster_path)
                    .map((movie) => (
                        <CardMovie key={movie.id} movie={movie} />
                    ))
                }
            </div>

        </div>
    );
}
