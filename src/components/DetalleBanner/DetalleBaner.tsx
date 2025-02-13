import { memo } from "react";
import "./DetalleBanner.css";
import CarouselBoostrap from "../CarouselBoostrap/CarouselBoostrap";
import { Movie } from "../../interface/Movie";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { Serie } from "../../interface/Serie";

const DetalleBanner = memo(({ item }: { item: Movie | Serie }) => {
  const width = useWindowWidth();

  const renderGenres = (genres: any[] = []) =>
    genres.map((genre) => (
      <li key={genre.id}>
        <span>{genre.name}</span>
      </li>
    ));

  const getReleaseDate = () => {
    if ('release_date' in item) {
      return item?.release_date.split("-")[0];
    }
    if ('first_air_date' in item) {
      return item?.first_air_date.split("-")[0];
    }
    return "";
  };

  const getRuntimeOrSeasons = () => {
    if ('runtime' in item) {
      return item?.runtime
        ? `${Math.floor(item.runtime / 60)}h ${item.runtime % 60}min`
        : "";
    }
    if ('numberOfSeasons' in item) {
      return `${item?.numberOfSeasons} season(s)`;
    }
    return "";
  };

  return (
    <>
      <div className="itemDetailsBanner flex flex-col">
        <div className="bannerDetails flex flex-row">
          <span>TMDB {item?.vote_average.toFixed(1)}</span>
          <span>{getReleaseDate()}</span>
          <span>{getRuntimeOrSeasons()}</span>
        </div>

        <div>
          <ul className="generosBanner">{renderGenres(item?.genres)}</ul>
        </div>
      </div>

      {width >= 900 && (
        <div className="posters-container-banner">
          <CarouselBoostrap item={item} />
        </div>
      )}
    </>
  );
});

export default DetalleBanner;
