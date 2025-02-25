import { lazy, memo, Suspense } from "react";
import "./DetalleBanner.css";
import { Movie } from "../../interface/Movie";
import { Serie } from "../../interface/Serie";
import { Skeleton, Box } from "@mui/material";
const DetalleBannerMovie = lazy(() => import('../DetalleBanerMovie/DetalleBannerMovie'))
const DetalleBannerSeries = lazy(() => import('../DetalleBannerSeries/DetalleBannerSeries'))
const DetalleBanner = memo(({ item }: { item: Movie | Serie }) => {
  const isMovie = 'release_date' in item
  return (
    <Suspense fallback={
      <>
        <Box sx={{ width: 300 }}>
          <Skeleton sx={{ bgcolor: 'grey.700' }} />
          <Skeleton animation="wave" sx={{ bgcolor: 'grey.700' }} />
          <Skeleton animation={false} sx={{ bgcolor: 'grey.700' }} />
        </Box>
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
