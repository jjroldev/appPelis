import React, { useCallback, useMemo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardMovie from "../CardMovie/CardMovie";
import { Movie } from "../../interface/Movie";
import "./MovieSwiper.css";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import { responsive } from "../../utils/ResponsiveCarrousel";
const MovieSwiper = React.memo(
  ({ URL, title, isLarge }: { URL: string; title: string; isLarge?: boolean }) => {
    const { movies, isLoading } = useFetchMovies(URL, 9);

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
      return null
    }

    return (
      <div className="carousel">
        {movies.length > 0 && (
          <>
            <h2 className="tituloCarousel">{title}</h2>
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
          </>
        )}
      </div>
    );
  }
);

export default MovieSwiper;

