import "./InfoMovie.css";
import { useParams } from "react-router";
import { Banner } from "../../components/Banner/Banner";
import "react-multi-carousel/lib/styles.css";
import { Movie } from "../../interface/Movie";
import Carousel from "react-multi-carousel";
import { Card } from "../../components/Card/Card";
import { useEffect } from "react";
import CarouselCollection from "../../components/CarouselCollection/CarouselCollection";
import { fetchData } from "../../utils/fetchData";
import { useQuery } from "react-query";
import {getURLMovieDetails } from "../../utils/endPoints";
import { responsiveInfo } from "../../utils/ResponsiveCarrousel";
import CarouselBoostrap from "../../components/CarouselBoostrap/CarouselBoostrap";
import { useSearch } from "../../context/SearchContext";
import { useMenu } from "../../context/MenuContext";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import CarouselURL from "../../components/CarouselURL/CarouselURL";
import { useLanguage } from "../../context/LanguageContext";
export default function InfoMovie() {
    const { movieId } = useParams()
    const { language } = useLanguage()
    const { data: item} = useQuery<Movie>(
        `movieInfo-${movieId}`,
        () => fetchData(getURLMovieDetails(movieId).movieDetails),
        { refetchOnWindowFocus: false, enabled: !!movieId }
    );
    const width = useWindowWidth()

    const { setSearchTerm } = useSearch();
    const { setOpenMenu } = useMenu();

    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: "instant" });
        setOpenMenu(false);
        setSearchTerm("");
    }, [movieId]);

    const renderCastMembers = (item: Movie) =>
        item.credits.cast.map((castM) =>
            castM.profile_path ? <Card key={castM.id} castMember={castM} /> : null
        );

    const renderCrewMembers = (item: Movie) =>
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

    return (
        <div className="contenedorPrincipalItem">
            <Banner itemId={movieId} logoBuscar isDetail type={"movie"} />
            <div className="infoItemContainer">
                <div className="detallesInfo">
                    <div className="contenedorSimilares">
                        {item?.belongs_to_collection && <CarouselCollection title="Collection" item={item} />}
                        {item &&
                            <CarouselURL
                                URL={
                                    getURLMovieDetails(item?.id, language).similar 
                                }
                                title="También te puede interesar"
                                isLarge={false}
                            />}
                    </div>
                    {item && item.credits.cast?.length > 0 && item?.credits?.cast[0]?.profile_path&&(
                        <CarouselCredits renderCredits={renderCastMembers(item)} title="CAST" />
                    )}
                    {item && item.credits.crew?.length > 0 &&item?.credits?.crew[0]?.profile_path&& (
                        <CarouselCredits renderCredits={renderCrewMembers(item)} title="CREW" />
                    )}
                </div>
                <div className="contenedor-imagenes">
                    <div className="flex flex-col backdropss">
                        <CarouselBoostrap item={item} />
                    </div>
                </div>
            </div>
        </div>

    );
}
