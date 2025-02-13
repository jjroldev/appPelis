import { useEffect, useMemo } from "react";
import { Banner } from "../Banner/Banner";
import CarouselURL from "../CarouselURL/CarouselURL";
import { useSearch } from "../../context/SearchContext";
import { useMenu } from "../../context/MenuContext";
import "./Home.css";
import { useFeaturedMovie } from "../../hooks/useFeaturedMovie";
import { getFetchSeriesURLs, getFetchURLs } from "../../utils/endPoints";
import { useLanguage } from "../../context/LanguageContext";
import { CarouselFavorites } from "../CarouselFavorites/CarouselFavorites";
export default function Home() {
    const { setSearchTerm } = useSearch();
    const { setOpenMenu } = useMenu();
    const { language } = useLanguage()
    const fetchURLS = useMemo(() => getFetchURLs(language), [language]);
    const fetchSeriesURLS = useMemo(() => getFetchSeriesURLs(language), [language]);
    const featuredMovie = useFeaturedMovie("feautedMovieHome", "moviesHome", "movie")
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        setOpenMenu(false);
        setSearchTerm("");
    }, []);

    return (
        <div className="contenedorWindow">
            <Banner itemId={featuredMovie?.id} logoBuscar={true} type="movie" />
            <div className="contenedorItems">
                <CarouselFavorites isLarge title="My List" />
                <CarouselURL
                    URL={fetchURLS.popularMovies}
                    title="Popular Movies"
                    isLarge
                />

                <CarouselURL
                    URL={fetchSeriesURLS.comedySeries}
                    title="Comedy series"
                    isLarge
                />
                <CarouselURL
                    URL={fetchSeriesURLS.topRatedSeries}
                    title="Best voted series"
                    isLarge
                />
                <CarouselURL
                    URL={fetchSeriesURLS.actionAdventureSeries}
                    title="Series of action and adventure"
                />
                <CarouselURL
                    URL={fetchURLS.topRatedMovies}
                    title="Best voted movies"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.actionMovies}
                    title="Action movies"
                />
                <CarouselURL
                    URL={fetchURLS.adventureMovies}
                    title="Adventure movies"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.animationMovies}
                    title="Animation movies"
                    isLarge
                />
                <CarouselURL
                    URL={fetchSeriesURLS.crimeSeries}
                    title="Crime series"
                    isLarge
                />
                <CarouselURL
                    URL={fetchSeriesURLS.documentarySeries}
                    title="Documentary series"
                    isLarge
                />

                <CarouselURL
                    URL={fetchURLS.comedyMovies}
                    title="Comedy movies"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.crimeMovies}
                    title="Crime movies"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.documentaryMovies}
                    title="Documentary movies"
                    isLarge
                />

                <CarouselURL
                    URL={fetchSeriesURLS.dramaSeries}
                    title="Drama series"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.dramaMovies}
                    title="Drama movies"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.familyMovies}
                    title="Movies to watch with family"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.fantasyMovies}
                    title="Fantasy movies"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.historyMovies}
                    title="History"
                />
                <CarouselURL
                    URL={fetchURLS.horrorMovies}
                    title="Horror"
                />

                <CarouselURL
                    URL={fetchSeriesURLS.realitySeries}
                    title="Reality series"
                />
                <CarouselURL
                    URL={fetchURLS.musicMovies}
                    title="Music"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.mysteryMovies}
                    title="Mystery"
                    isLarge
                />

                <CarouselURL
                    URL={fetchSeriesURLS.mysterySeries}
                    title="Mystey series"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.romanceMovies}
                    title="Romance"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.scienceFictionMovies}
                    title="Science Fiction"
                    isLarge
                />

                <CarouselURL
                    URL={fetchSeriesURLS.warPoliticsSeries}
                    title="Series of war"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.thrillerMovies}
                    title="Thriller"
                    isLarge
                />

            </div>
        </div>
    );
}
