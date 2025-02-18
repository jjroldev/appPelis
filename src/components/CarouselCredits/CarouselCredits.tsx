import Carousel from "react-multi-carousel";
import { responsiveInfo } from "../../utils/ResponsiveCarrousel";
import { useWindowWidth } from "../../hooks/useWindowWidth";
const CarouselCredits = ({ renderCredits, title }: { renderCredits: React.ReactNode; title: string }) => {
    const width = useWindowWidth()
    return (
        <div className="detallesReparto">
            <h2>{title}</h2>
            <Carousel
                swipeable
                draggable
                showDots={false}
                responsive={responsiveInfo}
                ssr
                infinite
                keyBoardControl={false}
                className={`carousel-cast ${width < 630 ? "cast-visible" : ""}`}
                partialVisible={true}
                minimumTouchDrag={0}
            >
                {renderCredits}
            </Carousel>
        </div>
    )
};

export default CarouselCredits