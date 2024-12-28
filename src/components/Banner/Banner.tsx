import { useEffect, useState } from "react";
import "./Banner.css";
import { Movie } from "../../interface/Movie";
import { BASE_URL, API_KEY, URL_IMAGE } from "../../App";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import { NavBar } from "../NavBar/NavBar";
import useFetchLogo from "../../hooks/useFectLogo";

export function Banner({ URL, language, logoBuscar }: { URL: string; language: string; logoBuscar: boolean }) {
    const [movie, setMovie] = useState<Movie | null>(null);
    const { movies } = useFetchMovies(URL,1);
    const logoPath = useFetchLogo(movie?.id ?? 0, language, BASE_URL, API_KEY);

    useEffect(() => {
        const validMovies = movies.filter((movie) => movie.backdrop_path);

        if (validMovies.length > 0) {
            const randomMovie = validMovies[Math.floor(Math.random() * validMovies.length)];
            setMovie(randomMovie);
        } else if (movies.length > 0) {
            const firstMovie = movies[0];
            setMovie(firstMovie);
        }
    }, [movies, language]);

    return (
        <div className="header">
            {movie && (
                <>
                    <img
                        className="fondo"
                        src={`${URL_IMAGE}${movie.backdrop_path}`}
                        alt={movie.title}
                    />
                    <NavBar logoBuscar={logoBuscar} language={language} />
                    <div className="cuerpoBanner">
                        <div className="contenedorLogo">
                            {logoPath ? (
                                <>
                                <img
                                    src={`${URL_IMAGE}${logoPath}`}
                                    alt={movie.title}
                                />
                                <p className="overview">{movie.overview.slice(0,movie.overview.indexOf(".")+1)}</p>
                                </>
                            ) : (
                                <p className="overview">{movie.overview.slice(0,movie.overview.indexOf(".")+1)}</p>
                            )}
                            <div className="botones">
                                <button>
                                    <i className="fa-solid fa-play"></i> {language === 'es' ? 'Reproducir' : 'Play'}
                                </button>
                                <button>
                                    <i className="fa-solid fa-circle-info"></i> {language === 'es' ? 'Más Información' : 'More Information'}
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
