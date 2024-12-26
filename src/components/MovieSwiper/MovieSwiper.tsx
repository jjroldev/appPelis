import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CardMovie } from "../CardMovie/CardMovie";
import './MovieSwiper.css'
import { useFetchMovies } from "../../hooks/useFetchMovies";
export function MovieSwiper({ URL, title }: { URL: string, title: string }) {

  const {movies}=useFetchMovies(URL);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
      slidesToSlide: 8
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1 
    }
  };
  return (
    <div className="carousel">
      <h2 className="tituloCarousel">{title}</h2>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={false}
        infinite={true}
        partialVisible={false}
      >
        {movies.map(
          (movie) =>
            movie.poster_path && (
              <CardMovie key={movie.id} movie={movie} />
            )
        )}
      </Carousel>
    </div>
  )
}