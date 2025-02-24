import { memo, lazy } from "react";
import { Movie } from "../../interface/Movie";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { formatRuntime } from "../../utils/helpers.tsx";
const CarouselBoostrap = lazy(() => import('../CarouselBoostrap/CarouselBoostrap'))
const DetalleBannerMovie = memo(({ movie }: { movie: Movie }) => {
  const width = useWindowWidth();

  const renderGenres = (genres: any[] = []) =>
    genres.map((genre) => (
      <li key={genre.id}>
        <span>{genre.name}</span>
      </li>
    ));

  return (
    <>
      <div className="itemDetailsBanner flex flex-col">
        <div className="bannerDetails flex flex-row">
          <span>{movie?.vote_average.toFixed(1) != "0.0" ? "IMDb " + movie?.vote_average.toFixed(1) : ""}</span>
          <span>{movie?.release_date.split("-")[0]}</span>
          <span>{formatRuntime(movie.runtime)}</span>
        </div>

        <div>
          <ul className="generosBanner">{renderGenres(movie?.genres)}</ul>
        </div>
      </div>

      {width >= 1100 && (
        <div className="posters-container-banner">
          <CarouselBoostrap item={movie} />
        </div>
      )}
    </>
  );
});

export default DetalleBannerMovie;
