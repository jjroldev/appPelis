import { useEffect, useMemo, useState, useRef } from "react";
import { useSearch } from "../../context/SearchContext";
import { useMenu } from "../../context/MenuContext";
import "./Home.css";
import { useFeaturedMovie } from "../../hooks/useFeaturedMovie";
import { getFetchSeriesURLs, getFetchURLs } from "../../utils/endPoints";
import { useLanguage } from "../../context/LanguageContext";
import CarouselURL from "../../components/CarouselURL/CarouselURL";
import { CarouselFavorites } from "../../components/CarouselFavorites/CarouselFavorites";
import { Banner } from "../../components/Banner/Banner";

export default function Home() {
    const { setSearchTerm } = useSearch();
    const { setOpenMenu } = useMenu();
    const { language } = useLanguage();

    const fetchURLS = useMemo(() => getFetchURLs(language), [language]);
    const fetchSeriesURLS = useMemo(() => getFetchSeriesURLs(language), [language]);
    const featuredMovie = useFeaturedMovie("feautedMovieHome", "moviesHome", "movie");

    const allCarousels = useMemo(() => [
        { URL: fetchURLS.popularMovies, title: "Popular Movies", isLarge: true },
        { URL: fetchSeriesURLS.comedySeries, title: "Comedy Series", isLarge: true },
        { URL: fetchSeriesURLS.topRatedSeries, title: "Best Voted Series", isLarge: true },
        { URL: fetchSeriesURLS.actionAdventureSeries, title: "Action & Adventure Series" },
        { URL: fetchURLS.topRatedMovies, title: "Best Voted Movies", isLarge: true },
        { URL: fetchURLS.actionMovies, title: "Action Movies" },
        { URL: fetchURLS.adventureMovies, title: "Adventure Movies", isLarge: true },
        { URL: fetchURLS.animationMovies, title: "Animation Movies", isLarge: true },
        { URL: fetchSeriesURLS.crimeSeries, title: "Crime Series", isLarge: true },
        { URL: fetchSeriesURLS.documentarySeries, title: "Documentary Series", isLarge: true },
        { URL: fetchURLS.comedyMovies, title: "Comedy Movies", isLarge: true },
        { URL: fetchURLS.crimeMovies, title: "Crime Movies", isLarge: true },
        { URL: fetchURLS.documentaryMovies, title: "Documentary Movies", isLarge: true },
        { URL: fetchSeriesURLS.dramaSeries, title: "Drama Series", isLarge: true },
        { URL: fetchURLS.dramaMovies, title: "Drama Movies", isLarge: true },
        { URL: fetchURLS.familyMovies, title: "Movies to Watch with Family", isLarge: true },
        { URL: fetchURLS.fantasyMovies, title: "Fantasy Movies", isLarge: true },
        { URL: fetchURLS.historyMovies, title: "History" },
        { URL: fetchURLS.horrorMovies, title: "Horror" },
        { URL: fetchSeriesURLS.realitySeries, title: "Reality Series" },
        { URL: fetchURLS.musicMovies, title: "Music", isLarge: true },
        { URL: fetchURLS.mysteryMovies, title: "Mystery", isLarge: true },
        { URL: fetchSeriesURLS.mysterySeries, title: "Mystery Series", isLarge: true },
        { URL: fetchURLS.romanceMovies, title: "Romance", isLarge: true },
        { URL: fetchURLS.scienceFictionMovies, title: "Science Fiction", isLarge: true },
        { URL: fetchSeriesURLS.warPoliticsSeries, title: "Series of War", isLarge: true },
        { URL: fetchURLS.thrillerMovies, title: "Thriller", isLarge: true },
    ], [fetchURLS, fetchSeriesURLS]);

    const [visibleCarousels, setVisibleCarousels] = useState<number>(5);
    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        setOpenMenu(false);
        setSearchTerm("");
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisibleCarousels((prev) => Math.min(prev + 7, allCarousels.length));
                }
            },
            { rootMargin: "150px" }
        );

        const target = loadMoreRef.current;
        if (target) observer.observe(target);

        return () => {
            if (target) observer.unobserve(target);
        };
    }, [allCarousels]);

    return (
        <div className="contenedorWindow">
            <Banner itemId={featuredMovie?.id} type="movie" />
            <div className="contenedorItems">
                <CarouselFavorites isLarge title="My List" />
                {allCarousels.slice(0, visibleCarousels).map((carousel, index) => (
                    <CarouselURL key={index} {...carousel} />
                ))}
                {visibleCarousels < allCarousels.length && (
                    <div ref={loadMoreRef} style={{ height: '20px', background: 'transparent' }} />
                )}
            </div>
        </div>
    );
}
