import React, { useCallback, useMemo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardItem from "../CardItem/CardItem";
import { Movie } from "../../interface/Movie";
import { useQuery } from "react-query";
import { fetchData } from "../../utils/fetchData";
import { responsive } from "../../utils/ResponsiveCarrousel";
import "./CarouselURL.css";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { useFavorites } from "../../hooks/useFavorites";
import { getFetchSeriesURLs, getFetchURLs } from "../../utils/endPoints";
import { useLanguage } from "../../context/LanguageContext";
import { Serie } from "../../interface/Serie";
import { SkeletonCarousel } from "../SkeletonCarousel/SkeletonCarousel";

interface CarouselURLProps {
  URL: string;
  title: string;
  isLarge?: boolean;
}

const CarouselURL = React.memo(({ URL, title, isLarge }: CarouselURLProps) => {
  const { handleAddFavorite } = useFavorites();
  const { language } = useLanguage();
  const width = useWindowWidth();

  const { data: items, isLoading: isLoadingItems } = useQuery(
    ["items", URL, title], 
    () => fetchData(URL), 
    { refetchOnWindowFocus: false }
  );
  
  const { data: topRatedItems, isLoading: isLoadingTopRated } = useQuery(
    ["items", "top_rated"],
    () =>
      URL.includes("tv")
        ? fetchData(getFetchSeriesURLs(language).topRatedSeries)
        : fetchData(getFetchURLs(language).topRatedMovies),
    {
      refetchOnWindowFocus: false,
      enabled: !isLoadingItems && !items?.results?.length,
    }
  );
  
  const validItems = useMemo(
    () => items?.results?.filter((item: Movie | Serie) => item.backdrop_path) || [],
    [items]
  );
  
  const validItemsP = useMemo(
    () => topRatedItems?.results?.filter((movie: Movie) => movie.backdrop_path) || [],
    [topRatedItems]
  );
  

  const responsivew = useMemo(() => responsive(width > 1000 ? isLarge : false), [width, isLarge]);

  const renderItems = useCallback(
    (items: Movie[] | Serie[]) =>
      items.map((item) => (
        <CardItem key={item.id} item={item} isLarge={width > 1000 ? isLarge : false} onAddFavorite={handleAddFavorite} />
      )),
    [width, isLarge, handleAddFavorite]
  );

  if (isLoadingItems || (isLoadingTopRated && !validItems.length)) {
    return <SkeletonCarousel numItems={5} isLarge={width > 1000 ? isLarge : false} title={title} />;
  }  

  return validItems.length || validItemsP.length ? (
    <div className="carousel">
      <h2 className="tituloCarousel">{title}</h2>
      <Carousel
        swipeable
        showDots={false}
        responsive={responsivew}
        ssr={false}
        infinite
        autoPlay={false}
        keyBoardControl={true}
        partialVisible={true}
        className={`${width < 600 ? "carousel-cell" : ""}`}
        slidesToSlide={8}
      >
        {items?.results?.length ? renderItems(validItems) : renderItems(validItemsP)}
      </Carousel>
    </div>
  ) : null;
});


export default CarouselURL;
