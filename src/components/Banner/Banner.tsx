import "./Banner.css";
import { Movie } from "../../interface/Movie";
import { BASE_URL, API_KEY, URL_IMAGE_lOGO, URL_IMAGE_BANNER } from "../../App";
import { NavBar } from "../NavBar/NavBar";
import useFetchLogo from "../../hooks/useFectLogo";
import React from "react";
import VideoModal from "../ModalVideo/ModalVideo";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import useFetchMovieDetails from "../../hooks/useFecthMovieDetails";
export function Banner({ movie, language, logoBuscar, isShort, isDetail }: { movie: Movie; language: string; logoBuscar: boolean, isShort: boolean, isDetail?: boolean }) {
    const logoPath = useFetchLogo(movie?.id ?? 0, language, BASE_URL, API_KEY);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let movieDetails = null;
    if (isDetail) {
        const { movieDetails: details, cast } = useFetchMovieDetails(movie?.id ?? 0, language);
        movieDetails = details;
    }
    // useEffect(() => {
    //     const validMovies = movies.filter((movie) => movie.backdrop_path);

    //     if (validMovies.length > 0) {
    //         const randomMovie = validMovies[Math.floor(Math.random() * validMovies.length)];
    //         console.log(randomMovie)
    //         setMovie(randomMovie);
    //     } else if (movies.length > 0) {
    //         const firstMovie = movies[0];
    //         setMovie(firstMovie);
    //     } else {
    //         setMovie(null)
    //     }
    //     if(logoPath){
    //         console.log(logoPath)
    //     }
    // }, [movies, language]);

    const navigate = useNavigate();
    const pasarMovie = () => {
        navigate('/info', { state: { movie, language } });
    };
    return (
        <div className={`header ${isShort ? "header-short" : ""}`}>
            {movie && (
                <>
                    <img
                        className="fondo"
                        src={`${URL_IMAGE_BANNER}${movie.backdrop_path}`}
                        alt={movie.title}
                    />
                    <NavBar logoBuscar={logoBuscar} language={language} />
                    <div className="cuerpoBanner">
                        <div className={`${isShort ? "contenedorLogo1" : `contenedorLogo ${isDetail && "contenedorDetailN"}`} `}>
                            {logoPath ? (
                                <>
                                    <img className={`${!isShort ? "logo-banner" : "logo-banner-reducido"}`}
                                        src={`${URL_IMAGE_lOGO}${logoPath}`}
                                        alt={movie.title}
                                    />
                                    {!isShort && (
                                        !isDetail ? (
                                            movie.overview && (
                                                <p className="overview">{movie.overview.slice(0, movie.overview.indexOf(".") + 1)}  </p>
                                            )
                                        ) : (
                                            <div className="movieDetailsBanner flex flex-col">
                                                {
                                                    movie.overview && (
                                                        <p className="overview">{movie.overview}</p>
                                                    )
                                                }
                                                <div className="bannerDetails flex flex-row">
                                                    <span>TMDB {movie.vote_average}</span>
                                                    <span>{movie.release_date.split("-")[0]}</span>
                                                    <span>
                                                        {movie.runtime ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}min`
                                                            : "Runtime no disponible"}
                                                    </span>
                                                </div>
                                                <div>
                                                    <ul className="generosBanner flex flex-row">
                                                        {movieDetails?.genres?.map((genre) => (
                                                            <li key={genre.id}>
                                                                <span>{genre.name}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </>
                            ) : (
                                !isShort && (
                                    movie.overview ? (
                                        <p className="overview">{movie.overview.slice(0, movie.overview.indexOf(".") + 1)}  </p>
                                    ) : (
                                        <h2 className="titulo-banner">{movie.original_title}</h2>
                                    )
                                )
                            )}

                            {!isShort && (
                                <div className="botones">
                                    <button onClick={handleOpen}>
                                        <i className="fa-solid fa-play"></i> {language === "es" ? "Reproducir" : "Play"}
                                    </button>
                                    <VideoModal language={language} movieId={movie.id} open={open} onClose={handleClose} />
                                    <button onClick={pasarMovie} className="boton-info-banner">
                                        <i className="fa-solid fa-circle-info"></i> {language === 'es' ? 'Más Información' : 'More Information'}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )
            }
        </div>
    );
}
