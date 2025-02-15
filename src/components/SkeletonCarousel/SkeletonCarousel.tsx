import Carousel from "react-multi-carousel"
import { SkeletonCardItem } from "./SkeletonCardItem";
import { responsive } from "../../utils/ResponsiveCarrousel";
export function SkeletonCarousel({ isLarge,numItems ,title}: { isLarge: boolean,numItems:number,title:string }) {

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
                    responsive={responsive(isLarge)}
                    ssr={true}
                    infinite={true}
                    autoPlay={false}
                    className="carousel-react"
                    partialVisible={true}
                >
                    {renderSkeletonCardItem(numItems)}
                </Carousel>
            </div>
        </>
    )
}