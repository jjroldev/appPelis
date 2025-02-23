import React, { useCallback, useMemo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardItem from "../CardItem/CardItem";
import { Movie } from "../../interface/Movie";
import { responsive } from "../../utils/ResponsiveCarrousel";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { useFavorites } from "../../hooks/useFavorites";
import { Serie } from "../../interface/Serie";
import { SkeletonCarousel } from "../SkeletonCarousel/SkeletonCarousel";
import { useQuery } from "react-query";
import { BelongsCollection } from "../../interface/Movie";
import { fetchData } from "../../utils/fetchData";
import { getCollectionDetailsURL } from "../../utils/endPoints";
import { useLanguage } from "../../context/LanguageContext";

interface CarouselProps {
  title: string;
  isLarge?: boolean;
  item: Movie | Serie | undefined;
}

const CarouselCollection = React.memo(({ title, isLarge = false, item }: CarouselProps) => {
  const { handleAddFavorite } = useFavorites();
  const width = useWindowWidth();
  const {language}=useLanguage()
  const { data: collection, isLoading } = useQuery<BelongsCollection>(
    `collection-${item?.id}`,
    () => fetchData(getCollectionDetailsURL(item?.belongs_to_collection?.id,language)),
    { refetchOnWindowFocus: false, enabled: !!item?.belongs_to_collection?.id }
  );

  const responsivew = useMemo(() => responsive(width > 1000 ? isLarge : false), [width, isLarge]);

  const renderItems = useCallback(
    (items: (Movie | Serie)[] | undefined) =>
      items?.map(
        (item) =>
          item.poster_path && (
            <CardItem key={item.id} item={item} isLarge={width > 1000 ? isLarge : false} />
          )
      ),
    [width, isLarge, handleAddFavorite]
  );

  if (isLoading || !collection?.parts?.length) {
    return <SkeletonCarousel numItems={6} isLarge={isLarge} title={title} />;
  }

  if (!item?.belongs_to_collection) {
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
        infinite={false}
        autoPlay={false}
        keyBoardControl={true}
        partialVisible={true}
        className={`${width < 600 ? "carousel-cell" : ""}`}
        slidesToSlide={1}
        focusOnSelect={false}
      >
        {renderItems(collection?.parts)}
      </Carousel>
    </div>
  );
});

export default CarouselCollection;
