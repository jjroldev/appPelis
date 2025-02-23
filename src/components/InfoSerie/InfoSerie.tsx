import "./InfoSerie.css";
import '../InfoMovie/InfoMovie.css'
import { useParams } from "react-router";
import { Banner } from "../../components/Banner/Banner";
import "react-multi-carousel/lib/styles.css";
import { useEffect } from "react";
import { fetchData } from "../../utils/fetchData";
import { useQuery } from "react-query";
import { getSeriesDetailsURL, getSimilarSeriesURL } from "../../utils/endPoints";
import { useSearch } from "../../context/SearchContext";
import { useMenu } from "../../context/MenuContext";
import CarouselURL from "../../components/CarouselURL/CarouselURL";
import { useLanguage } from "../../context/LanguageContext";
import { Serie } from "../../interface/Serie";
import { lazy, Suspense } from "react";
import Spinner from "../Spinner/Spinner";
import CardItem from "../CardItem/CardItem";
const CarouselCollection = lazy(() => import('../CarouselCollection/CarouselCollection'))
const SeasonC = lazy(() => import("../Season/Season"))
const CarouselCredits = lazy(() => import('../CarouselCredits/CarouselCredits'))
const CarouselBoostrap = lazy(() => import('../CarouselBoostrap/CarouselBoostrap'))
export default function InfoSerie() {
    const { seriesId } = useParams()
    const { language } = useLanguage()
    const { data: item, isLoading } = useQuery<Serie>(
        `seriesInfo-${seriesId}`,
        () => fetchData(getSeriesDetailsURL(seriesId, language)),
        { refetchOnWindowFocus: false, enabled: !!seriesId }
    );

    const { data: similars, isLoading: isLoading1 } = useQuery(`similar-${seriesId}-${language}`, () =>
        fetchData(getSimilarSeriesURL(seriesId, language, 2)), { refetchOnWindowFocus: false })

    const { setSearchTerm } = useSearch();
    const { setOpenMenu } = useMenu();

    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: "instant" });
        setOpenMenu(false);
        setSearchTerm("");
    }, [seriesId]);

    if (isLoading || isLoading1) {
        return <Spinner />
    }

    return (
        <div className="contenedorPrincipalItem">
            <Banner itemId={seriesId} isDetail type={"serie"} />
            <div className="infoItemContainer">
                <div className="detallesInfo">
                    <div className="contenedorSimilares">
                        {item?.belongs_to_collection &&
                            <Suspense fallback={<></>}>
                                <CarouselCollection title="Collection" item={item} />
                            </Suspense>
                        }
                        {item &&
                            <CarouselURL
                                URL={
                                    getSimilarSeriesURL(item?.id, language)
                                }
                                title="También te puede interesar"
                                isLarge={false}
                            />
                        }
                    </div>
                    <Suspense fallback={<></>}>
                        <CarouselCredits item={item} title="CREW" />
                    </Suspense>
                </div>

                {
                    similars?.results?.length && (
                        <div className="similarContainer flex flex-col gap-2">
                            <h3>Similar TV shows</h3>
                            <div className="contenedorPeliculasSimilares bg-red w-full">
                                {
                                    similars?.results?.map((serie: Serie) => (
                                        serie.poster_path && serie.overview && <CardItem item={serie} isLarge={false} />
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
                {item&& (
                    <Suspense fallback={<></>}>
                        <SeasonC series={item} numeroTemporadas={item?.number_of_seasons} />
                    </Suspense>
                )}

                <div className="contenedor-imagenes">
                    <div className="flex flex-col backdropss">
                        <Suspense fallback={<></>}>
                            <CarouselBoostrap item={item} />
                        </Suspense>
                    </div>
                </div>

            </div>
        </div>

    );
}
