import "./CardMovie.css";
import { Movie } from "../../interface/Movie";
import { URL_IMAGE } from "../../App";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../App";
import { API_KEY } from "../../App";
import useFetchLogo from "../../hooks/useFectLogo";
export function CardMovie({ movie, isLarge, language }: { movie: Movie; isLarge?: boolean, language: string }) {

  const logoPath = useFetchLogo(movie.id, language, BASE_URL, API_KEY);
  return (
    <div className={`contenedor-poster ${isLarge ? "large" : ""}`}>
      <div className={`cardContainerImage ${isLarge ? "backdrop" : "poster"}`}>
        <img
          loading="lazy"
          src={`${URL_IMAGE}${isLarge ? movie.backdrop_path : movie.poster_path}`}
          alt={movie.title}
        />
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
