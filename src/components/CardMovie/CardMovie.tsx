import React, { useState, useCallback, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { BsFillPlayFill } from "react-icons/bs";
import { FaInfo } from "react-icons/fa";
import VideoModal from "../ModalVideo/ModalVideo";
import { Movie } from "../../interface/Movie";
import { URL_IMAGE_BACKDROP, URL_IMAGE_POSTER } from "../../App";
import "./CardMovie.css";
import { Skeleton } from "@mui/material";

const CardMovie = React.memo(
  ({ movie, isLarge, language }: { movie: Movie; isLarge?: boolean; language: string }) => {
    const [open, setOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const imgRef = useRef<HTMLDivElement | null>(null);
    const navigate = useNavigate();

    const handleOpen = useCallback(() => setOpen(true), []);
    const handleClose = useCallback(() => setOpen(false), []);
    const pasarMovie = useCallback(() => {
      navigate("/info", { state: { movie, language } });
    }, [navigate, movie, language]);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => {
        if (imgRef.current) {
          observer.unobserve(imgRef.current);
        }
      };
    }, []);

    return (
      <div ref={imgRef} className={`contenedor-poster ${isLarge ? "large" : ""}`}>
        {isVisible && (
          <div className={`cardContainerImage ${isLarge ? "backdrop" : "poster"}`}>
            {!imageLoaded && (
              <Skeleton
                width="100%"
                height="100%"
                variant="rectangular"
                sx={{ bgcolor: "grey.900" }}
                animation="wave"
              />
            )}
            <img
              src={`${isLarge ? `${URL_IMAGE_BACKDROP}${movie.backdrop_path}` : `${URL_IMAGE_POSTER}${movie.poster_path}`}`}
              alt={movie.title}
              className={`main-image ${imageLoaded ? "visible" : "hidden"}`}
              onLoad={() => setImageLoaded(true)}
            />
            {imageLoaded && (
              <div className="hover-details">
                <h2 className="titulo-cardMovie">
                  {isLarge && (movie.title.includes(":") ? movie.title.split(":")[0] : movie.title)}
                </h2>
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
            )}
          </div>
        ) }
      </div>
    );
  }
);

export default CardMovie;
