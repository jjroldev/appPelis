import React, { useState, useRef, useCallback} from "react";
import { useNavigate } from "react-router";
import { BsFillPlayFill } from "react-icons/bs";
import { FaInfo } from "react-icons/fa";
import { Skeleton } from "@mui/material";
import { useVisibility } from "../../hooks/useVisibility";
import VideoModal from "../ModalVideo/ModalVideo";
import { Movie } from "../../interface/Movie";
import { URL_IMAGE_BACKDROP, URL_IMAGE_POSTER, URL_IMAGE_lOGO } from "../../App";
import "./CardMovie.css";

const CardMovie = React.memo(
  ({ movie, isLarge, language }: { movie: Movie; isLarge?: boolean; language: string }) => {
    const logoPath = movie?.images?.logos?.[0]?.file_path;
    const [open, setOpen] = useState(false);
    const cardRefMovie = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const handleOpen = useCallback(() => setOpen(true), []);
    const handleClose = useCallback(() => setOpen(false), []);
    const pasarMovie = useCallback(() => {
      navigate("/info", { state: { movie, language } });
    }, [navigate, movie, language]);

    const isVisible = useVisibility(cardRefMovie);

    return (
      <div ref={cardRefMovie} className={`contenedor-poster ${isLarge ? "large" : ""}`}>
        {!isVisible ? (
          <div className={`cardContainerImage ${isLarge ? "backdrop" : "poster"}`}>
            <Skeleton
              width={"100%"}
              height={"100%"}
              variant="rectangular"
              sx={{ bgcolor: "grey.900" }}
              animation="pulse"
            />
          </div>
        ) : (
          <div className={`cardContainerImage ${isLarge ? "backdrop" : "poster"}`}>
            <img
              src={`${isLarge ? `${URL_IMAGE_BACKDROP}${movie.backdrop_path}` : `${URL_IMAGE_POSTER}${movie.poster_path}`}`}
              alt={movie.title}
              className="main-image"
            />

            <div className="hover-details">
              <div className="play-button">
                <button onClick={handleOpen}>
                  <BsFillPlayFill size={23} />
                </button>
                <VideoModal open={open} onClose={handleClose} movie={movie} language={language} />
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
        )}
      </div>
    );
  }
);

export default CardMovie;
