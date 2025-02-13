import { useEffect, useMemo } from "react";
import { Banner } from "../Banner/Banner";
import CarouselURL from "../CarouselURL/CarouselURL";
import { useSearch } from "../../context/SearchContext";
import { useMenu } from "../../context/MenuContext";
import "./Home.css";
import { useFeaturedMovie } from "../../hooks/useFeaturedMovie";
import { getFetchURLs } from "../../utils/endPoints";
import { useLanguage } from "../../context/LanguageContext";
import { CarouselFavorites } from "../CarouselFavorites/CarouselFavorites";
export default function Home() {
    const { setSearchTerm } = useSearch();
    const { setOpenMenu } = useMenu();
    const {language}=useLanguage()
    const fetchURLS = useMemo(() => getFetchURLs(language), [language]);
    const featuredMovie =useFeaturedMovie("feautedMovieHome","moviesHome","movie")
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        setOpenMenu(false);
        setSearchTerm("");
    }, []);

    return (
        <div className="contenedorWindow">
            <Banner itemId={featuredMovie?.id} logoBuscar={true}  type="movie"/>
            <div className="contenedorItems">
                <CarouselFavorites isLarge title="My List"/>
                <CarouselURL
                    URL={fetchURLS.popularMovies}
                    title="Popular Movies"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.topRatedMovies}
                    title="Best Voted"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.actionMovies}
                    title="Action"
                />
                <CarouselURL
                    URL={fetchURLS.adventureMovies}
                    title="Adventure"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.animationMovies}
                    title="Animation"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.comedyMovies}
                    title="Comedy"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.crimeMovies}
                    title="Crime"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.documentaryMovies}
                    title="Documentary"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.dramaMovies}
                    title="Drama"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.familyMovies}
                    title="Family"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.fantasyMovies}
                    title="Fantasy"
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
                    URL={fetchURLS.thrillerMovies}
                    title="Thriller"
                    isLarge
                />

            </div>
        </div>
    );
}
