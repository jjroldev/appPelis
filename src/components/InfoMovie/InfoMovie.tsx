import "./InfoMovie.css";
import { useParams } from "react-router";
import { Banner } from "../../components/Banner/Banner";
import "react-multi-carousel/lib/styles.css";
import { Movie } from "../../interface/Movie";
import { useEffect } from "react";
import { fetchData } from "../../utils/fetchData";
import { useQuery } from "react-query";
import { getURLMovieDetails } from "../../utils/endPoints";
import { useMenu } from "../../context/MenuContext";
import { Suspense, lazy } from "react";
import CarouselURL from "../../components/CarouselURL/CarouselURL";
import { useLanguage } from "../../context/LanguageContext";
import CardItem from "../CardItem/CardItem";
import Spinner from "../Spinner/Spinner";
const CarouselBoostrap = lazy(() => import('../CarouselBoostrap/CarouselBoostrap'))
const CarouselCollection = lazy(() => import('../CarouselCollection/CarouselCollection'))
const CarouselCredits = lazy(() => import('../CarouselCredits/CarouselCredits'))
export default function InfoMovie() {
    const { movieId } = useParams()
    const { language } = useLanguage()
    const { data: item, isLoading } = useQuery<Movie>(
        `movieInfo-${movieId}-${language}`,
        () => fetchData(getURLMovieDetails(movieId, language).movieDetails),
        { refetchOnWindowFocus: false, enabled: !!movieId }
    );

    const { data: similars, isLoading: isLoading1 } = useQuery(`similar-${movieId}-${language}`, () =>
        fetchData(getURLMovieDetails(movieId, language, 2).similar), { refetchOnWindowFocus: false })

    const { setOpenMenu } = useMenu();

    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: "instant" });
        setOpenMenu(false);
    }, [movieId]);

    if (isLoading || isLoading1) {
        return <Spinner />
    }
    return (
        <div className="contenedorPrincipalItem">
            <Banner itemId={movieId} isDetail type={"movie"} />
            <div className="infoItemContainer">
                <div className="detallesInfo">
                    <div className="contenedorSimilares">
                        {item?.belongs_to_collection &&
                            <Suspense fallback={<></>}>
                                <CarouselCollection title="Collection" item={item} />
                            </Suspense>
                        }
                        {item &&
                            <CarouselURL
                                URL={
                                    getURLMovieDetails(item?.id, language).similar
                                }
                                title="También te puede interesar"
                                isLarge={false}
                            />}
                    </div>

                    <Suspense fallback={<></>}>
                        <CarouselCredits item={item} title="Cast" />
                    </Suspense>

                    {
                        similars?.results?.length > 0 && (
                            <div className="similarContainer flex flex-col gap-2">
                                <h3>Similar movies</h3>
                                <div className="contenedorPeliculasSimilares bg-red w-full">
                                    {
                                        similars?.results?.map((movie: Movie, index: number) => (
                                            movie.poster_path && movie.overview && <CardItem key={index} item={movie} isLarge={false} />
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                    <div className="contenedor-imagenes">
                        <div className="flex flex-col backdropss">
                            {item && (
                                <Suspense fallback={<></>}>
                                    <CarouselBoostrap item={item} />
                                </Suspense>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
