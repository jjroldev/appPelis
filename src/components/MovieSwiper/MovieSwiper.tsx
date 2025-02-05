import React, { useCallback, useMemo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardMovie from "../CardMovie/CardMovie";
import { Movie } from "../../interface/Movie";
import { useQuery, useQueryClient } from 'react-query';
import { fetchData } from "../../utils/fetchData";
import "./MovieSwiper.css";
import { useAuth } from "../../context/AuthContext";
import { responsive } from "../../utils/ResponsiveCarrousel";
import { addFavoriteToProfile } from "../../firebase";
const MovieSwiper = React.memo(
  ({ URL, title, isLarge = false }: { URL: string; title: string; isLarge?: boolean }) => {
    const { currentPerfil, currentUser } = useAuth()

    const { data: movies} = useQuery(["movies", URL], () => fetchData(URL),
    { staleTime: 1000 * 60 * 5 ,refetchOnWindowFocus: false,});  
  
    const queryClient=useQueryClient()
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
    const responsivew = useMemo(() => responsive(isLarge), [isLarge]);

    const renderMovies = useCallback(
      (movies: Movie[]) =>
        movies.map((movie) => {
          return <CardMovie key={movie.id} movie={movie} isLarge={isLarge} onAddFavorite={handleAddFavorite} />
        }),
      [isLarge,handleAddFavorite]
    );

    return (
      <div className="carousel">
        {validMovies.length > 0 && (
          <>
            <h2 className="tituloCarousel">{title}</h2>
            <Carousel
              swipeable={false}
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
