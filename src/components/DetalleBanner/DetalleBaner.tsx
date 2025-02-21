import { lazy, memo, Suspense } from "react";
import "./DetalleBanner.css";
import { Movie } from "../../interface/Movie";
import { Serie } from "../../interface/Serie";
import { Typography, Skeleton } from "@mui/material";
const DetalleBannerMovie = lazy(() => import('../DetalleBanerMovie/DetalleBannerMovie'))
const DetalleBannerSeries = lazy(() => import('../DetalleBannerSeries/DetalleBannerSeries'))
const DetalleBanner = memo(({ item }: { item: Movie | Serie }) => {
  const isMovie = 'release_date' in item
  return (
    <Suspense fallback={
      <>
        <Typography component="div" variant={"body1"} maxWidth={"40%"}>
          <Skeleton sx={{ bgcolor: 'grey.600' }} />
        </Typography>
        <Typography component="div" variant={"caption"} maxWidth={"40%"}>
          <Skeleton sx={{ bgcolor: 'grey.600' }} />
        </Typography>
      </>
    }>
      {
        isMovie ? (
          <>
            <DetalleBannerMovie movie={item} />
          </>

        ) : (
          <DetalleBannerSeries serie={item} />
        )
      }
    </Suspense >
  )
});

export default DetalleBanner;
