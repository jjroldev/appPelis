import React, { lazy, useMemo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Movie } from "../../interface/Movie";
import { useQuery } from "react-query";
import { fetchData } from "../../utils/fetchData";
import {responsiveActor} from "../../utils/ResponsiveCarrousel";
import { Serie } from "../../interface/Serie";
import { SkeletonCarousel } from "../SkeletonCarousel/SkeletonCarousel";
import { useLanguage } from "../../context/LanguageContext";
import CardItem from "../CardItem/CardItem";
import '../CarouselURL/CarouselURL.css'
import './CarouselItemActor.css'
const CarouselBase = lazy(() => import("../CarouselBase/CarouselBase"));

interface CarouselItemsActorProps {
  URL: string;
  title: string;
  isLarge?: boolean;
}

const CarouselItemsActor = React.memo(({ URL, title, isLarge }: CarouselItemsActorProps) => {
  const { language } = useLanguage();

  const { data: items, isLoading } = useQuery(
    ["itemsActor", URL, title, language],
    () => fetchData(URL),
    { refetchOnWindowFocus: false }
  );

  const validItems = useMemo(
    () => items?.cast?.filter((item: Movie | Serie) => item.backdrop_path && item.poster_path && item.overview)  || [],
    [items]
  );

  const responsivew = useMemo(() => responsiveActor(), []);


  if (isLoading) {
    return <SkeletonCarousel numItems={10} isLarge={false} title={title}/>;
  }


  return validItems.length ? (
    <div className="carousel">
      <h2 className="tituloCarouselActor">{title}</h2>
      <Carousel
        swipeable
        showDots={false}
        responsive={responsivew}
        ssr={true}
        autoPlay={false}
        keyBoardControl={true}
        partialVisible={true}
        slidesToSlide={1}
        infinite
        focusOnSelect={false}
      >
        {validItems.map((item:Movie|Serie,index:number)=>(
            <CardItem key={index} item={item} isLarge={isLarge}/>
        ))}
      </Carousel>
    </div>
  ) : (
    <CarouselBase title={title} isLarge={isLarge} />
  );
});

export default CarouselItemsActor;
