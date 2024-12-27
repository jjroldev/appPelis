import "./CardMovie.css";
import { Movie } from "../../interface/Movie";
import { URL_IMAGE } from "../../App";

export function CardMovie({ movie, isLarge }: { movie: Movie; isLarge?: boolean }) {
  return (
    <div className={`contenedor-poster ${isLarge ? "large" : ""}`}>
      <div className={`cardContainerImage ${isLarge ? "backdrop" : "poster"}`}>
        <img
          loading="lazy"
          src={`${URL_IMAGE}${isLarge ? movie.backdrop_path : movie.poster_path}`}
          alt={movie.title}
        />
      </div>
    </div>
  );
}
