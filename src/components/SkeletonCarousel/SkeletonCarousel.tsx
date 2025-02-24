import Carousel from "react-multi-carousel"
import { SkeletonCardItem } from "./SkeletonCardItem";
import { responsive, responsiveActor } from "../../utils/ResponsiveCarrousel";
import { useMemo } from "react";
import { useWindowWidth } from "../../hooks/useWindowWidth";
export function SkeletonCarousel({ isLarge=true,numItems ,title,actor=false}: { isLarge: boolean | undefined,numItems:number,title:string,actor?:boolean }) {


    const width = useWindowWidth()
    const responsiveSettings = useMemo(() => {
        return actor ? responsiveActor() : responsive(width > 1000 ? isLarge : false);
      }, [actor, width, isLarge]);
      
    
    const renderSkeletonCardItem = (numItems: number) => {
        return Array.from({ length: numItems }).map((_, index) => (
            <SkeletonCardItem key={index} isLarge={isLarge} />
        ));
    };

    return (
        <>
            <div className="carousel">
                <h2 className={`${actor ? "tituloCarouselActor":"tituloCarousel"}`}>{title}</h2>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsiveSettings}
                    ssr={true}
                    autoPlay={false}
                    className={`${width < 600 ? "carousel-cell" : ""}`}
                    partialVisible={true}
                >
                    {renderSkeletonCardItem(numItems)}
                </Carousel>
            </div>
        </>
    )
}