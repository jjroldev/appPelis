import { useEffect, useMemo, useState, useRef, Suspense, lazy } from "react";
import { useSearch } from "../../context/SearchContext";
import { useMenu } from "../../context/MenuContext";
import "./Home.css";
import { useFeaturedMovie } from "../../hooks/useFeaturedMovie";
import { getFetchSeriesURLs, getFetchURLs } from "../../utils/endPoints";
import { useLanguage } from "../../context/LanguageContext";
import { Banner } from "../../components/Banner/Banner";
const CarouselFavorites = lazy(() => import("../../components/CarouselFavorites/CarouselFavorites"))
const CarouselURL = lazy(() => import("../../components/CarouselURL/CarouselURL"))

export default function Home() {
    const { setSearchTerm } = useSearch();
    const { setOpenMenu } = useMenu();
    const { language } = useLanguage();

    const fetchURLS = useMemo(() => getFetchURLs(language), [language]);
    const fetchSeriesURLS = useMemo(() => getFetchSeriesURLs(language), [language]);
    const featuredMovie = useFeaturedMovie("feautedMovieHome", "itemsBannerHome", "movie");

    const allCarousels = useMemo(() => [
        { URL: fetchURLS.popularMovies, title: "Popular Movies", isLarge: true },
        { URL: fetchSeriesURLS.popularSeries, title: "Popular Series", isLarge: false },
        { URL: fetchSeriesURLS.comedySeries, title: "Comedy Series", isLarge: true },
        { URL: fetchSeriesURLS.topRatedSeries, title: "Best Voted Series", isLarge: false },
        { URL: fetchSeriesURLS.actionAdventureSeries, title: "Action & Adventure Series", isLarge: true },
        { URL: fetchURLS.topRatedMovies, title: "Best Voted Movies", isLarge: false },
        { URL: fetchURLS.actionMovies, title: "Action Movies", isLarge: true },
        { URL: fetchURLS.adventureMovies, title: "Adventure Movies", isLarge: false },
        { URL: fetchURLS.animationMovies, title: "Animation Movies", isLarge: true },
        { URL: fetchSeriesURLS.crimeSeries, title: "Crime Series", isLarge: false },
        { URL: fetchSeriesURLS.documentarySeries, title: "Documentary Series", isLarge: true },
        { URL: fetchURLS.comedyMovies, title: "Comedy Movies", isLarge: false },
        { URL: fetchURLS.crimeMovies, title: "Crime Movies", isLarge: true },
        { URL: fetchURLS.documentaryMovies, title: "Documentary Movies", isLarge: false },
        { URL: fetchSeriesURLS.dramaSeries, title: "Drama Series", isLarge: true },
        { URL: fetchURLS.dramaMovies, title: "Drama Movies", isLarge: false },
        { URL: fetchURLS.familyMovies, title: "Movies to Watch with Family", isLarge: true },
        { URL: fetchURLS.fantasyMovies, title: "Fantasy Movies", isLarge: false },
        { URL: fetchURLS.historyMovies, title: "History", isLarge: true },
        { URL: fetchURLS.horrorMovies, title: "Horror", isLarge: false },
        { URL: fetchSeriesURLS.realitySeries, title: "Reality Series", isLarge: true },
        { URL: fetchURLS.musicMovies, title: "Music", isLarge: false },
        { URL: fetchURLS.mysteryMovies, title: "Mystery", isLarge: true },
        { URL: fetchSeriesURLS.mysterySeries, title: "Mystery Series", isLarge: false },
        { URL: fetchURLS.romanceMovies, title: "Romance", isLarge: true },
        { URL: fetchURLS.scienceFictionMovies, title: "Science Fiction", isLarge: false },
        { URL: fetchSeriesURLS.warPoliticsSeries, title: "Series of War", isLarge: true },
        { URL: fetchURLS.thrillerMovies, title: "Thriller", isLarge: false },
        { URL: fetchSeriesURLS.upcomingSeries, title: "Upcoming Series", isLarge: true },
        { URL: fetchSeriesURLS.airingToday, title: "Airing Today", isLarge: false },
        { URL: fetchSeriesURLS.kidsSeries, title: "Kids Series", isLarge: true },
        { URL: fetchSeriesURLS.newsSeries, title: "News Series", isLarge: false },
        { URL: fetchSeriesURLS.sciFiFantasySeries, title: "Sci-Fi & Fantasy Series", isLarge: true },
        { URL: fetchSeriesURLS.soapSeries, title: "Soap Operas", isLarge: false },
        { URL: fetchSeriesURLS.talkSeries, title: "Talk Shows", isLarge: true },
        { URL: fetchSeriesURLS.westernSeries, title: "Western Series", isLarge: false },
        { URL: fetchURLS.nowPlaying, title: "Now Playing Movies", isLarge: true },
        { URL: fetchURLS.upcomingMovies, title: "Upcoming Movies", isLarge: false },
        { URL: fetchURLS.discoverMovies, title: "Discover Movies", isLarge: true }
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
                    setVisibleCarousels((prev) => Math.min(prev + 8, allCarousels.length));
                }
            },
            { rootMargin: "100px" }
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
                <Suspense fallback={<></>}>
                    <CarouselFavorites isLarge title="My List" />
                    {allCarousels.slice(0, visibleCarousels).map((carousel, index) => (
                        <CarouselURL key={index} {...carousel} />
                    ))}
                </Suspense>
                {visibleCarousels < allCarousels.length && (
                    <div ref={loadMoreRef} style={{ height: '120px', background: 'transparent' }} />
                )}
            </div>
        </div>
    );
}
