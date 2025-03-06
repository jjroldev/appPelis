import React, { lazy, useMemo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Movie } from "../../interface/Movie";
import { useQuery } from "react-query";
import { fetchData } from "../../utils/fetchData";
import { responsive } from "../../utils/ResponsiveCarrousel";
import "./CarouselURL.css";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { Serie } from "../../interface/Serie";
import { useLanguage } from "../../context/LanguageContext";
import { renderItems } from "../../utils/helpers";

const CarouselBase = lazy(() => import("../CarouselBase/CarouselBase"));

interface CarouselURLProps {
  URL: string;
  title: string;
  isLarge?: boolean;
}

const CarouselURL = React.memo(({ URL, title, isLarge }: CarouselURLProps) => {
  const width = useWindowWidth();
  const { language } = useLanguage();

  const { data: items } = useQuery(
    ["items", URL, title, language],
    () => fetchData(URL),
    { refetchOnWindowFocus: false }
  );

  const validItems = useMemo(
    () => items?.results?.filter((item: Movie | Serie) => item.backdrop_path && item.poster_path && item.overview)  || [],
    [items]
  );

  const responsivew = useMemo(() => responsive(width > 1000 ? isLarge : false), [width, isLarge]);

  return validItems.length ? (
    <div className="carousel">
      <h2 className="tituloCarousel">{title}</h2>
      <Carousel
        swipeable
        showDots={false}
        responsive={responsivew}
        ssr={true}
        autoPlay={false}
        keyBoardControl={true}
        partialVisible={true}
        className={`${width < 600 ? "carousel-cell" : ""}`}
        slidesToSlide={1}
        infinite
        focusOnSelect={false}
      >
        {renderItems(validItems, isLarge, width)}
      </Carousel>
    </div>
  ) : (
    <CarouselBase title={title} isLarge={isLarge} />
  );
});

export default CarouselURL;
