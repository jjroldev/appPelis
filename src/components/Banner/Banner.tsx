import { useState, useCallback, Suspense, lazy } from "react";
import { useNavigate } from "react-router";
import { useQuery } from "react-query";
import "./Banner.css";
import { fetchData } from "../../utils/fetchData";
import { getCertifiedReleaseItem, getVideoItem } from "../../utils/helpers.tsx";
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

const DetalleBanner = lazy(() => import("../DetalleBanner/DetalleBaner"));
const VideoModal = lazy(() => import("../ModalVideo/ModalVideo"));

interface BannerProps {
    itemId: string | null | undefined;
    isDetail?: boolean;
    type: string;
}

export function Banner({ itemId, isDetail = false, type }: BannerProps) {
    const navigate = useNavigate();
    const { handleAddFavorite } = useFavorites();
    const { language } = useLanguage();
    const width = useWindowWidth();
    const [open, setOpen] = useState(false);
    const [logoLoaded, setLogoLoaded] = useState(false);


    const { data: item, isLoading } = useQuery<Movie | Serie>(
        `movie-${itemId}`,
        () =>
            type === "movie"
                ? fetchData(getURLMovieDetails(itemId).movieDetails)
                : fetchData(getSeriesDetailsURL(itemId)),
        { enabled: !!itemId }
    );
    console.log(item)


    const { data: dataImages } = useQuery<any>(
        `logo-item-${type}-${itemId}`,
        () =>
            type === "movie"
                ? fetchData(getMovieImagesURL(itemId))
                : fetchData(getSeriesImagesURL(itemId)),
        { enabled: !!itemId, staleTime: 1000 * 60 * 5 }
    );

    const logoPath =
        item?.images?.logos?.find((l) => l.iso_639_1 === language)?.file_path ||
        dataImages?.logos?.[0]?.file_path ||
        null;

    const pasarItem = useCallback(() => {
        navigate(`/${type}/${item?.id}`);
    }, [navigate, item?.id]);

    const renderOverviewOrTitle = () =>
        item?.overview ? (
            <p className="overview">
                {width > 600 ? item.overview.slice(0, 350) : item.overview.slice(0, 150)}...
            </p>
        ) : null;


    const Logo = () =>
        logoPath ? (
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
        ) : null;


    function Botones() {
        return (
            <div className="botones">
                <button className="play" onClick={() => setOpen(true)}>
                    <i className="fa-solid fa-play"></i> Play
                </button>

                {open && (
                    <Suspense fallback={<></>}>
                        <VideoModal videoKey={getVideoItem(item)} open={open} onClose={() => setOpen(false)} />
                    </Suspense>
                )}

                {location.hash !== "#/info" && (
                    <button onClick={pasarItem} className="boton-info-banner">
                        <i className="fa-solid fa-circle-info"></i> More Information
                    </button>
                )}

                <button onClick={() => handleAddFavorite(item)} className="botonMeGustaBanner">
                    <i className="fa-solid fa-heart"></i>
                </button>
            </div>
        );
    }

    if (!itemId || !item || isLoading) {
        return (
            <motion.div
                className="header"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
            >
                <BarMenu />
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
                className="fondo"
                onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                style={{ opacity: 0, transition: "opacity 0.2s ease-in-out" }}
            />

            <BarMenu />
            <div className="cuerpoBanner">
                <div className={`contenedorLogo ${isDetail ? "contenedorDetailN" : ""}`}>
                    <div className="flex flex-row gap-3 items-center">
                        <Logo />
                        {getCertifiedReleaseItem(item) && width <= 600 && (
                            <span className="edadParaPublico inline-block max-h-fit">
                                {getCertifiedReleaseItem(item)}+
                            </span>
                        )}
                    </div>

                    {isDetail && (
                        <Suspense fallback={<></>}>
                            <DetalleBanner item={item} />
                        </Suspense>
                    )}

                    <Botones />
                    {renderOverviewOrTitle()}
                </div>
            </div>
        </motion.div>
    );
}
