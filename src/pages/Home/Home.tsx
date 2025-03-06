import { useEffect, useMemo, useState, useRef, Suspense, lazy } from "react";
import { useMenu } from "../../context/MenuContext";
import "./Home.css";
import { useFeaturedMovie } from "../../hooks/useFeaturedMovie";
import { getFetchSeriesURLs, getFetchURLs } from "../../utils/endPoints";
import { useLanguage } from "../../context/LanguageContext";
import { Banner } from "../../components/Banner/Banner";
import Loader from "../../components/Loader/Loader";
const CarouselFavorites = lazy(() => import("../../components/CarouselFavorites/CarouselFavorites"))
const CarouselURL = lazy(() => import("../../components/CarouselURL/CarouselURL"))

export default function Home() {
    const { setOpenMenu } = useMenu();
    const { language } = useLanguage();

    const fetchURLS = useMemo(() => getFetchURLs(language), [language]);
    const fetchSeriesURLS = useMemo(() => getFetchSeriesURLs(language), [language]);
    const featuredMovie = useFeaturedMovie("feautedMovieHome", "itemsBannerHome", "movie");

    const allCarousels = useMemo(() => [
        { URL: fetchURLS.popularMovies, title: "Popular Movies" },
        { URL: fetchSeriesURLS.popularSeries, title: "Popular Series" },
        { URL: fetchSeriesURLS.comedySeries, title: "Comedy Series" },
        { URL: fetchSeriesURLS.topRatedSeries, title: "Best Voted Series" },
        { URL: fetchSeriesURLS.actionAdventureSeries, title: "Action & Adventure Series" },
        { URL: fetchURLS.topRatedMovies, title: "Best Voted Movies" },
        { URL: fetchURLS.actionMovies, title: "Action Movies" },
        { URL: fetchURLS.adventureMovies, title: "Adventure Movies" },
        { URL: fetchURLS.animationMovies, title: "Animation Movies" },
        { URL: fetchSeriesURLS.crimeSeries, title: "Crime Series" },
        { URL: fetchSeriesURLS.documentarySeries, title: "Documentary Series" },
        { URL: fetchURLS.comedyMovies, title: "Comedy Movies" },
        { URL: fetchURLS.crimeMovies, title: "Crime Movies" },
        { URL: fetchURLS.documentaryMovies, title: "Documentary Movies" },
        { URL: fetchSeriesURLS.dramaSeries, title: "Drama Series" },
        { URL: fetchURLS.dramaMovies, title: "Drama Movies" },
        { URL: fetchURLS.familyMovies, title: "Movies to Watch with Family" },
        { URL: fetchURLS.fantasyMovies, title: "Fantasy Movies" },
        { URL: fetchURLS.historyMovies, title: "History" },
        { URL: fetchURLS.horrorMovies, title: "Horror" },
        { URL: fetchSeriesURLS.realitySeries, title: "Reality Series" },
        { URL: fetchURLS.musicMovies, title: "Music" },
        { URL: fetchURLS.mysteryMovies, title: "Mystery" },
        { URL: fetchSeriesURLS.mysterySeries, title: "Mystery Series" },
        { URL: fetchURLS.romanceMovies, title: "Romance" },
        { URL: fetchURLS.scienceFictionMovies, title: "Science Fiction" },
        { URL: fetchSeriesURLS.warPoliticsSeries, title: "Series of War" },
        { URL: fetchURLS.thrillerMovies, title: "Thriller" },
        { URL: fetchSeriesURLS.upcomingSeries, title: "Upcoming Series" },
        { URL: fetchSeriesURLS.airingToday, title: "Airing Today" },
        { URL: fetchSeriesURLS.kidsSeries, title: "Kids Series" },
        { URL: fetchSeriesURLS.newsSeries, title: "News Series" },
        { URL: fetchSeriesURLS.sciFiFantasySeries, title: "Sci-Fi & Fantasy Series" },
        { URL: fetchSeriesURLS.soapSeries, title: "Soap Operas" },
        { URL: fetchSeriesURLS.talkSeries, title: "Talk Shows" },
        { URL: fetchSeriesURLS.westernSeries, title: "Western Series" },
        { URL: fetchURLS.nowPlaying, title: "Now Playing Movies" },
        { URL: fetchURLS.upcomingMovies, title: "Upcoming Movies" },
        { URL: fetchURLS.discoverMovies, title: "Discover Movies" }
    ], [fetchURLS, fetchSeriesURLS]);
    

    const [visibleCarousels, setVisibleCarousels] = useState<number>(6);
    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        setOpenMenu(false);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisibleCarousels((prev) => Math.min(prev + 8, allCarousels.length));
                }
            },
            { rootMargin: "1300px" }
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
                        <CarouselURL key={index} isLarge={true} URL={carousel.URL} title={carousel.title} />
                    ))}
                </Suspense>
                {visibleCarousels < allCarousels.length && (
                    <div ref={loadMoreRef} style={{ height: '100px', background: 'transparent' }} >
                        <Loader />
                    </div>
                )}
            </div>
        </div>
    );
}
