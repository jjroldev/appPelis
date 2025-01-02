import { openDB } from 'idb';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardMovie from "../CardMovie/CardMovie";
import './MovieSwiper.css';
import { Movie } from "../../interface/Movie";
import { useState, useEffect } from "react";
import { useFetchMoviesWithDetails } from "../../hooks/useFecthMovieDetails";
import { SkeletonCarousel } from '../SkeletonCarrusel/SkeletonCarousel';
import { SkeletonCard } from '../SkeletonCard/SkeletonCard';

const DB_NAME = 'MoviesDB-Home';
const STORE_NAME = 'movies-home';

async function getDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'key' });
      }
    },
  });
}

export default function MovieSwiper({ URL, title, isLarge, language }: { URL: string, title: string, isLarge?: boolean, language: string }) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { movies: fetchedMovies } = useFetchMoviesWithDetails(
    URL,
    2,
    language,
    ["videos", "images", "credits"]
  );

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

  const renderMovies = (movies: Movie[]) => {
    return movies.map((movie) => {
      const imagePath = isLarge ? movie.backdrop_path : movie.poster_path;
      if (imagePath) {
        return (
          <CardMovie
            key={movie.id}
            movie={movie}
            isLarge={isLarge}
            language={language}
          />
        );
      }
      return null
    });
  };

  return (
    <div className="carousel">
      <h2 className="tituloCarousel">{title}</h2>
      {movies.length > 0 ? (
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