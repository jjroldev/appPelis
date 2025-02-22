import "./InfoMovie.css";
import { useParams } from "react-router";
import { Banner } from "../../components/Banner/Banner";
import "react-multi-carousel/lib/styles.css";
import { Movie } from "../../interface/Movie";
import { useEffect } from "react";
import { fetchData } from "../../utils/fetchData";
import { useQuery } from "react-query";
import { getURLMovieDetails } from "../../utils/endPoints";
import { useSearch } from "../../context/SearchContext";
import { useMenu } from "../../context/MenuContext";
import { Suspense, lazy } from "react";
import CarouselURL from "../../components/CarouselURL/CarouselURL";
import { useLanguage } from "../../context/LanguageContext";
const CarouselBoostrap = lazy(() => import('../CarouselBoostrap/CarouselBoostrap'))
const CarouselCollection = lazy(() => import('../CarouselCollection/CarouselCollection'))
const CarouselCredits = lazy(() => import('../CarouselCredits/CarouselCredits'))
export default function InfoMovie() {
    const { movieId } = useParams()
    const { language } = useLanguage()
    const { data: item } = useQuery<Movie>(
        `movieInfo-${movieId}-${language}`,
        () => fetchData(getURLMovieDetails(movieId, language).movieDetails),
        { refetchOnWindowFocus: false, enabled: !!movieId }
    );

    const { setSearchTerm } = useSearch();
    const { setOpenMenu } = useMenu();

    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: "instant" });
        setOpenMenu(false);
        setSearchTerm("");
    }, [movieId]);


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
                        <CarouselCredits item={item} title="CAST" />
                    </Suspense>
                </div>
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

    );
}
