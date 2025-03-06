import React, { useState, useCallback, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { Movie } from "../../interface/Movie";
import { URL_IMAGE_BACKDROP, URL_IMAGE_lOGO, URL_IMAGE_POSTER } from "../../utils/endPoints";
import { Serie } from "../../interface/Serie";
import "./CardItem.css";
import { getLogoPath, isMovie } from "../../utils/helpers";
import { useQuery } from "react-query";
import { fetchData } from "../../utils/fetchData";
import { getMovieImagesURL, getSeriesImagesURL } from "../../utils/endPoints";
import { useLanguage } from "../../context/LanguageContext";
interface CardItemProps {
  item: Movie | Serie;
  isLarge?: boolean;
  doDelete?: boolean;
  onRemoveFavorite?: (item: Movie | Serie) => void;
}

const CardItem = React.memo(
  ({ item, isLarge, doDelete = false, onRemoveFavorite }: CardItemProps) => {
    const itemTitle = "title" in item ? item.title : item.name;
    const navigate = useNavigate();
    const imgRef = useRef<HTMLDivElement | null>(null);
    const {language}=useLanguage()
    const [isVisible, setIsVisible] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const { data: dataImages } = useQuery<any>(
      `logo-item-${isMovie(item) ? "movie" : "serie"}-${item.id}`,
      () =>
        isMovie(item)
          ? fetchData(getMovieImagesURL(item.id))
          : fetchData(getSeriesImagesURL(item.id)),
      { enabled: !!item.id && isLarge, staleTime: 1000 * 60 * 5 }
    );

    const logoPath = getLogoPath(item, dataImages, language)

    const pasarMovie = useCallback(() => {
      const tipo = "title" in item ? "movie" : "serie";
      navigate(`/${tipo}/${item.id}`);
    }, [navigate, item.id]);

    const handleRemove = (event: React.MouseEvent) => {
      event.stopPropagation();
      onRemoveFavorite && onRemoveFavorite(item);
    };
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0 }
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
      <div  className={`contenedor-poster ${isLarge ? "large" : ""}`} onClick={pasarMovie}>
        <div ref={imgRef} className={`cardContainerImage ${isLarge ? "backdrop" : "poster"}`}>
          {isVisible && (
            <>
              <motion.img
                src={isLarge ? `${URL_IMAGE_BACKDROP}${item.backdrop_path}` : `${URL_IMAGE_POSTER}${item.poster_path}`}
                alt={itemTitle}
                onLoad={() => setImageLoaded(true)}
                initial={{ opacity: 0 }}
                animate={imageLoaded ? { opacity: 1 } : {}}
                transition={{ duration: 0, ease: "easeOut" }}
                className="main-image"
              />
              {logoPath && isLarge===true&& (
                <motion.img
                  src={URL_IMAGE_lOGO + logoPath}
                  alt={itemTitle}
                  onLoad={() => setImageLoaded(true)}
                  initial={{ opacity: 0 }}
                  animate={imageLoaded ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="logoCardItem"
                />
              )}
            </>
          )}

          <div className="details-cardItem">
            {doDelete && (
              <div className="play-button">
                <button className="corazon" onClick={handleRemove}>
                  <span className="material-symbols-outlined">
                    delete
                  </span>
                </button>

              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default CardItem;