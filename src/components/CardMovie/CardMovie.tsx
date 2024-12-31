import "./CardMovie.css";
import { Movie } from "../../interface/Movie";
import { URL_IMAGE_BACKDROP, URL_IMAGE_POSTER, URL_IMAGE_lOGO } from "../../App";
import useFetchLogo from "../../hooks/useFectLogo";
import { BsFillPlayFill } from "react-icons/bs";
import { FaInfo } from "react-icons/fa";
import React from "react";
import { useNavigate } from "react-router";
import VideoModal from "../ModalVideo/ModalVideo";
const CardMovie = React.memo(({ movie, isLarge, language }: { movie: Movie; isLarge?: boolean; language: string }) => {
  const logoPath = useFetchLogo(movie.id, language);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const pasarMovie = () => {
    navigate("/info", { state: { movie, language } });
  };
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
            <button onClick={handleOpen}>
              <BsFillPlayFill size={23} />
            </button>
            <VideoModal
              open={open}
              onClose={handleClose}
              movieId={movie.id}
              language={language}
            />
            <button onClick={pasarMovie}>
              <FaInfo size={16} />
            </button>
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
