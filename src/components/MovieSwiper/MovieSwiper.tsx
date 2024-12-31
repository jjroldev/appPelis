import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardMovie from "../CardMovie/CardMovie";
import './MovieSwiper.css';
import { useFetchMoviesWithDetails } from "../../hooks/useFecthMovieDetails";
export default function MovieSwiper({ URL, title, isLarge, language }: { URL:string, title: string, isLarge?: boolean, language: string }) {
  const { movies} = useFetchMoviesWithDetails(URL,2,language,["videos",'images',"credits"])
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: isLarge ? 6 : 8,
      slidesToSlide: isLarge ? 5 : 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 5,
      slidesToSlide: 5,
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 4,
      slidesToSlide: 4,
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
        autoPlay={false}
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

