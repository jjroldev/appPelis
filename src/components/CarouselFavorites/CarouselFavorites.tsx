import { useAuth } from "../../context/AuthContext";
import { Movie } from "../../interface/Movie";
import { useQuery } from "react-query";
import { getFavoritesByProfile } from "../../firebase";
import { useCallback, useMemo } from "react";
import CardItem from "../CardItem/CardItem";
import { useFavorites } from "../../hooks/useFavorites";
import Carousel from "react-multi-carousel";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { SkeletonCarousel } from "../SkeletonCarousel/SkeletonCarousel";
import { responsive } from "../../utils/ResponsiveCarrousel";
import { Serie } from "../../interface/Serie";
import '../CarouselURL/CarouselURL.css'
interface CarouselFProps {
  isLarge: boolean;
  title: string;
}

export default function CarouselFavorites({ isLarge, title }: CarouselFProps) {
  const { handleRemoveFavorite } = useFavorites();
  const width = useWindowWidth();
  const { currentPerfil, currentUser } = useAuth();

  const { data: items, isLoading } = useQuery<Movie[] | Serie[]>(
    `favorites-${currentUser?.id}-${currentPerfil?.id}`,
    () => getFavoritesByProfile(currentUser?.id, currentPerfil?.id),
    { enabled: !!currentUser?.id && !!currentPerfil?.id }
  );

  const responsivew = useMemo(() => responsive(width > 1000 ? isLarge : false), [width, isLarge]);

  const renderItems = useCallback(
    (items: Movie[] | Serie[] | undefined) =>
      items?.map((item) => (
        <CardItem
          key={item.id}
          item={item}
          isLarge={width > 1000 ? isLarge : false}
          onRemoveFavorite={handleRemoveFavorite}
          doDelete={true}
        />
      )),
    [width, isLarge, handleRemoveFavorite]
  );

  if (isLoading) {
    return <SkeletonCarousel numItems={20} isLarge={width > 1000 ? isLarge : false} title={title} />;
  }

  if (!items?.length) {
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
        partialVisible
        keyBoardControl={true}
        className={`${width < 600 ? "carousel-cell" : ""}`}
        slidesToSlide={1}
        focusOnSelect={false}
      >
        {renderItems(items)}
      </Carousel>
    </div>
  );
}
