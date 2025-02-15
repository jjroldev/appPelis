import { memo } from "react";
import "./DetalleBanner.css";
import { Movie } from "../../interface/Movie";
import { Serie } from "../../interface/Serie";
import DetalleBannerMovie from "../DetalleBanerMovie/DetalleBannerMovie";
import DetalleBannerSeries from "../DetalleBannerSeries/DetalleBannerSeries";

const DetalleBanner = memo(({ item }: { item: Movie | Serie }) => {
  const isMovie = 'release_date' in item
  return (
    isMovie?(
      <DetalleBannerMovie movie={item}/>
    ):(
      <DetalleBannerSeries serie={item}/>
    )
  )
});

export default DetalleBanner;
