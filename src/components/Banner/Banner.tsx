import { useState, useCallback, lazy } from "react";
import { useNavigate } from "react-router";
import { useQuery } from "react-query";
import { useAuth } from "../../context/AuthContext";
import "./Banner.css";
import { NavBar } from "../NavBar/NavBar";
import { getFavoritesByProfile } from "../../firebase";
import { fetchData } from "../../utils/fetchData";
import {
    URL_IMAGE_lOGO,
    URL_IMAGE_BANNER,
    getURLMovieDetails
} from "../../utils/endPoints";

import { Movie, MovieDetails } from "../../interface/Movie";
import { useFavorites } from "../../hooks/useFavorites";

const VideoModal = lazy(() => import("../ModalVideo/ModalVideo"));
const DetalleBanner = lazy(() => import("../DetalleBanner/DetalleBaner"));

interface BannerProps {
    movie: Movie | null;
    logoBuscar: boolean;
    isDetail?: boolean;
}

export function Banner({ movie, logoBuscar, isDetail = false }: BannerProps) {
    const { currentPerfil, currentUser } = useAuth();
    const navigate = useNavigate();
    const {handleAddFavorite}=useFavorites()

    const [open, setOpen] = useState(false);

    const { data: fetchedDetails } = useQuery<MovieDetails>(
        `movie-${movie?.id}`,
        () => fetchData(getURLMovieDetails(movie?.id).movieDetails),
        { enabled: !!movie }
    );

    const logoPath = fetchedDetails?.images?.logos?.find((l) => l.iso_639_1 === "en")?.file_path ||
        fetchedDetails?.images?.logos?.[0]?.file_path;

    useQuery<Movie[]>(
        `favorites-${currentUser?.id}-${currentPerfil?.id}`,
        () => getFavoritesByProfile(currentUser?.id, currentPerfil?.id),
        { enabled: !!currentUser?.id && !!currentPerfil?.id }
    );

    const handleOpen = useCallback(() => setOpen(true), []);
    const handleClose = useCallback(() => setOpen(false), []);

    const pasarMovie = useCallback(() => {
        navigate("/info", { state: { movie } });
    }, [navigate, movie]);

    const renderOverviewOrTitle = () => {
        if (movie?.overview) {
            return <p className="overview">{movie.overview.split(",")[0]}.</p>;
        }
        return null;
    };

    const Logo = () => (
        logoPath ? (
            <>
                <img className="logo-banner" src={`${URL_IMAGE_lOGO}${logoPath}`} alt={movie?.title} />
                {isDetail ? <DetalleBanner movie={fetchedDetails} /> : renderOverviewOrTitle()}
            </>
        ) : renderOverviewOrTitle()
    );

    function Botones() {
        return (
            <div className="botones">
                <button className="play" onClick={handleOpen}>
                    <i className="fa-solid fa-play"></i> Play
                </button>
                <VideoModal movie={movie} open={open} onClose={handleClose} />

                {location.hash !== "#/info" && (
                    <button onClick={pasarMovie} className="boton-info-banner">
                        <i className="fa-solid fa-circle-info"></i> More Information
                    </button>
                )}

                <button onClick={() => handleAddFavorite(movie)} className="botonMeGustaBanner">
                    <i className="fa-solid fa-heart"></i>
                </button>
            </div>
        )
    }

    if (!movie) {
        return (
            <div className="header">
                <NavBar perfil={true} menu={true} logoBuscar={logoBuscar} />
            </div>
        )
    }

    return (
        <div className="header">
            <img className="fondo"
                src={`${URL_IMAGE_BANNER}${movie?.backdrop_path}`}
                alt={movie?.title} />
            <NavBar perfil={true} menu={true} logoBuscar={logoBuscar} />
            <div className="cuerpoBanner">
                <div className={`contenedorLogo ${isDetail ? "contenedorDetailN" : ""}`}>
                    <Logo />
                    <Botones />
                </div>
            </div>
        </div>
    );
}
