import "./Banner.css";
import { NavBar } from "../NavBar/NavBar";
import { URL_IMAGE_lOGO, URL_IMAGE_BANNER, getURLMovieDetails } from "../../utils/endPoints";
import React, { useCallback } from "react";
import { useNavigate } from "react-router";
import { getFavoritesByProfile } from "../../firebase";
import { lazy } from "react";
const VideoModal = lazy(() => import('../ModalVideo/ModalVideo'));
import { Movie, MovieDetails } from "../../interface/Movie";
const DetalleBanner = lazy(() => import('../DetalleBanner/DetalleBaner'))
import { useAuth } from "../../context/AuthContext";
import { useQuery, useQueryClient } from "react-query";
import { fetchData } from "../../utils/fetchData";
import { addFavoriteToProfile } from "../../firebase";
interface BannerProps {
    movie: Movie | null; logoBuscar: boolean, isDetail?: boolean
}
export function Banner({ movie, logoBuscar, isDetail = false }: BannerProps) {
    const { currentPerfil, currentUser } = useAuth()
    const [open, setOpen] = React.useState(false);
    const { data: fetchedDetails, isLoading } = useQuery<MovieDetails>(
        `movie-${movie?.id}`,
        () => fetchData(getURLMovieDetails(movie?.id).movieDetails),
        {
            enabled: !!movie?.id,
        }
    );
    const queryClient = useQueryClient()
    const navigate = useNavigate();
    const handleOpen = useCallback(() => setOpen(true), []);
    const handleClose = useCallback(() => setOpen(false), []);
    const pasarMovie = useCallback(() => {
        navigate("/info", { state: { movie } });
    }, [navigate, movie]);

    const { } = useQuery<Movie[]>(
        `favorites-${currentUser?.id}-${currentPerfil?.id}`,
        () => getFavoritesByProfile(currentUser?.id, currentPerfil?.id),
        {
            enabled: !!currentUser?.id && !!currentPerfil?.id,
        }
    );

    const handleAddFavorite = async (movie: Movie | null) => {
        await addFavoriteToProfile(currentUser?.id, currentPerfil?.id, movie);
        await queryClient.invalidateQueries(`favorites-${currentUser?.id}-${currentPerfil?.id}`);
    };

    const logoPath = fetchedDetails?.images?.logos?.find((l: { iso_639_1: string }) => l.iso_639_1 === "en")?.file_path ||
        fetchedDetails?.images?.logos[0]?.file_path;
    const renderOverviewOrTitle = () => {
        if (movie?.overview) {
            return <p className="overview">{movie.overview.slice(0, movie.overview.indexOf(".") + 1)}</p>;
        }
        return null;
    };

    const renderLogoOrContent = () => {
        if (logoPath) {
            return (
                <>
                    <img
                        className={"logo-banner"}
                        src={`${URL_IMAGE_lOGO}${logoPath}`}
                        alt={movie?.title}
                    />
                    {(isDetail ? <DetalleBanner movie={fetchedDetails} /> : renderOverviewOrTitle())}
                </>
            );
        }
        return renderOverviewOrTitle();
    };

    const renderButtons = () => (
        <div className="botones">
            <button className="play" onClick={handleOpen}>
                <i className="fa-solid fa-play"></i> Play
            </button>
            <VideoModal movie={movie} open={open} onClose={handleClose} />
            {
                location.hash!="#/info" &&(
                    <button onClick={pasarMovie} className="boton-info-banner">
                        <i className="fa-solid fa-circle-info"></i>More Information
                    </button>
                )
            }

            <button onClick={() => {
                handleAddFavorite(movie)
            }}
                className="botonMeGustaBanner"
            >
                <i className="fa-solid fa-heart">
                </i>
            </button>
        </div>
    );

    if (isLoading || !movie) {
        return (
            <div className={`header`}>
                <div className="cuerpoBanner">
                    <div className={`contenedorLogo ${isDetail ? "contenedorDetailN" : ""}`}>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className={`header`}>
            <img
                className="fondo"
                src={`${URL_IMAGE_BANNER}${movie?.backdrop_path}`}
                alt={movie?.title}
            />
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