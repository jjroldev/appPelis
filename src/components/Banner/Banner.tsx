import { useState, useCallback, lazy } from "react";
import { useNavigate } from "react-router";
import { useQuery, useQueryClient } from "react-query";
import { useAuth } from "../../context/AuthContext";
import "./Banner.css";
import { NavBar } from "../NavBar/NavBar";
import { addFavoriteToProfile, getFavoritesByProfile } from "../../firebase";
import { fetchData } from "../../utils/fetchData";
import {
    URL_IMAGE_lOGO,
    URL_IMAGE_BANNER,
    getURLMovieDetails
} from "../../utils/endPoints";

import { Movie, MovieDetails } from "../../interface/Movie";

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
    const queryClient = useQueryClient();

    const [open, setOpen] = useState(false);

    const { data: fetchedDetails } = useQuery<MovieDetails>(
        `movie-${movie?.id}`,
        () => fetchData(getURLMovieDetails(movie?.id).movieDetails),
        { enabled: !!movie }
    );

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

    const handleAddFavorite = async (movie: Movie | null) => {
        if (movie) {
            await addFavoriteToProfile(currentUser?.id, currentPerfil?.id, movie);
            await queryClient.invalidateQueries(`favorites-${currentUser?.id}-${currentPerfil?.id}`);
        }
    };

    const logoPath = fetchedDetails?.images?.logos?.find((l) => l.iso_639_1 === "en")?.file_path ||
        fetchedDetails?.images?.logos?.[0]?.file_path;

    const renderOverviewOrTitle = () => {
        if (movie?.overview) {
            return <p className="overview">{movie.overview.split(".")[0]}.</p>;
        }
        return null;
    };

    const renderLogoOrContent = () => (
        logoPath ? (
            <>
                <img className="logo-banner" src={`${URL_IMAGE_lOGO}${logoPath}`} alt={movie?.title} />
                {isDetail ? <DetalleBanner movie={fetchedDetails} /> : renderOverviewOrTitle()}
            </>
        ) : renderOverviewOrTitle()
    );

    const renderButtons = () => (
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
    );

    return (
        <div className="header">
            <img className="fondo" 
            src={`${URL_IMAGE_BANNER}${movie?.backdrop_path}`} 
            alt={movie?.title} />
            <NavBar perfil={true} menu={true} logoBuscar={logoBuscar} />
            <div className="cuerpoBanner">
                <div className={`contenedorLogo ${isDetail ? "contenedorDetailN" : ""}`}>
                    {renderLogoOrContent()}
                    {renderButtons()}
                </div>
            </div>
        </div>
    );
}
