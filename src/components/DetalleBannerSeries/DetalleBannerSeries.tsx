import { lazy, memo, Suspense } from "react";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { Serie } from "../../interface/Serie";
import { getCertifiedReleaseItem } from "../../utils/helpers";
const CarouselBoostrap = lazy(() => import('../CarouselBoostrap/CarouselBoostrap'))
const DetalleBannerSeries = memo(({ serie }: { serie: Serie }) => {
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
          <span>TMDB {serie?.vote_average.toFixed(1)}</span>
          <span>{serie?.first_air_date.split("-")[0]}</span>
          <span>{`${serie?.number_of_seasons} ${serie?.number_of_seasons > 1 ? " seasons" : " season"}`}</span>
          <span>{`${serie?.number_of_episodes} ${serie?.number_of_episodes > 1 ? " episodes" : " episode"}`}</span>
          {
            getCertifiedReleaseItem(serie) && width > 600 && (
              <span className="edadParaPublico">{getCertifiedReleaseItem(serie)}+</span>
            )
          }
        </div>

        <div>
          <ul className="generosBanner">{renderGenres(serie?.genres)}</ul>
        </div>
      </div>

      {width >= 900 && (
        <div className="posters-container-banner"> 
          <Suspense fallback={<></>}>
            <CarouselBoostrap item={serie} />
          </Suspense>
        </div>
      )}
    </>
  );
});

export default DetalleBannerSeries;
