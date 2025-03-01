import { useState, useCallback, Suspense, lazy } from "react";
import { useNavigate } from "react-router";
import { useQuery } from "react-query";
import "./Banner.css";
import { fetchData } from "../../utils/fetchData";
import { getLogoPath, getVideoItem } from "../../utils/helpers.tsx";
import { getCertifiedReleaseItem } from "../../utils/helpers.tsx";
import { getFavoritesByProfile } from "../../firebase.ts";
import { Skeleton, Box } from "@mui/material";
import {
    URL_IMAGE_lOGO,
    URL_IMAGE_BANNER,
    getURLMovieDetails,
    getSeriesDetailsURL,
    getMovieImagesURL,
    getSeriesImagesURL
} from "../../utils/endPoints";
import { Movie } from "../../interface/Movie";
import { motion } from "framer-motion";
import { Serie } from "../../interface/Serie";
import { useFavorites } from "../../hooks/useFavorites";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { useLanguage } from "../../context/LanguageContext";
import BarMenu from "../BarMenu/BarMenu";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext.tsx";

const DetalleBanner = lazy(() => import("../DetalleBanner/DetalleBaner"));

interface BannerProps {
    itemId: string | null | undefined;
    isDetail?: boolean;
    type: string;
}

export function Banner({ itemId, isDetail = false, type }: BannerProps) {
    const navigate = useNavigate();
    const { handleAddFavorite, handleRemoveFavorite } = useFavorites();
    const { language } = useLanguage();
    const width = useWindowWidth();
    const [logoLoaded, setLogoLoaded] = useState(false);
    const { currentPerfil, currentUser } = useAuth()
    const { data: item, isLoading } = useQuery<Movie | Serie>(
        `movie-${itemId}`,
        () =>
            type === "movie"
                ? fetchData(getURLMovieDetails(itemId, language).movieDetails)
                : fetchData(getSeriesDetailsURL(itemId, language)),
        { enabled: !!itemId }
    );

    const { data: dataImages, isLoading: isLoading1 } = useQuery<any>(
        `logo-item-${type}-${itemId}`,
        () =>
            type === "movie"
                ? fetchData(getMovieImagesURL(itemId))
                : fetchData(getSeriesImagesURL(itemId)),
        { enabled: !!itemId, staleTime: 1000 * 60 * 5 }
    );

    const logoPath = getLogoPath(item, dataImages, language);

    const { data: itemsFavorites } = useQuery<Movie[] | Serie[]>(
        `favorites-${currentUser?.id}-${currentPerfil?.id}`,
        () => getFavoritesByProfile(currentUser?.id, currentPerfil?.id),
        {
            enabled: !!currentUser?.id && !!currentPerfil?.id,
        }
    );

    const isFavorite = itemsFavorites?.some(fav => fav.id === item?.id);

    const toggleFavorite = () => {
        if (item) {
            isFavorite ? handleRemoveFavorite(item) : handleAddFavorite(item);
        }
    };

    const pasarItem = useCallback(() => {
        navigate(`/${type}/${item?.id}`);
    }, [navigate, item?.id]);

    const renderOverview = () =>
        item?.overview ? (
            <p className="overview">
                {width > 600 ? item.overview.slice(0, 350) : item.overview.slice(0, 250)}...
            </p>
        ) : null;


    const Logo = ({ item }: { item: Serie | Movie | undefined }) => {
        return (
            logoPath && !isLoading ? (
                <img
                    className="logo-banner"
                    src={`${URL_IMAGE_lOGO}${logoPath}`}
                    alt="Logo"
                    onLoad={() => setLogoLoaded(true)}
                    style={{
                        opacity: logoLoaded ? 1 : 0,
                        transition: "opacity 0.6s ease-in-out",
                    }}
                />
            ) : <h2 className="titleItemNoLogo">{item ? ("title" in item ? item.title.split(' ').slice(0, 3).join(" ") :
                item.name.split(' ').slice(0, 3).join(" ")) : "No Title"}</h2>
        )
    }


    const handleNavigateVideo = () => {
        if (getVideoItem(item)) {
            navigate(`/watch/${getVideoItem(item)}`)
        } else {
            toast.error("No existe un trailer para la serie/pelicula seleccionada")
        }
    }


    function Botones() {
        return (
            <div className="botones">
                <button className="play" onClick={handleNavigateVideo}>
                    <i className="fa-solid fa-play"></i> Play
                </button>

                {location.hash !== "#/info" && (
                    <button onClick={pasarItem} className="boton-info-banner">
                        <span className="material-symbols-outlined">
                            info
                        </span> More Information
                    </button>
                )}

                <button onClick={toggleFavorite}
                    className="botonMeGustaBanner">
                    <i className={`fa-solid ${isFavorite ? "fa-check" : "fa-plus"}`}></i>
                </button>
            </div>
        );
    }

    if (!itemId || !item || isLoading || isLoading1) {
        return (
            <motion.div
                className="header"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
            >
                <BarMenu />
                <div
                    className={`fondoCardItem h-full w-full absolute inset-0 opacity-100 transition-opacity duration-400`}
                ></div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="header"
        >
            <img
                src={`${URL_IMAGE_BANNER}${item?.backdrop_path}`}
                className={`fondo ${width <= 650 ? "fondoMobile" : ""}`}
                onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                style={{ opacity: 0, transition: "opacity 0.2s ease-in-out" }}
            />

            {
                getCertifiedReleaseItem(item) && (
                    <span className="edadParaPublicoBanner absolute top-30 right-0 z-10">{getCertifiedReleaseItem(item)}+</span>
                )
            }

            <BarMenu />
            <div className="cuerpoBanner">
                <div className={`contenedorLogo ${isDetail ? "contenedorDetailN" : ""}`}>
                    <div className="flex flex-row items-center">
                        <Logo item={item} />
                    </div>

                    {isDetail && width >= 650 && (
                        <Suspense fallback={<>
                            <Box sx={{ width: 300 }}>
                                <Skeleton sx={{ bgcolor: 'grey.700' }} />
                                <Skeleton animation="wave" sx={{ bgcolor: 'grey.700' }} />
                                <Skeleton animation={false} sx={{ bgcolor: 'grey.700' }} />
                            </Box>
                        </>}>
                            <DetalleBanner item={item} />
                        </Suspense>
                    )}

                    <Botones />
                    {renderOverview()}

                    {isDetail && width < 650 && (
                        <Suspense fallback={
                            <Box sx={{ width: 300 }}>
                                <Skeleton sx={{ bgcolor: 'grey.700' }} />
                                <Skeleton animation="wave" sx={{ bgcolor: 'grey.700' }} />
                                <Skeleton animation={false} sx={{ bgcolor: 'grey.700' }} />
                            </Box>
                        }>
                            <DetalleBanner item={item} />
                        </Suspense>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
