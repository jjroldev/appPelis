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
import CarouselBoostrap from "../CarouselBoostrap/CarouselBoostrap";
import { Genre } from "../../interface/Movie";
import { Skeleton } from "@mui/material";
import Carousel from "react-multi-carousel";
import { useLanguage } from "../../context/LanguageContext";
import useFetchProviders from "../../hooks/useFetchProviders";
export function Banner({ movie,  logoBuscar, isShort, isDetail, isBuscar }: { isBuscar?: boolean, movie: Movie; logoBuscar: boolean, isShort: boolean, isDetail?: boolean }) {
    const { language } = useLanguage();
    const [open, setOpen] = React.useState(false);
    const { movie: fetchedDetails, isLoading } = useFetchMovieDetails(movie?.id, language);
    const { logoPath } = useFetchLogo(movie?.id);
    const navigate = useNavigate();
    const { movieProviders } = useFetchProviders(movie.id)
    const handleOpen = useCallback(() => setOpen(true), []);
    const handleClose = useCallback(() => setOpen(false), []);
    const pasarMovie = useCallback(() => {
        navigate("/info", { state: { movie, language } });
    }, [navigate, movie, language]);

    if (isBuscar && (!movie || isLoading)) {
        return (
            <div className={`header ${isShort ? "header-short" : ""}`}>
                <NavBar logoBuscar={true} />
                <Skeleton
                    width="100%"
                    height="100%"
                    variant="rectangular"
                    sx={{ bgcolor: "grey.900" }}
                    animation="wave"
                />
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

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1281 },
            items: 7,
            slidesToSlide: 6,
        },
        tablet: {
            breakpoint: { max: 1280, min: 769 },
            items: 6,
            slidesToSlide: 5,
        },
        mobileLarge: {
            breakpoint: { max: 768, min: 481 },
            items: 4,
            slidesToSlide: 3,
        },
        mobileSmall: {
            breakpoint: { max: 480, min: 0 },
            items: 2,
            slidesToSlide: 1,
        },
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
                    <NavBar logoBuscar={logoBuscar} />
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
                                            <>
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
                                                <div className="provedores-container posters-continer-banner">
                                                    <div className='postersInfo'>
                                                        <CarouselBoostrap movie={movie} isPoster={true} />
                                                    </div>
                                                    {movieProviders &&
                                                        <Carousel
                                                            swipeable={false}
                                                            draggable={false}
                                                            showDots={false}
                                                            responsive={responsive}
                                                            ssr={true}
                                                            infinite={true}
                                                            keyBoardControl={true}
                                                            className="carouselProviders"
                                                        >
                                                            {movieProviders.map((provider: any) => (
                                                                <img
                                                                    key={provider.provider_id}
                                                                    className="provedorLogo"
                                                                    src={URL_IMAGE_BANNER + provider.logo_path}
                                                                    alt={provider.provider_name}
                                                                />
                                                            ))}
                                                        </Carousel>

                                                    }
                                                </div>
                                            </>
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

