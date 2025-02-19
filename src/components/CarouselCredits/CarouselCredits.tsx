import Carousel from "react-multi-carousel";
import { responsiveInfo } from "../../utils/ResponsiveCarrousel";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { Serie } from "../../interface/Serie";
import { Card } from "../Card/Card";
import { Movie } from "../../interface/Movie";

const CarouselCredits = ({ item, title }: { item: Movie | Serie | undefined; title: string }) => {
    const width = useWindowWidth();

    const castMembers = item?.credits?.cast?.filter(castM => castM?.profile_path) || [];
    const crewMembers = item?.credits?.crew?.filter(crewM => crewM?.profile_path) || [];

    if (castMembers.length === 0 && crewMembers.length === 0) return null;

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
                {castMembers.map(castM => <Card key={castM.id} castMember={castM} />)}
                {crewMembers.map(crewM => <Card key={crewM.id} castMember={crewM} isCrew />)}
            </Carousel>
        </div>
    );
};

export default CarouselCredits;
