import React, { useCallback, useMemo, useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardMovie from "../CardMovie/CardMovie";
import { Movie } from "../../interface/Movie";
import { useQuery } from "react-query";
import { fetchData } from "../../utils/fetchData";
import { responsive } from "../../utils/ResponsiveCarrousel";
import "./MovieSwiper.css";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { useFavorites } from "../../hooks/useFavorites";
import { SkeletonCarousel } from "../SkeletonMovieSwiper/SkeletonCarousel";
import { getFetchURLs } from "../../utils/endPoints";
import { useLanguage } from "../../context/LanguageContext";
const MovieSwiper = React.memo(
  ({ URL, title, isLarge = false }: { URL: string; title: string; isLarge?: boolean }) => {

    const {handleAddFavorite}=useFavorites()
    const {language}=useLanguage()
    // const [isScrolled, setIsScrolled] = useState(false);


    const { data: movies, isLoading } = useQuery(["movies", URL], () => fetchData(URL), {
      refetchOnWindowFocus: false,
    });
    const { data: popularMovies, isLoading:isLoadingP } = useQuery(["movies","populars"],
       () => fetchData(getFetchURLs(language).popularMovies), {
      refetchOnWindowFocus: false,
    });

    const width=useWindowWidth()
    const [isLarge1, setIsLarge] = useState(isLarge);

    useEffect(() => {
      setIsLarge(width > 1000 ? isLarge : false);
    }, [width]);

    const validMovies = useMemo(
      () => movies?.results?.filter((movie: Movie) => movie.backdrop_path) || [],
      [movies]
    );

    const validMoviesP = useMemo(
      () => popularMovies?.results?.filter((movie: Movie) => movie.backdrop_path) || [],
      [movies]
    );
    const responsivew = useMemo(() => responsive(isLarge1), [isLarge1]);

    const renderMovies = useCallback(
      (movies: Movie[]) =>
        movies.map((movie) => (
          <CardMovie key={movie.id} movie={movie} isLarge={isLarge1} onAddFavorite={handleAddFavorite} />
        )),
      [isLarge1]
    );

    if(isLoading || isLoadingP){
      return (
        <SkeletonCarousel numMovies={20} isLarge={false} title={title}/>
      )
    }

    return (
      <div className="carousel">
            <h2 className="tituloCarousel">{title}</h2>
            <Carousel
              swipeable
              showDots={false}
              responsive={responsivew}
              ssr={false}
              infinite
              autoPlay={false}
              keyBoardControl={true}
              // centerMode={isScrolled}
              partialVisible={true}
              className={`${width < 600 ? "carousel-cell" : ""}`}
              slidesToSlide={8}
              // beforeChange={(nextSlide) => setIsScrolled(nextSlide > 0)}
            >
              {validMovies.length>0? 
              renderMovies(validMovies):
              renderMovies(validMoviesP)}
            </Carousel>
      </div>
    );
  }
);

export default MovieSwiper;
