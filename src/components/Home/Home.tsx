import { useState, useEffect } from "react";
import { Banner } from "../Banner/Banner";
import './Home.css';
import { lazy } from "react";
import { Movie } from "../../interface/Movie";
const MovieSwiper = lazy(() => import("../MovieSwiper/MovieSwiper"));
import { getFetchURLs } from "../../utils/endPoints";
import { fetchData } from "../../utils/fetchData";
import { useQuery } from "react-query";
import { useMemo } from "react";
import { useSearch } from "../../context/SearchContext";
import { useLanguage } from "../../context/LanguageContext";
export default function Home() {
    const { language } = useLanguage()
    const fetchURLS = useMemo(() => getFetchURLs(language), []);
    const { data: movies, isLoading } = useQuery(["moviesHome"], () => fetchData(getFetchURLs(language).actionMovies));

    const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null);
    const { setSearchTerm } = useSearch()

    const validMovies = useMemo(() => {
        return movies?.results?.filter((movie: Movie) => movie.backdrop_path)
    }, [movies?.results])

    useEffect(() => {
        if (!isLoading && validMovies.length > 0) {
            const storedMovie = sessionStorage.getItem('featuredMovie');
            
            if (storedMovie) {
                setFeaturedMovie(JSON.parse(storedMovie));
            } else {
                const randomIndex = Math.floor(Math.random() * validMovies.length);
                const selectedMovie = validMovies[randomIndex];
                setFeaturedMovie(selectedMovie);
    
                sessionStorage.setItem('featuredMovie', JSON.stringify(selectedMovie));
            }
        }
    }, [validMovies]);
    


    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: "instant" });
        setSearchTerm("");
    }, []);
    


    if (isLoading) {
        return (
            <>
                <div className={` w-full h-screen cargandoHome`}>
                    <div className="spinner"></div>
                </div>
            </>
        )
    }

    return (
        <div className="contenedorHome">
            <Banner movie={featuredMovie} logoBuscar={true} />
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
