import "./InfoSerie.css";
import { useParams } from "react-router";
import { Banner } from "../../components/Banner/Banner";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Card } from "../../components/Card/Card";
import { useEffect } from "react";
import CarouselCollection from "../../components/CarouselCollection/CarouselCollection";
import { fetchData } from "../../utils/fetchData";
import { useQuery } from "react-query";
import { getSeriesDetailsURL, getSimilarSeriesURL } from "../../utils/endPoints";
import { responsiveInfo } from "../../utils/ResponsiveCarrousel";
import { useSearch } from "../../context/SearchContext";
import { useMenu } from "../../context/MenuContext";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import CarouselURL from "../../components/CarouselURL/CarouselURL";
import { useLanguage } from "../../context/LanguageContext";
import { Serie } from "../../interface/Serie";
import SeasonC from "../Season/Season";
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

    const CarouselCredits = ({ renderCredits, title }: { renderCredits: React.ReactNode; title: string }) => (
        <div className="detallesReparto">
            <h2>{title}</h2>
            <Carousel
                swipeable
                draggable
                showDots={false}
                responsive={responsiveInfo}
                ssr
                infinite
                keyBoardControl={false}
                className={`carousel-cast ${width < 630 ? "cast-visible" : ""}`}
                partialVisible={true}
                minimumTouchDrag={0}
            >
                {renderCredits}
            </Carousel>
        </div>
    );

    console.log(item)

    return (
        <div className="contenedorPrincipalItem">
            <Banner itemId={seriesId} logoBuscar isDetail type={"serie"} />
            <div className="infoItemContainer">
                <div className="detallesInfo">
                    <div className="contenedorSimilares">
                        {item?.belongs_to_collection && <CarouselCollection title="Collection" item={item} />}
                        {item &&
                            <CarouselURL
                                URL={
                                    getSimilarSeriesURL(item?.id, language)
                                }
                                title="También te puede interesar"
                                isLarge={false}
                            />}
                    </div>
                    {item && item.credits.cast?.length > 0 && item?.credits?.cast[0]?.profile_path&&(
                        <CarouselCredits renderCredits={renderCastMembers(item)} title="CAST" />
                    )}
                    {item && item.credits.crew?.length > 0 && item?.credits?.crew[0]?.profile_path&&(
                        <CarouselCredits renderCredits={renderCrewMembers(item)} title="CREW" />
                    )}
                    {item && width>1260 &&( <SeasonC series={item} numeroTemporadas={item?.number_of_seasons} />)}
                </div>
                {item && width<=1260 &&( <SeasonC series={item} numeroTemporadas={item?.number_of_seasons} />)}

            </div>
        </div>

    );
}
