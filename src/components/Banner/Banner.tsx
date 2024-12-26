import { useEffect, useState } from "react";
import "./Banner.css";
import { Movie } from "../../interface/Movie";
import { BASE_URL, API_KEY, URL_IMAGE } from "../../App";
import { useFetchMovies } from "../../hooks/useFetchMovies";

export function Banner({ URL, language }: { URL: string; language: string }) {
    const [movie, setMovie] = useState<Movie>();
    const [logoPath, setLogoPath] = useState("");
    const { movies } = useFetchMovies(URL);

    const fetchMovieImages = async (movieId: number) => {
        try {
            const response = await fetch(`${BASE_URL}/movie/${movieId}/images?api_key=${API_KEY}`);
            const data = await response.json();
            let logo = data.logos.find((l: any) => l.iso_639_1 === language);
            if (!logo) {
                logo = data.logos.find((l: any) => l.iso_639_1 === 'en');
            }
            setLogoPath(logo?.file_path);
        } catch (err) {
            console.error("Error fetching movie images:", err);
        }
    };

    useEffect(() => {
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        setMovie(randomMovie);

        if (randomMovie) {
            fetchMovieImages(randomMovie.id);
        }
    }, [movies, language]);

    return (
        <>
            <div className="header">
                <div className="navbar">
                    <img
                        src="../src/images/Netflix_Logo_RGB.png"
                        alt="Netflix Logo"
                    />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <img
                    className="fondo"
                    src={`${URL_IMAGE}${movie?.backdrop_path}`}
                    alt={movie?.title}
                />
                <div className="contenedorLogo">
                    <img
                        src={`${URL_IMAGE}${logoPath}`}
                        alt={movie?.title}
                    />
                    <div className="botones">
                        <button>
                            <i className="fa-solid fa-play"></i> Reproducir
                        </button>
                        <button>
                            <i className="fa-solid fa-circle-info"></i> Más Información
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
