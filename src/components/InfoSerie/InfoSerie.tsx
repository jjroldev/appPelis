import "./InfoSerie.css";
import { useParams } from "react-router";
import { Banner } from "../../components/Banner/Banner";
import "react-multi-carousel/lib/styles.css";
import { Card } from "../../components/Card/Card";
import { useEffect } from "react";
import { fetchData } from "../../utils/fetchData";
import { useQuery } from "react-query";
import { getSeriesDetailsURL, getSimilarSeriesURL } from "../../utils/endPoints";
import { useSearch } from "../../context/SearchContext";
import { useMenu } from "../../context/MenuContext";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import CarouselURL from "../../components/CarouselURL/CarouselURL";
import { useLanguage } from "../../context/LanguageContext";
import { Serie } from "../../interface/Serie";
import { lazy, Suspense } from "react";
const CarouselCollection = lazy(() => import('../CarouselCollection/CarouselCollection'))
const SeasonC = lazy(() => import("../Season/Season"))
const CarouselCredits = lazy(() => import('../CarouselCredits/CarouselCredits'))
export default function InfoSerie() {
    const { seriesId } = useParams()
    const { language } = useLanguage()
    const { data: item } = useQuery<Serie>(
        `seriesInfo-${seriesId}`,
        () => fetchData(getSeriesDetailsURL(seriesId)),
        { refetchOnWindowFocus: false, enabled: !!seriesId }
    );

    const width = useWindowWidth()

    const { setSearchTerm } = useSearch();
    const { setOpenMenu } = useMenu();

    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: "instant" });
        setOpenMenu(false);
        setSearchTerm("");
    }, [seriesId]);

    const renderCastMembers = (item: Serie) =>
        item.credits.cast.map((castM) =>
            castM.profile_path ? <Card key={castM.id} castMember={castM} /> : null
        );

    const renderCrewMembers = (item: Serie) =>
        item.credits.crew.map((crewM) =>
            crewM.profile_path ? <Card key={crewM.id} castMember={crewM} isCrew /> : null
        );

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
                        {item && item.credits.cast?.length > 0 && item?.credits?.cast[0]?.profile_path && (
                            <CarouselCredits renderCredits={renderCastMembers(item)} title="CAST" />
                        )}
                        {item && item.credits.crew?.length > 0 && item?.credits?.crew[0]?.profile_path && (
                            <CarouselCredits renderCredits={renderCrewMembers(item)} title="CREW" />
                        )}
                    </Suspense>
                    {item && width > 1260 && (
                        <Suspense fallback={<></>}>
                            <SeasonC series={item} numeroTemporadas={item?.number_of_seasons} />
                        </Suspense>
                    )}
                </div>
                {item && width <= 1260 && (
                    <Suspense fallback={<></>}>
                        <SeasonC series={item} numeroTemporadas={item?.number_of_seasons} />
                    </Suspense>
                )}

            </div>
        </div>

    );
}
