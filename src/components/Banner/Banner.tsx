import { useState, useCallback, Suspense, lazy } from "react";
import { useNavigate } from "react-router";
import { useQuery } from "react-query";
import "./Banner.css";
import { fetchData } from "../../utils/fetchData";
import { getCertifiedReleaseItem } from "../../utils/helpers";
import {
    URL_IMAGE_lOGO,
    URL_IMAGE_BANNER,
    getURLMovieDetails,
    getSeriesDetailsURL,
    getMovieImagesURL,
    getSeriesImagesURL
} from "../../utils/endPoints";
const DetalleBanner = lazy(() => import('../DetalleBanner/DetalleBaner'))
const VideoModal = lazy(()=>import('../ModalVideo/ModalVideo'))
import { Movie } from "../../interface/Movie";
import { Serie } from "../../interface/Serie";
import { useFavorites } from "../../hooks/useFavorites";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { useLanguage } from "../../context/LanguageContext";
import BarMenu from "../BarMenu/BarMenu";
interface BannerProps {
    itemId: string | null | undefined;
    isDetail?: boolean;
    type: string
}

export function Banner({ itemId, isDetail = false, type }: BannerProps) {
    const navigate = useNavigate();
    const { handleAddFavorite } = useFavorites()
    const { language } = useLanguage()


    const width = useWindowWidth()

    const [open, setOpen] = useState<any>(false);
    const { data: item } = useQuery<Movie | Serie>(
        `movie-${itemId}`,
        () =>
            type === "movie" ?
                fetchData(getURLMovieDetails(itemId).movieDetails) :
                fetchData(getSeriesDetailsURL(itemId)),
        { enabled: !!itemId }
    );

    const { data: dataImages } = useQuery<any>(
        `logo-item-${type}-${itemId}`,
        () => type == "movie" ? fetchData(getMovieImagesURL(itemId)) : fetchData(getSeriesImagesURL(itemId)),
        { enabled: !!itemId, staleTime: 1000 * 60 * 5 }
    );

    const logoPath = item?.images?.logos?.find((l) => l.iso_639_1 === language)?.file_path ||
        item?.images?.logos?.[0]?.file_path || dataImages?.logos[0]?.file_path || null;

    const handleOpen = useCallback(() => setOpen(true), []);
    const handleClose = useCallback(() => setOpen(false), []);

    const pasarItem = useCallback(() => {
        navigate(`/${type}/${item?.id}`);
    }, [navigate, item?.id]);

    const renderOverviewOrTitle = () => {
        if (item?.overview) {
            return (
                <p className="overview">
                    {width > 600 ?
                        item?.overview.slice(0, 350) :
                        item?.overview.slice(0, 150)
                    }
                    ...
                </p>
            )
        }
        return null;
    };
    const Logo = () => (
        logoPath ? (
            <img
                className="logo-banner"
                src={`${URL_IMAGE_lOGO}${logoPath}`}
                alt="Logo"
            />
        ) : null
    );


    function Botones() {
        return (
            <div className="botones">
                <button className="play" onClick={handleOpen}>
                    <i className="fa-solid fa-play"></i> Play
                </button>
                {
                    open && (
                        <Suspense fallback={<></>}>
                            <VideoModal item={item} open={open} onClose={handleClose} />
                        </Suspense>
                    )
                }
                {location.hash !== "#/info" && (
                    <button onClick={pasarItem} className="boton-info-banner">
                        <i className="fa-solid fa-circle-info"></i> More Information
                    </button>
                )}

                <button onClick={() => handleAddFavorite(item)} className="botonMeGustaBanner">
                    <i className="fa-solid fa-heart"></i>
                </button>
            </div>
        )
    }

    if (!itemId || !item) {
        return (
            <div className="header">
                <BarMenu />
                <div
                    className={`fondoCardItem h-full w-full absolute inset-0 opacity-100 transition-opacity duration-400`}
                ></div>
            </div>
        )
    }
    return (
        <div className="header">
            <img className="fondo" src={`${URL_IMAGE_BANNER}${item?.backdrop_path}`} />
            <BarMenu />
            <div className="cuerpoBanner">
                <div className={`contenedorLogo ${isDetail ? "contenedorDetailN" : ""}`}>
                    <div className="flex flex-row gap-3 items-center">
                        <Logo />
                        {
                            getCertifiedReleaseItem(item) && width <= 600 && (
                                <span className="edadParaPublico inline-block max-h-fit">{getCertifiedReleaseItem(item)}+</span>
                            )
                        }
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
        </div>
    );
}
