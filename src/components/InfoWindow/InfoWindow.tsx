import "./InfoWindow.css";
import {useParams } from "react-router";
import { Banner } from "../Banner/Banner";
import "react-multi-carousel/lib/styles.css";
import {Movie } from "../../interface/Movie";
import Carousel from "react-multi-carousel";
import { Card } from "../Card/Card";
import { useEffect } from "react";
import { fetchData } from "../../utils/fetchData";
import { useQuery } from "react-query";
import {getSeriesDetailsURL, getSimilarSeriesURL, getURLMovieDetails } from "../../utils/endPoints";
import { responsiveInfo } from "../../utils/ResponsiveCarrousel";
import CarouselBoostrap from "../CarouselBoostrap/CarouselBoostrap";
import { useSearch } from "../../context/SearchContext";
import { useMenu } from "../../context/MenuContext";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import MovieSwiper from "../CarouselURL/CarouselURL";
import { useLanguage } from "../../context/LanguageContext";
import { Serie } from "../../interface/Serie";
export default function InfoWindow({type}:{type:string}) {
    const {movieId,seriesId}=useParams()
    const id = type==="movie"?movieId:seriesId
    const { language } = useLanguage()
    const { data: item } = useQuery<Movie>(
        `itemInfo-${id}`,
        () => type=="movie"?fetchData(getURLMovieDetails(id).movieDetails):
        fetchData(getSeriesDetailsURL(id)),
        { refetchOnWindowFocus: false ,enabled:!!id}
    );

    const width = useWindowWidth()

    const { setSearchTerm } = useSearch();
    const { setOpenMenu } = useMenu();

    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: "instant" });
        setOpenMenu(false);
        setSearchTerm("");
    }, [id]);

    const renderCastMembers = (item:Movie|Serie) =>
        item.credits.cast.map((castM) =>
            castM.profile_path ? <Card key={castM.id} castMember={castM} /> : null
        );

    const renderCrewMembers = (item:Movie|Serie) =>
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
            <Banner itemId={id} logoBuscar isDetail type={type}/>
            <div className="infoItemContainer">
                <div className="detallesInfo">
                    <div className="contenedorSimilares">
                        <MovieSwiper
                            URL={
                                type=='movie'?getURLMovieDetails(item?.id, language).similar:
                                getSimilarSeriesURL(item?.id,language)
                            }
                            title="También te puede interesar"
                        />
                    </div>
                    {item && item.credits.cast?.length > 0 && (
                        <CarouselCredits renderCredits={renderCastMembers(item)} title="CAST" />
                    )}
                    {item && item.credits.crew?.length > 0 && (
                        <CarouselCredits renderCredits={renderCrewMembers(item)} title="CREW" />
                    )}
                </div>
                <div className="contenedor-imagenes">
                    <div className="flex flex-col backdropss">
                        <CarouselBoostrap item={item} />
                    </div>
                </div>
                {/* {
                    type=="serie" && (
                        <div>
                        </div>
                    )
                } */}
            </div>
        </div>

    );
}
