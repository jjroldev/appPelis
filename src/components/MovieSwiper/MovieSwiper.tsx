import React, { useEffect, useState, useCallback ,useMemo} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { openDB } from "idb";
import CardMovie from "../CardMovie/CardMovie";
import { Movie } from "../../interface/Movie";
import { useFetchMoviesWithDetails } from "../../hooks/useFecthMovieDetails";
import "./MovieSwiper.css";

const DB_NAME = "MoviesDB-Home";
const STORE_NAME = "movies-home";

const getDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "key" });
      }
    },
  });
};

const MovieSwiper = React.memo(
  ({ URL, title, isLarge, language }: { URL: string; title: string; isLarge?: boolean; language: string }) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const appendProps = useMemo(() => ["videos", "images", "credits"], []);
    const { movies: fetchedMovies } = useFetchMoviesWithDetails(URL, 2, language, appendProps);

    useEffect(() => {
      const fetchMoviesFromDB = async () => {
        const db = await getDB();
        const key = `${URL}_${language}`;

        const cachedMovies = await db.get(STORE_NAME, key);

        if (cachedMovies) {
          setMovies(cachedMovies.data);
          console.log("cargando datos de idb");
        } else if (fetchedMovies.length > 0) {
          console.log("cargando datos de api");
          await db.put(STORE_NAME, { key, data: fetchedMovies });
          setMovies(fetchedMovies);
        }
      };

      fetchMoviesFromDB();
    }, [URL, language, fetchedMovies]);

    const renderMovies = useCallback(
      (movies: Movie[]) =>
        movies.map((movie) => {
          const imagePath = isLarge ? movie.backdrop_path : movie.poster_path;
          return imagePath ? (
            <CardMovie key={movie.id} movie={movie} isLarge={isLarge} language={language} />
          ) : null;
        }),
      [isLarge, language]
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
          {renderMovies(movies)}
        </Carousel>
      </div>
    );
  }
);

export default MovieSwiper;
