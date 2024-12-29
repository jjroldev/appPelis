import { useEffect, useState } from "react";
import "./Banner.css";
import { Movie } from "../../interface/Movie";
import { BASE_URL, API_KEY, URL_IMAGE } from "../../App";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import { NavBar } from "../NavBar/NavBar";
import useFetchLogo from "../../hooks/useFectLogo";

export function Banner({ URL, language, logoBuscar, isShort }: { URL: string; language: string; logoBuscar: boolean, isShort: boolean }) {
    const [movie, setMovie] = useState<Movie | null>(null);
    const { movies } = useFetchMovies(URL, 5);
    const logoPath = useFetchLogo(movie?.id ?? 0, language, BASE_URL, API_KEY);

    useEffect(() => {
        const validMovies = movies.filter((movie) => movie.backdrop_path);

        if (validMovies.length > 0) {
            const randomMovie = validMovies[Math.floor(Math.random() * validMovies.length)];
            setMovie(randomMovie);
        } else if (movies.length > 0) {
            const firstMovie = movies[0];
            setMovie(firstMovie);
        } else {
            setMovie(null)
        }
    }, [movies, language]);

    return (
        <div className={`header ${isShort ? "header-short" : ""}`}>
            {movie ? (
                <>
                    <img
                        className="fondo"
                        src={`${URL_IMAGE}${movie.backdrop_path}`}
                        alt={movie.title}
                    />
                    <NavBar logoBuscar={logoBuscar} language={language} />
                    <div className="cuerpoBanner">
                        <div className={isShort ? "contenedorLogo1" : "contenedorLogo"}>
                            {logoPath ? (
                                <>
                                    <img
                                        src={`${URL_IMAGE}${logoPath}`}
                                        alt={movie.title}
                                    />
                                    {!isShort && (
                                        <p className="overview">
                                            {movie.overview.slice(0, movie.overview.indexOf(".") + 1)}
                                        </p>
                                    )}
                                </>
                            ) : (
                                !isShort && (
                                    <p className="overview">
                                        {movie.overview.slice(0, movie.overview.indexOf(".") + 1)}
                                    </p>
                                )
                            )}

                            {!isShort && (
                                <div className="botones">
                                    <button>
                                        <i className="fa-solid fa-play"></i> {language === 'es' ? 'Reproducir' : 'Play'}
                                    </button>
                                    <button>
                                        <i className="fa-solid fa-circle-info"></i> {language === 'es' ? 'Más Información' : 'More Information'}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#202020',
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 500 250"
                        style={{
                            width: '80%',
                            height: 'auto',
                        }}
                    >
                        <rect width="100%" height="100%" fill="#202020" />
                        <text
                            x="50%"
                            y="50%"
                            fill="#ffffff"
                            fontFamily="Arial, sans-serif"
                            fontSize="24"
                            fontWeight="bold"
                            textAnchor="middle"
                            dominantBaseline="middle"
                        >
                            {language === "es" ? "No Hay Resultados" : "Not Results Found"}
                        </text>
                    </svg>
                </div>
            )}
        </div>
    );
}
