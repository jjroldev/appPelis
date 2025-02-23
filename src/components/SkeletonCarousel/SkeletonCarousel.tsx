import Carousel from "react-multi-carousel"
import { SkeletonCardItem } from "./SkeletonCardItem";
import { responsive } from "../../utils/ResponsiveCarrousel";
import { useMemo } from "react";
import { useWindowWidth } from "../../hooks/useWindowWidth";
export function SkeletonCarousel({ isLarge=true,numItems ,title}: { isLarge: boolean | undefined,numItems:number,title:string }) {

    const responsivew = useMemo(() => responsive(isLarge), [isLarge]);
    const width = useWindowWidth()
    
    const renderSkeletonCardItem = (numItems: number) => {
        return Array.from({ length: numItems }).map((_, index) => (
            <SkeletonCardItem key={index} isLarge={isLarge} />
        ));
    };

    return (
        <>
            <div className="carousel">
                <h2 className="tituloCarousel">{title}</h2>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsivew}
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