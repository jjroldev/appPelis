import React, { useMemo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Movie } from "../../interface/Movie";
import { useQuery } from "react-query";
import { fetchData } from "../../utils/fetchData";
import { responsive } from "../../utils/ResponsiveCarrousel";
import "../CarouselURL/CarouselURL.css";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { useFavorites } from "../../hooks/useFavorites";
import { Serie } from "../../interface/Serie";
import { SkeletonCarousel } from "../SkeletonCarousel/SkeletonCarousel";
import { getFetchURLs } from "../../utils/endPoints";
import { useLanguage } from "../../context/LanguageContext";
import { renderItems } from "../../utils/helpers";

interface CarouselBaseProps {
  title: string;
  isLarge?: boolean;
}

const CarouselBase = React.memo(({ title, isLarge }: CarouselBaseProps) => {
  const { handleAddFavorite } = useFavorites();
  const width = useWindowWidth();
  const { language } = useLanguage();

  const { data: itemsTR, isLoading } = useQuery(
    ["itemsTR", language],
    () => fetchData(getFetchURLs(language).popularMovies),
    { refetchOnWindowFocus: false }
  );

  const validItemsTR = useMemo(
    () => itemsTR?.results?.filter((item: Movie | Serie) => item.backdrop_path && item.poster_path) || [],
    [itemsTR]
  );

  const responsivew = useMemo(() => responsive(width > 1000 ? isLarge : false), [width, isLarge]);

  if (isLoading) {
    return <SkeletonCarousel numItems={10} isLarge={width > 1000 ? isLarge : false} title={title} />;
  }

  return (
    <div className="carousel">
      <h2 className="tituloCarousel">{title}</h2>
      <Carousel
        swipeable
        showDots={false}
        responsive={responsivew}
        ssr={true}
        infinite
        autoPlay={false}
        keyBoardControl={true}
        partialVisible={true}
        className={`${width < 600 ? "carousel-cell" : ""}`}
        slidesToSlide={8}
      >
        {renderItems(validItemsTR, isLarge, width, handleAddFavorite)}
      </Carousel>
    </div>
  );
});

export default CarouselBase;
