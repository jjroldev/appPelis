import Carousel from "react-multi-carousel"
import { SkeletonCard } from "./SkeletonCard";
import { responsive } from "../../utils/ResponsiveCarrousel";
export function SkeletonCarousel({ isLarge,numMovies ,title}: { isLarge: boolean,numMovies:number,title:string }) {

    const renderSkeletonCard = (numMovies: number) => {
        return Array.from({ length: numMovies }).map((_, index) => (
            <SkeletonCard key={index} isLarge={isLarge} />
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
                >
                    {renderSkeletonCard(numMovies)}
                </Carousel>
            </div>
        </>
    )
}