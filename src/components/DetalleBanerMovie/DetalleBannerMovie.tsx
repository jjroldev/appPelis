import { memo, lazy } from "react";
import { Movie } from "../../interface/Movie";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { getCertifiedReleaseItem } from "../../utils/helpers";
import { Suspense } from "react";
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
          <span>TMDB {movie?.vote_average.toFixed(1)}</span>
          <span>{movie?.release_date.split("-")[0]}</span>
          <span>{`${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}min`}</span>
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
          <Suspense fallback={<></>}>
            <CarouselBoostrap item={movie} />
          </Suspense>
        </div>
      )}
    </>
  );
});

export default DetalleBannerMovie;
