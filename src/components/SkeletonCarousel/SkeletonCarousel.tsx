import Carousel from "react-multi-carousel"
import { SkeletonCard } from "./SkeletonCard";

export default function SkeletonCarousel({ isLarge,numMovies }: { isLarge: boolean,numMovies:number }) {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: isLarge ? 6 : 8,
            slidesToSlide: isLarge ? 5 : 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 5,
            slidesToSlide: 5,
        },
        mobile: {
            breakpoint: { max: 767, min: 464 },
            items: 4,
            slidesToSlide: 4,
        },
    };

    const renderSkeletonCard = (numMovies: number) => {
        return Array.from({ length: numMovies }).map((_, index) => (
            <SkeletonCard key={index} isLarge={isLarge} />
        ));
    };
    

    return (
        <>
            <div className="carousel">
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
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