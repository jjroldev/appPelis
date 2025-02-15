import React, { useCallback, useMemo, useState, useEffect } from "react";
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
  URL: string,
  title: string,
  isLarge?: boolean,
}

const CarouselURL = React.memo(
  ({ URL, title, isLarge = false }: CarouselURLProps) => {

    const { handleAddFavorite } = useFavorites()
    const { language } = useLanguage()

    const { data: items } = useQuery(["items", URL,title], () => fetchData(URL), {
      refetchOnWindowFocus: false,
    });

    const { data: topRatedItems} = useQuery(["items", "top_rated"],
      () => URL.includes("tv") ? fetchData(getFetchSeriesURLs(language).topRatedSeries) :
        fetchData(getFetchURLs(language).topRatedMovies)
      , {
        refetchOnWindowFocus: false,
      });

    const width = useWindowWidth()
    const [isLarge1, setIsLarge] = useState(isLarge);

    useEffect(() => {
      setIsLarge(width > 1000 ? isLarge : false);
    }, [width]);

    const validItems = useMemo(
      () => items?.results?.filter((item: Movie | Serie) => item.backdrop_path) || [],
      [items]
    );

    const validItemsP = useMemo(
      () => topRatedItems?.results?.filter((movie: Movie) => movie.backdrop_path) || [],
      [items]
    );

    const responsivew = useMemo(() => responsive(isLarge1), [isLarge1]);

    const renderItems = useCallback(
      (items: Movie[] | Serie[]) =>
        items.map((item) => (
          <CardItem key={item.id} item={item} isLarge={isLarge1} onAddFavorite={handleAddFavorite} />
        )),
      [isLarge1]
    );
 
    return (
      validItems.length || validItemsP.length ?(
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
      ):<SkeletonCarousel numItems={20} title={title} isLarge={false} />
    );
  }
);

export default CarouselURL;
