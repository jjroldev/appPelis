import "./CardMovie.css";
import { Movie } from "../../interface/Movie";
import { URL_IMAGE } from "../../App";
import { BASE_URL } from "../../App";
import { API_KEY } from "../../App";
import useFetchLogo from "../../hooks/useFectLogo";
import { BsFillPlayFill } from "react-icons/bs";
import { FaInfo } from "react-icons/fa";

export function CardMovie({ movie, isLarge, language }: { movie: Movie; isLarge?: boolean; language: string }) {
  const logoPath = useFetchLogo(movie.id, language, BASE_URL, API_KEY);

  return (
    <div className={`contenedor-poster ${isLarge ? "large" : ""}`}>
      <div className={`cardContainerImage ${isLarge ? "backdrop" : "poster"}`}>
        <img
          loading="lazy"
          src={`${URL_IMAGE}${isLarge ? movie.backdrop_path : movie.poster_path}`}
          alt={movie.title}
          className="main-image"
        />

        <div className="hover-details">
          <div className="play-button">
            <button>
              <BsFillPlayFill size={23} />
            </button>
            <button>
              <FaInfo  size={16}/>
            </button>
          </div>
          <div className="details">
            <p className="release-date">
              Movie <span>{movie.release_date.split("-")[0]}</span>
            </p>
            <p className="duration">1.2h</p>
          </div>
        </div>

        {isLarge && logoPath && (
          <div className="contenedorLogo">
            <img
              src={`${URL_IMAGE}${logoPath}`}
              alt={`${movie.title} Logo`}
              className="logoBanner"
            />
          </div>
        )}
      </div>
    </div>
  );
}
