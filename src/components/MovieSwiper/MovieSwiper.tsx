import { Movie } from "../../interface/Movie";
import Carousel from "react-multi-carousel";
import { CardMovie } from "../CardMovie/CardMovie";
export function MovieSwiper({movies}:{movies:Movie[]}){
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1,
        },
      };
    return(
        <Carousel
          responsive={responsive}
          autoPlay
          infinite
          swipeable
          draggable
          renderArrowsWhenDisabled={false}
        >
          {movies.map(
            (movie) =>
              movie.poster_path && (
                <CardMovie key={movie.id} movie={movie} />
              )
          )}
        </Carousel>
    )
}