import React, { useCallback, useMemo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardMovie from "../CardMovie/CardMovie";
import { Movie } from "../../interface/Movie";
import "./MovieSwiper.css";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import { SkeletonCarousel } from "../SkeletonCarousel/SkeletonCarousel";
const MovieSwiper = React.memo(
  ({ URL, title, isLarge }: { URL: string; title: string; isLarge?: boolean}) => {
    const { movies, isLoading } = useFetchMovies(URL, 3);

    const renderMovies = useCallback(
      (movies: Movie[]) =>
        movies.map((movie) => {
          const imagePath = isLarge ? movie.backdrop_path : movie.poster_path;
          return imagePath ? (
            <CardMovie key={movie.id} movie={movie} isLarge={isLarge} />
          ) : null;
        }),
      [isLarge]
    );

    const responsive = useMemo(
      () => ({
        desktop: { breakpoint: { max: 3000, min: 1281 }, items: isLarge ? 5 : 8, slidesToSlide: isLarge ? 4 : 7 },
        tablet: { breakpoint: { max: 1280, min: 769 }, items: isLarge ? 4 : 6, slidesToSlide: isLarge ? 3 : 5 },
        mobileLarge: { breakpoint: { max: 768, min: 481 }, items: isLarge ? 3 : 4, slidesToSlide: isLarge ? 2 : 3 },
        mobileSmall: { breakpoint: { max: 480, min: 0 }, items: 2, slidesToSlide: 1 },
      }),
      [isLarge]
    );

    if (isLoading) {
    }

    return (
      <div className="carousel">
        <h2 className="tituloCarousel">{title}</h2>
        {movies.length >0 ? (
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
            {renderMovies(movies)}
          </Carousel>
        ) : (
          <SkeletonCarousel numMovies={isLarge ? 6 : 8} isLarge={isLarge || false} />
        )}
      </div>
    );
  }
);

export default MovieSwiper;

