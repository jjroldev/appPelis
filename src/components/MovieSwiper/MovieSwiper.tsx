import React, { useCallback, useMemo, useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardMovie from "../CardMovie/CardMovie";
import { Movie } from "../../interface/Movie";
import { useQuery, useQueryClient } from "react-query";
import { fetchData } from "../../utils/fetchData";
import { responsive } from "../../utils/ResponsiveCarrousel";
import { useAuth } from "../../context/AuthContext";
import { addFavoriteToProfile } from "../../firebase";
import "./MovieSwiper.css";
import { useWindowWidth } from "../../hooks/useWindowWidth";

const MovieSwiper = React.memo(
  ({ URL, title, isLarge = false }: { URL: string; title: string; isLarge?: boolean }) => {
    const { currentPerfil, currentUser } = useAuth();
    const queryClient = useQueryClient();

    const { data: movies, isLoading } = useQuery(["movies", URL], () => fetchData(URL), {
      staleTime: 1000 * 60 * 5,
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

    const handleAddFavorite = async (movie: Movie) => {
      await addFavoriteToProfile(currentUser?.id, currentPerfil?.id, movie);
      await queryClient.invalidateQueries(`favorites-${currentUser?.id}-${currentPerfil?.id}`, {
        refetchInactive: false,
      });
    };

    const responsivew = useMemo(() => responsive(isLarge1), [isLarge1]);

    const renderMovies = useCallback(
      (movies: Movie[]) =>
        movies.map((movie) => (
          <CardMovie key={movie.id} movie={movie} isLarge={isLarge1} onAddFavorite={handleAddFavorite} />
        )),
      [isLarge1]
    );

    return (
      <div className="carousel">
        {validMovies.length > 0 && !isLoading && (
          <>
            <h2 className="tituloCarousel">{title}</h2>
            <Carousel
              swipeable
              draggable
              showDots={false}
              responsive={responsivew}
              minimumTouchDrag={50}
              ssr={false}
              infinite
              autoPlay={false}
              partialVisible={true}
              className={`carousel-react ${width < 600 ? "carousel-cell" : ""}`}
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
