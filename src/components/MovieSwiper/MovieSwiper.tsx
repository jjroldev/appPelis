import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CardMovie } from "../CardMovie/CardMovie";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import './MovieSwiper.css';

export function MovieSwiper({ URL, title, isLarge, language }: { URL: string, title: string, isLarge?: boolean, language: string }) {
  const { movies } = useFetchMovies(URL, 2);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: isLarge ? 5 : 8,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
  };

  return (
    <div className="carousel">
      <h2 className="tituloCarousel">{title}</h2>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={200}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="carousel-react"
      >
        {movies.map((movie) => {
          const imagePath = isLarge ? movie.backdrop_path : movie.poster_path;

          if (imagePath) {
            return <CardMovie key={movie.id} movie={movie} isLarge={isLarge} language={language} />;
          }
          return null;
        })}
      </Carousel>
    </div>
  );
}
