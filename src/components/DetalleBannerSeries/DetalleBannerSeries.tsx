import { lazy, memo } from "react";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { Serie } from "../../interface/Serie";
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
          <span>{serie?.vote_average.toFixed(1)!="0.0"?"IMDb "+serie?.vote_average.toFixed(1):""}</span>
          <span>{serie?.first_air_date.split("-")[0]}</span>
          <span>{`${serie?.number_of_seasons} ${serie?.number_of_seasons > 1 ? " seasons" : " season"}`}</span>
          <span>{`${serie?.number_of_episodes} ${serie?.number_of_episodes > 1 ? " episodes" : " episode"}`}</span>
        </div>

        <div>
          <ul className="generosBanner">{renderGenres(serie?.genres)}</ul>
        </div>
      </div>

      {width >= 1100 && (
        <div className="posters-container-banner"> 
            <CarouselBoostrap item={serie} />
        </div>
      )}
    </>
  );
});

export default DetalleBannerSeries;
