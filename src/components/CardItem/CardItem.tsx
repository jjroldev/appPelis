import React, { useState, useCallback, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { Movie } from "../../interface/Movie";
import { URL_IMAGE_BACKDROP, URL_IMAGE_POSTER } from "../../utils/endPoints";
import { Serie } from "../../interface/Serie";
import "./CardItem.css";

interface CardItemProps {
  item: Movie | Serie;
  isLarge?: boolean;
  doDelete?: boolean;
  onRemoveFavorite?: (item: Movie | Serie) => void;
  onAddFavorite?: (item: Movie | Serie) => void;
}

const CardItem = React.memo(
  ({ item, isLarge, doDelete = false, onRemoveFavorite, onAddFavorite }: CardItemProps) => {
    const itemTitle = "title" in item ? item.title : item.name;
    const navigate = useNavigate();
    const imgRef = useRef<HTMLDivElement | null>(null);

    const [isVisible, setIsVisible] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const pasarMovie = useCallback(() => {
      const tipo = "title" in item ? "movie" : "serie";
      navigate(`/${tipo}/${item.id}`);
    }, [navigate, item.id]);

    const handleRemove = (event: React.MouseEvent) => {
      event.stopPropagation();
      onRemoveFavorite && onRemoveFavorite(item);
    };

    const handleAdd = (event: React.MouseEvent) => {
      event.stopPropagation();
      onAddFavorite && onAddFavorite(item);
    };

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.05 }
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
      <div ref={imgRef} className={`contenedor-poster ${isLarge ? "large" : ""}`} onClick={pasarMovie}>
        <div className={`cardContainerImage ${isLarge ? "backdrop" : "poster"}`}>
          {isVisible && (
            <motion.img
              src={isLarge ? `${URL_IMAGE_BACKDROP}${item.backdrop_path}` : `${URL_IMAGE_POSTER}${item.poster_path}`}
              alt={itemTitle}
              onLoad={() => setImageLoaded(true)}
              initial={{ opacity: 0 }}
              animate={imageLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          )}

          <div className="details-cardItem">
            <h2 className="titulo-cardItem">
              {isLarge && (itemTitle.includes(":") ? itemTitle.split(":")[0] : itemTitle)}
            </h2>
            <div className="play-button">
              <button onClick={handleAdd} className={doDelete ? "heartVisible corazon" : "corazon"}>
                <i className="fa-solid fa-heart"></i>
              </button>
              {doDelete && (
                <button className="corazon" onClick={handleRemove}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default CardItem;