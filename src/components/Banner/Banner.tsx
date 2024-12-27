import { useEffect, useState } from "react";
import "./Banner.css";
import { Movie } from "../../interface/Movie";
import { BASE_URL, API_KEY, URL_IMAGE } from "../../App";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import { NavBar } from "../NavBar/NavBar";

export function Banner({ URL, language, logoBuscar }: { URL: string; language: string; logoBuscar: boolean }) {
    const [movie, setMovie] = useState<Movie>();
    const [logoPath, setLogoPath] = useState<string | null>(null);
    const { movies } = useFetchMovies(URL);

    const fetchMovieImages = async (movieId: number) => {
        try {
            const response = await fetch(`${BASE_URL}/movie/${movieId}/images?api_key=${API_KEY}`);
            const data = await response.json();
            const logo = data.logos.find((l: any) => l.iso_639_1 === language) || data.logos.find((l: any) => l.iso_639_1 === 'en');
            setLogoPath(logo?.file_path || null);
        } catch (err) {
            console.error("Error fetching movie images:", err);
        }
    };

    useEffect(() => {
        const validMovies = movies.filter((movie) => movie.backdrop_path);

        if (validMovies.length > 0) {
            const randomMovie = validMovies[Math.floor(Math.random() * validMovies.length)];
            setMovie(randomMovie);
            fetchMovieImages(randomMovie.id);
        } else if (movies.length > 0) {
            const firstMovie = movies[0];
            setMovie(firstMovie);
            fetchMovieImages(firstMovie.id);
        }
    }, [movies, language]);

    return (
        <div className="header">
            <NavBar logoBuscar={logoBuscar} language={language}/>
            {movie && (
                <>
                    <img
                        className="fondo"
                        src={`${URL_IMAGE}${movie.backdrop_path}`}
                        alt={movie.title}
                    />
                    <div className="contenedorLogo">
                        {logoPath ? (
                            <img
                                src={`${URL_IMAGE}${logoPath}`}
                                alt={movie.title}
                            />
                        ):(
                            <p className="overview">{movie.overview}</p>
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
                </>
            )}
        </div>
    );
}
