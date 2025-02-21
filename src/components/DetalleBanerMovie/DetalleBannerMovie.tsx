import { memo, lazy } from "react";
import { Movie } from "../../interface/Movie";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { formatRuntime, getCertifiedReleaseItem } from "../../utils/helpers.tsx";
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
          <span>IMDb {movie?.vote_average.toFixed(1)}</span>
          <span>{movie?.release_date.split("-")[0]}</span>
          <span>{formatRuntime(movie.runtime)}</span>
          {
            getCertifiedReleaseItem(movie) && width > 600 && (
              <span className="edadParaPublico">{getCertifiedReleaseItem(movie)}+</span>
            )
          }
        </div>

        <div>
          <ul className="generosBanner">{renderGenres(movie?.genres)}</ul>
        </div>
      </div>

      {width >= 900 && (
        <div className="posters-container-banner">
          <CarouselBoostrap item={movie} />
        </div>
      )}
    </>
  );
});

export default DetalleBannerMovie;
