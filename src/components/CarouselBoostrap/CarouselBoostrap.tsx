import Carousel from "react-bootstrap/Carousel";
import { MovieDetails } from "../../interface/Movie";
import { lazy, memo, useMemo } from "react";
import { useQuery } from "react-query";
import { fetchData } from "../../utils/fetchData";
import { getURLMovieDetails } from "../../utils/endPoints";
import "./CarouselBoostrap.css";

const Backdrop = lazy(() => import("../BackDrop/Backdrop"));

const CarouselBoostrap = memo(({ movie }: { movie: MovieDetails | null | undefined}) => {
  const { data: movieWithImages } = useQuery<MovieDetails>(
    ["movieIC", movie?.id],
    () => fetchData(getURLMovieDetails(movie?.id).movieDetails),
    { refetchOnWindowFocus: false }
  );

  const images = useMemo(() => {
    if (!movieWithImages?.images) return [];
    return  movieWithImages.images.backdrops;
  }, [movieWithImages]);

  return (
    <div className={`carousel-bootstrap cb-backdrop`}>
      <Carousel fade interval={3000} pause="hover">
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <Backdrop backdrop_path={image.file_path} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
});

export default CarouselBoostrap;
