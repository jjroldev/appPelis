import React, { lazy, useMemo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Movie } from "../../interface/Movie";
import {responsiveActor} from "../../utils/ResponsiveCarrousel";
import { Serie } from "../../interface/Serie";
// import { SkeletonCarousel } from "../SkeletonCarousel/SkeletonCarousel";
import CardItem from "../CardItem/CardItem";
import '../CarouselURL/CarouselURL.css'
import './CarouselItemActor.css'
import { useWindowWidth } from "../../hooks/useWindowWidth";
const CarouselBase = lazy(() => import("../CarouselBase/CarouselBase"));

interface CarouselItemsActorProps {
  title: string;
  isLarge?: boolean;
  items: any[]
}

const CarouselItemsActor = React.memo(({title, isLarge,items }: CarouselItemsActorProps) => {
  const width= useWindowWidth()
 
  const responsivew = useMemo(() => responsiveActor(), []);


//   if (isLoading) {
//     return <SkeletonCarousel numItems={10} isLarge={false} title={title} actor={true}/>;
//   }


  return items.length ? (
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
        className={`${width < 600 ? "carousel-cell" : ""}`}
        infinite
        focusOnSelect={false}
      >
        {items.map((item:Movie|Serie,index:number)=>(
            <CardItem key={index} item={item} isLarge={false}/>
        ))}
      </Carousel>
    </div>
  ) : (
    <CarouselBase title={title} isLarge={isLarge} />
  );
});

export default CarouselItemsActor;
