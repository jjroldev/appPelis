import React, { useCallback, useMemo, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardMovie from "../CardMovie/CardMovie";
import { Movie } from "../../interface/Movie";
import { useQuery, useQueryClient } from 'react-query';
import { fetchData } from "../../utils/fetchData";
import "./MovieSwiper.css";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { responsive } from "../../utils/ResponsiveCarrousel";
import { addFavoriteToProfile } from "../../firebase";
const MovieSwiper = React.memo(
  ({ URL, title, isLarge = false }: { URL: string; title: string; isLarge?: boolean }) => {
    const { currentPerfil, currentUser } = useAuth()

    const { data: movies } = useQuery(["movies", URL], () => fetchData(URL),
      { staleTime: 1000 * 60 * 5, refetchOnWindowFocus: false, });
    
    const [width,setWidth]=useState(window.innerWidth)
    const [isLarge1,setIsLarge]=useState(isLarge)

    const queryClient = useQueryClient()
    const validMovies = useMemo(() => {
      return movies?.results?.filter((movie: Movie) => movie.backdrop_path) || [];
    }, [movies]);

    const handleAddFavorite = async (movie: Movie) => {
      await addFavoriteToProfile(currentUser?.id, currentPerfil?.id, movie);
      await queryClient.invalidateQueries(`favorites-${currentUser?.id}-${currentPerfil?.id}`
        , {
          refetchInactive: false,
        }
      );
    };
    const responsivew = useMemo(() => responsive(isLarge1), [isLarge1]);

    const renderMovies = useCallback(
      (movies: Movie[]) =>
        movies.map((movie) => {
          return <CardMovie key={movie.id} movie={movie} isLarge={isLarge1} onAddFavorite={handleAddFavorite} />
        }),
      [isLarge1]
    );


    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
      if (width <= 1000) {
        setIsLarge(false)
      }else{
        setIsLarge(isLarge)
      }
    }, [width])

    return (
      <div className="carousel">
        {validMovies.length > 0 && (
          <>
            <h2 className="tituloCarousel">{title}</h2>
            <Carousel
              swipeable={true}
              draggable={false}
              showDots={false}
              responsive={responsivew}
              ssr={true}
              infinite={true}
              autoPlay={false}
              className="carousel-react"
            >
              {renderMovies(validMovies)}
            </Carousel>
          </>
        )}
      </div>
    );
  }
);

export default MovieSwiper;
