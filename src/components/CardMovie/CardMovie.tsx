import React, { useState, useCallback, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { BsFillPlayFill } from "react-icons/bs";
import { FaInfo } from "react-icons/fa";
import { lazy } from "react";
import { Movie } from "../../interface/Movie";
import { URL_IMAGE_BACKDROP,URL_IMAGE_POSTER } from "../../utils/endPoints";
import { Suspense } from "react";
const VideoModal = lazy(() => import('../ModalVideo/ModalVideo'));
import "./CardMovie.css";
interface CardMovieProps {
    movie: Movie;
    isLarge?: boolean;
    doDelete?: boolean;
    onRemoveFavorite?: (movie: Movie) => void;
    onAddFavorite?:(movie:Movie)=>void;
}
const CardMovie = React.memo(
    ({
        movie,
        isLarge,
        doDelete = false,
        onRemoveFavorite,
        onAddFavorite,
    }: CardMovieProps) => {

        const handleRemove = () => {
            onRemoveFavorite && onRemoveFavorite(movie);
        };

        const handleAdd=()=>{
            onAddFavorite && onAddFavorite(movie)
        }

        const [open, setOpen] = useState(false);
        const [isVisible, setIsVisible] = useState(false);
        const [imageLoaded, setImageLoaded] = useState(false);
        const imgRef = useRef<HTMLDivElement | null>(null);
        const navigate = useNavigate();

        const handleOpen = useCallback(() => setOpen(true), []);
        const handleClose = useCallback(() => setOpen(false), []);

        
        const pasarMovie = useCallback(() => {
            navigate("/info", { state: { movie } });
        }, [navigate, movie]);

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                },
                { threshold: 0.01 }
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
                <div className={`cardContainerImage ${isLarge ? "backdrop" : "poster"}`}>
                    <div
                        className={`fondoCardMovie h-full w-full absolute inset-0 ${imageLoaded ? "opacity-0" : "opacity-100"
                            } transition-opacity duration-500`}
                    ></div>
                    {isVisible && (
                        <img
                            src={`${isLarge ? `${URL_IMAGE_BACKDROP}${movie.backdrop_path}` : `${URL_IMAGE_POSTER}${movie.poster_path}`}`}
                            alt={movie.title}
                            onLoad={() => setImageLoaded(true)}
                            className={`main-image ${imageLoaded ? "visible" : "hidden"}`}
                        />
                    )}
                    {imageLoaded && (
                        <div className="hover-details">
                            <h2 className="titulo-cardMovie">
                                {isLarge && (movie.title.includes(":") ? movie.title.split(":")[0] : movie.title)}
                            </h2>
                            <div className="play-button">
                                <button onClick={handleOpen}>
                                    <BsFillPlayFill size={23} />
                                </button>
                                <Suspense fallback={<div />}>
                                    <VideoModal open={open} onClose={handleClose} movie={movie} />
                                </Suspense>
                                <button onClick={pasarMovie}>
                                    <FaInfo size={16} />
                                </button>
                                <button
                                    onClick={handleAdd}
                                    className={doDelete ? "heartVisible corazon" : "corazon"} 
                                    >
                                    <i className="fa-solid fa-heart">
                                    </i>
                                </button>
                                {doDelete && (
                                    <button onClick={handleRemove}>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                )}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        );


    }
);

export default CardMovie;
