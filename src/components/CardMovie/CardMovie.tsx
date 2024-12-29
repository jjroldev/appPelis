import "./CardMovie.css";
import { Movie } from "../../interface/Movie";
import { BASE_URL } from "../../App";
import { API_KEY } from "../../App";
import { URL_IMAGE_BACKDROP,URL_IMAGE_POSTER,URL_IMAGE_lOGO } from "../../App";
import useFetchLogo from "../../hooks/useFectLogo";
import { BsFillPlayFill } from "react-icons/bs";
import { FaInfo } from "react-icons/fa";
import React from "react";
const CardMovie = React.memo(({ movie, isLarge, language }: { movie: Movie; isLarge?: boolean; language: string }) => {
  const logoPath = useFetchLogo(movie.id, language, BASE_URL, API_KEY);

  return (
    <div className={`contenedor-poster ${isLarge ? "large" : ""}`}>
      <div className={`cardContainerImage ${isLarge ? "backdrop" : "poster"}`}>
        <img
          src={`${isLarge
            ? `${URL_IMAGE_BACKDROP}${movie.backdrop_path}`
            : `${URL_IMAGE_POSTER}${movie.poster_path}`}`}
          alt={movie.title}
          className="main-image"
        />

        <div className="hover-details">
          <div className="play-button">
            <button>
              <BsFillPlayFill size={23} />
            </button>
            <button>
              <FaInfo size={16} />
            </button>
          </div>
          <div className="details">
            <p className="release-date">
              {language == 'es' ? "Película del " : "Movie of "}<span>{movie.release_date.split("-")[0]}</span>
            </p>
            <p className="duration">1.2h</p>
          </div>
        </div>

        {isLarge && logoPath && (
          <div className="contenedorLogo">
            <img
              src={`${URL_IMAGE_lOGO}${logoPath}`}
              alt={`${movie.title} Logo`}
              className="logoBanner"
            />
          </div>
        )}
      </div>
    </div>
  );
})

export default CardMovie
