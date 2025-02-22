import Carousel from "react-bootstrap/Carousel";
import { Movie } from "../../interface/Movie";
import { lazy, memo, useMemo } from "react";
import { useQuery } from "react-query";
import { fetchData } from "../../utils/fetchData";
import { getSeriesDetailsURL, getURLMovieDetails } from "../../utils/endPoints";
import "./CarouselBoostrap.css";
import { Serie } from "../../interface/Serie";
import { motion } from 'framer-motion'
import { useLanguage } from "../../context/LanguageContext";
import { isMovie } from "../../utils/helpers";
const Backdrop = lazy(() => import("../BackDrop/Backdrop"));

const CarouselBoostrap = memo(({ item }: { item: Movie | Serie | undefined }) => {
  const {language}=useLanguage()
  const fetchURL = isMovie(item)
    ? getURLMovieDetails(item?.id,language).movieDetails
    : getSeriesDetailsURL(item?.id,language);

  const { data: items } = useQuery<Movie | Serie>(
    ["mediaDetails", item?.id],
    () => fetchData(fetchURL),
    { refetchOnWindowFocus: false }
  );

  const images = useMemo(() => {
    if (!items || !("images" in items)) return [];
    return items.images?.backdrops || [];
  }, [items]);

  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <div className={`carousel-bootstrap cb-backdrop`}>
        <Carousel fade interval={3000} pause="hover">
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <Backdrop backdrop_path={image.file_path} />
            </Carousel.Item>
          ))}
        </Carousel>

      </div>
    </motion.div>
  );
});


export default CarouselBoostrap;
