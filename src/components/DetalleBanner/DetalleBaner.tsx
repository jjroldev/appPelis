import { lazy, memo, Suspense } from "react";
import "./DetalleBanner.css";
import { Movie } from "../../interface/Movie";
import { Serie } from "../../interface/Serie";
const DetalleBannerMovie = lazy(()=>import('../DetalleBanerMovie/DetalleBannerMovie'))
const DetalleBannerSeries = lazy(()=>import('../DetalleBannerSeries/DetalleBannerSeries'))
const DetalleBanner = memo(({ item }: { item: Movie | Serie }) => {
  const isMovie = 'release_date' in item
  return (
    <Suspense fallback={<></>}>
      {
        isMovie?(
          <DetalleBannerMovie movie={item}/>
        ):(
          <DetalleBannerSeries serie={item}/>
        )
      }
    </Suspense>
  )
});

export default DetalleBanner;
