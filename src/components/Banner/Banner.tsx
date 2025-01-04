import "./Banner.css";
import { URL_IMAGE_lOGO, URL_IMAGE_BANNER } from "../../App";
import { NavBar } from "../NavBar/NavBar";
import { useCallback } from "react";
import React from "react";
import VideoModal from "../ModalVideo/ModalVideo";
import { useNavigate } from "react-router";
import { Movie } from "../../interface/Movie";
import useFetchMovieDetails from "../../hooks/useFecthMovieWithDetail";
import useFetchLogo from "../../hooks/useFetchLogos";
import { Genre } from "../../interface/Movie";
export function Banner({ movie, language, logoBuscar, isShort, isDetail,isBuscar}: {isBuscar?:boolean, movie: Movie; language: string; logoBuscar: boolean, isShort: boolean, isDetail?: boolean }) {
    const [open, setOpen] = React.useState(false);
    const { movie: fetchedDetails, isLoading } = useFetchMovieDetails(movie?.id, language);
    const { logoPath } = useFetchLogo(movie?.id, language);
    const navigate = useNavigate();
    const handleOpen = useCallback(() => setOpen(true), []);
    const handleClose = useCallback(() => setOpen(false), []);
    const pasarMovie = useCallback(() => {
        navigate("/info", { state: { movie, language } });
    }, [navigate, movie, language]);

    if (isBuscar && (!movie || isLoading)) {
        return (
            <div className="w-full h-screen bg-black flex items-top justify-center">
                <NavBar language={language} logoBuscar={true} />
            </div>
        )
    }

    const renderGenres = (genres: Genre[] = []) => {
        return genres.map((genre: Genre) => (
            <li key={genre.id}>
                <span>{genre.name}</span>
            </li>
        ));
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
                        <div className={`${isShort ? "contenedorLogo1" : `contenedorLogo ${isDetail ? "contenedorDetailN" : ""}`} `}>
                            {logoPath ? (
                                <>
                                    <img
                                        className={`${!isShort ? "logo-banner" : "logo-banner-reducido"}`}
                                        src={`${URL_IMAGE_lOGO}${logoPath}`}
                                        alt={movie.title}
                                    />
                                    {!isShort && (
                                        !isDetail ? (
                                            movie.overview && (
                                                <p className="overview">{movie.overview.slice(0, movie.overview.indexOf(".") + 1)}</p>
                                            )
                                        ) : (
                                            <div className="movieDetailsBanner flex flex-col">
                                                {fetchedDetails?.overview && (
                                                    <p className="overview">{fetchedDetails?.overview.slice(0, fetchedDetails?.overview.indexOf(".") + 1)}</p>
                                                )}
                                                <div className="bannerDetails flex flex-row">
                                                    <span>TMDB {fetchedDetails?.vote_average.toFixed(1)}</span>
                                                    <span>{fetchedDetails?.release_date.split("-")[0]}</span>
                                                    <span>
                                                        {fetchedDetails?.runtime
                                                            ? `${Math.floor(fetchedDetails?.runtime / 60)}h ${fetchedDetails?.runtime % 60}min`
                                                            : "Runtime no disponible"}
                                                    </span>
                                                </div>
                                                <div>
                                                    <ul className="generosBanner flex flex-row">
                                                        {renderGenres(fetchedDetails?.genres)}
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </>
                            ) : (
                                !isShort && (
                                    movie.overview ? (
                                        <p className="overview">{movie.overview.slice(0, movie.overview.indexOf(".") + 1)}</p>
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
                                    <VideoModal language={language} movie={movie} open={open} onClose={handleClose} />
                                    <button onClick={pasarMovie} className="boton-info-banner">
                                        <i className="fa-solid fa-circle-info"></i> {language === 'es' ? 'Más Información' : 'More Information'}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

