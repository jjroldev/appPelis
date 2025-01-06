import React, { useCallback, useMemo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardMovie from "../CardMovie/CardMovie";
import { Movie } from "../../interface/Movie";
import "./MovieSwiper.css";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import  SkeletonCarousel  from "../SkeletonCarousel/SkeletonCarousel";
import { responsive } from "../../utils/ResponsiveCarrousel";
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

    const responsivew = useMemo(
      () => (responsive(isLarge)),
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
            responsive={responsivew}
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

