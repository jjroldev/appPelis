import { useAuth } from "../../context/AuthContext";
import { Movie } from "../../interface/Movie"
import { useQuery } from "react-query"
import { getFavoritesByProfile } from "../../firebase";
import { useCallback, useState, useMemo,useEffect } from "react";
import CardItem from "../CardItem/CardItem";
import { useFavorites } from "../../hooks/useFavorites";
import Carousel from "react-multi-carousel";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { SkeletonCarousel } from "../SkeletonCarousel/SkeletonCarousel";
import { responsive } from "../../utils/ResponsiveCarrousel";
import { Serie } from "../../interface/Serie";
interface CarouselFProps {
    isLarge: boolean,
    title: string,
}

export function CarouselFavorites({ isLarge, title }: CarouselFProps) {
    const { handleRemoveFavorite } = useFavorites()
    const [isLarge1, setIsLarge] = useState(isLarge)

    const responsivew = useMemo(() => responsive(isLarge1), [isLarge1]);

    const width = useWindowWidth()
    const renderItems = useCallback(
        (items: Movie[] |Serie[] | undefined) =>
            items?.map((item) => (
                <CardItem key={item.id} item={item} isLarge={isLarge1} 
                onRemoveFavorite={handleRemoveFavorite} 
                doDelete={true}/>
            )),
        [isLarge1]
    );

    const { currentPerfil, currentUser } = useAuth()

    const { data: items, isLoading } = useQuery<Movie[] |Serie[]>(
        `favorites-${currentUser?.id}-${currentPerfil?.id}`,
        () => getFavoritesByProfile(currentUser?.id, currentPerfil?.id),
        {
            enabled: !!currentUser?.id && !!currentPerfil?.id,
        }
    );

    useEffect(() => {
        setIsLarge(width > 1000 ? isLarge : false);
    }, [width]);

    if (isLoading) {
        return (
            <SkeletonCarousel numItems={20} isLarge={false} title={title} />
        )
    }

    if(items?.length==0){
        return null;
    }

    return (
        <div className="carousel">
            <h2 className="tituloCarousel">{title}</h2>
            <Carousel
                swipeable
                showDots={false}
                responsive={responsivew}
                ssr={false}
                autoPlay={false}
                keyBoardControl={true}
                className={`${width < 600 ? "carousel-cell" : ""}`}
                slidesToSlide={8}
            >
                {
                    renderItems(items)
                }
            </Carousel>
        </div>
    )
}