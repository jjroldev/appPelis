import { useState, useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import { Banner } from "../Banner/Banner";
import MovieSwiper from "../MovieSwiper/MovieSwiper";
import { getFetchURLs } from "../../utils/endPoints";
import { fetchData } from "../../utils/fetchData";
import { Movie } from "../../interface/Movie";
import { useSearch } from "../../context/SearchContext";
import { useLanguage } from "../../context/LanguageContext";
import { useMenu } from "../../context/MenuContext";
import "./Home.css";
export default function Home() {
    const { language } = useLanguage();
    const fetchURLS = useMemo(() => getFetchURLs(language), [language]);
    const { data: movies, isLoading } = useQuery(["moviesHome", language], () => fetchData(fetchURLS.actionMovies), { staleTime: 1000 * 60 * 5 });
    const { setSearchTerm } = useSearch();
    const { setOpenMenu } = useMenu();
    const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null);

    const validMovies = useMemo(() => movies?.results?.filter((movie: Movie) => movie.backdrop_path) || [], [movies?.results]);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        setOpenMenu(false);
        setSearchTerm("");
    }, []);

    useEffect(() => {
        if (!isLoading && validMovies.length > 0) {
            const storedMovie = sessionStorage.getItem("featuredMovie");
            const selectedMovie = storedMovie ? JSON.parse(storedMovie) : validMovies[Math.floor(Math.random() * validMovies.length)];
            setFeaturedMovie(selectedMovie);
            sessionStorage.setItem("featuredMovie", JSON.stringify(selectedMovie));
        }
    }, [validMovies, isLoading]);

    return (
        <div className="contenedorHome">
            {
                featuredMovie ? (
                    <Banner movie={featuredMovie} logoBuscar={true} />
                ) : (
                    <div className="header">
                    </div>
                )
            }
            <div className="contenedorPeliculas">
                <MovieSwiper
                    URL={fetchURLS.popularMovies}
                    title="Popular Movies"
                />
                <MovieSwiper
                    URL={fetchURLS.topRatedMovies}
                    title="Best Voted"
                    isLarge
                />
                <MovieSwiper
                    URL={fetchURLS.actionMovies}
                    title="Action"
                />
                <MovieSwiper
                    URL={fetchURLS.adventureMovies}
                    title="Adventure"
                    isLarge
                />
                <MovieSwiper
                    URL={fetchURLS.animationMovies}
                    title="Animation"
                    isLarge
                />
                <MovieSwiper
                    URL={fetchURLS.comedyMovies}
                    title="Comedy"
                    isLarge
                />
                <MovieSwiper
                    URL={fetchURLS.crimeMovies}
                    title="Crime"
                    isLarge
                />
                <MovieSwiper
                    URL={fetchURLS.documentaryMovies}
                    title="Documentary"
                    isLarge
                />
                <MovieSwiper
                    URL={fetchURLS.dramaMovies}
                    title="Drama"
                    isLarge
                />
                <MovieSwiper
                    URL={fetchURLS.familyMovies}
                    title="Family"
                    isLarge
                />
                <MovieSwiper
                    URL={fetchURLS.fantasyMovies}
                    title="Fantasy"
                    isLarge
                />
                <MovieSwiper
                    URL={fetchURLS.historyMovies}
                    title="History"
                />
                <MovieSwiper
                    URL={fetchURLS.horrorMovies}
                    title="Horror"
                />
                <MovieSwiper
                    URL={fetchURLS.musicMovies}
                    title="Music"
                    isLarge
                />
                <MovieSwiper
                    URL={fetchURLS.mysteryMovies}
                    title="Mystery"
                    isLarge
                />
                <MovieSwiper
                    URL={fetchURLS.romanceMovies}
                    title="Romance"
                    isLarge
                />
                <MovieSwiper
                    URL={fetchURLS.scienceFictionMovies}
                    title="Science Fiction"
                    isLarge
                />
                <MovieSwiper
                    URL={fetchURLS.thrillerMovies}
                    title="Thriller"
                    isLarge
                />

            </div>
        </div>
    );
}
