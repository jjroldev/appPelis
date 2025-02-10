import "./DetalleBanner.css";
import CarouselBoostrap from "../CarouselBoostrap/CarouselBoostrap";
import Carousel from "react-multi-carousel";
import { responsiveCredits } from "../../utils/ResponsiveCarrousel";
import { getURLMovieDetails, URL_IMAGE_BANNER } from "../../utils/endPoints";
import { MovieDetails } from "../../interface/Movie";
import { useQuery } from "react-query";
import { fetchData } from "../../utils/fetchData";
import { useEffect, useState } from "react";

export default function DetalleBanner({ movie }: { movie: MovieDetails | null }) {
  const { data } = useQuery(`providers-${movie?.id}`, () =>
    fetchData(getURLMovieDetails(movie?.id).providers)
  );

  const [movieProviders, setMovieProviders] = useState<any>([]);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (data?.results) {
      const list: any[] = [];
      const addedProviderIds = new Set<string>();

      for (const provider in data.results) {
        const region = data.results[provider];

        ["flatrate", "buy", "rent"].forEach((category) => {
          if (region[category]) {
            region[category].forEach((providerF: any) => {
              if (!addedProviderIds.has(providerF.provider_name)) {
                addedProviderIds.add(providerF.provider_name);
                list.push(providerF);
              }
            });
          }
        });
      }
      setMovieProviders(list);
    }
  }, [data]);

  const renderGenres = (genres: any[] = []) =>
    genres.map((genre: any) => (
      <li key={genre.id}>
        <span>{genre.name}</span>
      </li>
    ));

  const renderProviders = (movieProviders: any) => {
    if (!movieProviders) return null;
    return (
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsiveCredits}
        ssr={true}
        infinite={true}
        keyBoardControl={true}
        className="carouselProviders"
      >
        {movieProviders.map((provider: any) => (
          <img
            key={provider.provider_id}
            className="provedorLogo"
            src={URL_IMAGE_BANNER + provider.logo_path}
            alt={provider.provider_name}
          />
        ))}
      </Carousel>
    );
  };

  const Details = () => (
    <>
      <div className="movieDetailsBanner flex flex-col">
        {movie?.overview && (
          <p className="overview">
            {movie.overview.slice(0, movie.overview.indexOf(","))+"."}
          </p>
        )}

        <div className="bannerDetails flex flex-row">
          <span>TMDB {movie?.vote_average.toFixed(1)}</span>
          <span>{movie?.release_date.split("-")[0]}</span>
          <span>
            {movie?.runtime
              ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}min`
              : "Runtime no disponible"}
          </span>
        </div>

        <div>
          <ul className="generosBanner">{renderGenres(movie?.genres)}</ul>
        </div>
      </div>

      {width >= 900 && (
        <div className="provedores-container posters-continer-banner">
          <div className="postersInfo">
            <CarouselBoostrap movie={movie} isPoster={true} />
          </div>
          {renderProviders(movieProviders)}
        </div>
      )}
    </>
  );

  return <Details />;
}
