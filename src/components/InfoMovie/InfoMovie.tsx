import "./InfoMovie.css";
import { useLocation } from "react-router";
import { Banner } from "../Banner/Banner";
import "react-multi-carousel/lib/styles.css";
import { Movie, MovieDetails } from "../../interface/Movie";
import Carousel from "react-multi-carousel";
import { Card } from "../Card/Card";
import { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetchData";
import { useQuery } from "react-query";
import { getURLMovieDetails } from "../../utils/endPoints";
import { responsiveInfo } from "../../utils/ResponsiveCarrousel";
import CarouselBoostrap from "../CarouselBoostrap/CarouselBoostrap";
import { useSearch } from "../../context/SearchContext";
import { useMenu } from "../../context/MenuContext";

export default function InfoMovie() {
  const location = useLocation();
  const { movie: movie1 }: { movie: Movie } = location.state;
  
  const { data: movie } = useQuery<MovieDetails>(
    `movieInfo-${movie1?.id}`,
    () => fetchData(getURLMovieDetails(movie1?.id).movieDetails)
  );

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { setSearchTerm } = useSearch();
  const { setOpenMenu } = useMenu();

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "instant" });
    setOpenMenu(false);
    setSearchTerm("");
  }, []);

  const renderCastMembers = (movie: MovieDetails) =>
    movie.credits.cast.map((castM) =>
      castM.profile_path ? <Card key={castM.id} castMember={castM} /> : null
    );

  const renderCrewMembers = (movie: MovieDetails) =>
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
      >
        {renderCredits}
      </Carousel>
    </div>
  );

  return (
    <div className="contenedorPrincipalMovie">
      <Banner movie={movie1} logoBuscar isDetail />
      {movie && (movie.credits?.cast?.length > 0 || movie.credits?.crew?.length > 0) && (
        <div className="infoMovieContainer">
          <div className="detallesInfo">
            {movie.credits.cast?.length > 0 && (
              <CarouselCredits renderCredits={renderCastMembers(movie)} title="CAST" />
            )}
            {movie.credits.crew?.length > 0 && (
              <CarouselCredits renderCredits={renderCrewMembers(movie)} title="CREW" />
            )}
          </div>
          <div className="contenedor-imagenes">
            <div className="flex flex-col backdropss">
              <CarouselBoostrap movie={movie} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
