import "./InfoMovie.css";
import {useParams } from "react-router";
import { Banner } from "../Banner/Banner";
import "react-multi-carousel/lib/styles.css";
import {Movie } from "../../interface/Movie";
import Carousel from "react-multi-carousel";
import { Card } from "../Card/Card";
import { useEffect } from "react";
import { fetchData } from "../../utils/fetchData";
import { useQuery } from "react-query";
import {getURLMovieDetails } from "../../utils/endPoints";
import { responsiveInfo } from "../../utils/ResponsiveCarrousel";
import CarouselBoostrap from "../CarouselBoostrap/CarouselBoostrap";
import { useSearch } from "../../context/SearchContext";
import { useMenu } from "../../context/MenuContext";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import Spinner from "../Spinner/Spinner";
import MovieSwiper from "../MovieSwiper/MovieSwiper";
import { useLanguage } from "../../context/LanguageContext";
export default function InfoMovie() {
    const {movieId}=useParams()
    const { language } = useLanguage()
    const { data: movie } = useQuery<Movie>(
        `movieInfo-${movieId}`,
        () => fetchData(getURLMovieDetails(movieId).movieDetails),
        { refetchOnWindowFocus: false }
    );

    const width = useWindowWidth()

    const { setSearchTerm } = useSearch();
    const { setOpenMenu } = useMenu();

    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: "instant" });
        setOpenMenu(false);
        setSearchTerm("");
    }, []);

    const renderCastMembers = (movie: Movie) =>
        movie.credits.cast.map((castM) =>
            castM.profile_path ? <Card key={castM.id} castMember={castM} /> : null
        );

    const renderCrewMembers = (movie: Movie) =>
        movie.credits.crew.map((crewM) =>
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

    if (!movie) {
        return <Spinner />
    }

    return (
        <div className="contenedorPrincipalMovie">
            <Banner movieId={movieId} logoBuscar isDetail />
            <div className="infoMovieContainer">
                <div className="detallesInfo">
                    <div className="contenedorSimilares">
                        <MovieSwiper
                            URL={
                                getURLMovieDetails(movie.id, language).similar
                            }
                            title="También te puede interesar"
                        />
                    </div>
                    {movie && movie.credits.cast?.length > 0 && (
                        <CarouselCredits renderCredits={renderCastMembers(movie)} title="CAST" />
                    )}
                    {movie && movie.credits.crew?.length > 0 && (
                        <CarouselCredits renderCredits={renderCrewMembers(movie)} title="CREW" />
                    )}
                </div>
                <div className="contenedor-imagenes">
                    <div className="flex flex-col backdropss">
                        <CarouselBoostrap movie={movie} />
                    </div>
                </div>
            </div>
        </div>

    );
}
