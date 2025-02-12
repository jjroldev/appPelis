import { memo} from "react";
// import Carousel from "react-multi-carousel";
import "./DetalleBanner.css";
import CarouselBoostrap from "../CarouselBoostrap/CarouselBoostrap";
// import { responsiveCredits } from "../../utils/ResponsiveCarrousel";
// import { getURLMovieDetails, URL_IMAGE_BACKDROP, URL_IMAGE_BANNER } from "../../utils/endPoints";
import { Movie } from "../../interface/Movie";
// import { useQuery } from "react-query";
// import { fetchData } from "../../utils/fetchData";
import { useWindowWidth } from "../../hooks/useWindowWidth";

const DetalleBanner = memo(({ movie }: { movie:  Movie | null|undefined }) => {
  const width = useWindowWidth();

  // const { data } = useQuery(
  //   `providers-${movie?.id}`,
  //   () => fetchData(getURLMovieDetails(movie?.id).providers),
  //   { refetchOnWindowFocus: false }
  // );

  // const movieProviders = useMemo(() => {
  //   if (!data?.results) return [];

  //   const list: any[] = [];
  //   const addedProviderIds = new Set<string>();

  //   for (const provider in data.results) {
  //     const region = data.results[provider];

  //     ["flatrate", "buy", "rent"].forEach((category) => {
  //       if (region[category]) {
  //         region[category].forEach((providerF: any) => {
  //           if (!addedProviderIds.has(providerF.provider_name)) {
  //             addedProviderIds.add(providerF.provider_name);
  //             list.push(providerF);
  //           }
  //         });
  //       }
  //     });
  //   }
  //   return list;
  // }, [data]);

  const renderGenres = (genres: any[] = []) =>
    genres.map((genre) => (
      <li key={genre.id}>
        <span>{genre.name}</span>
      </li>
    ));

  // const renderProviders = useMemo(() => {
  //   if (!movieProviders.length) return null;
  //   return (
  //     <Carousel
  //       swipeable
  //       draggable
  //       showDots={false}
  //       responsive={responsiveCredits}
  //       ssr
  //       infinite
  //       keyBoardControl
  //       className="carouselProviders"
  //     >
  //       {movieProviders.map((provider) => (
  //         <img
  //           key={provider.provider_id}
  //           className="provedorLogo"
  //           src={URL_IMAGE_BACKDROP + provider.logo_path}
  //           alt={provider.provider_name}
  //         />
  //       ))}
  //     </Carousel>
  //   );
  // }, [movieProviders]);

  return (
    <>
      <div className="movieDetailsBanner flex flex-col">

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
        <div className="posters-container-banner">
            <CarouselBoostrap movie={movie} />
        </div>
      )}

      
    </>
  );
});

export default DetalleBanner;
