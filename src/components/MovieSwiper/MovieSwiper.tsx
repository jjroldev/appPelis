import { openDB } from 'idb';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardMovie from "../CardMovie/CardMovie";
import './MovieSwiper.css';
import { Movie } from "../../interface/Movie";
import { useState, useEffect } from "react";
import { useFetchMoviesWithDetails } from "../../hooks/useFecthMovieDetails";

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
      breakpoint: { max: 3000, min: 1281 },
      items: isLarge? 5:8,
      slidesToSlide: isLarge? 3:6,
    },
    tablet: {
      breakpoint: { max: 1280, min: 769 },
      items: isLarge? 4:6,
      slidesToSlide: isLarge? 3:4,
    },
    mobileLarge: {
      breakpoint: { max: 768, min: 481 }, 
      items: isLarge? 3:4,
      slidesToSlide: 2,
    },
    mobileSmall: {
      breakpoint: { max: 480, min: 0 },
      items: 2,
      slidesToSlide: 1,
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