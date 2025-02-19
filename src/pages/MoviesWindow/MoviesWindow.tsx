import './MoviesWindow.css';
import { useFeaturedMovie } from '../../hooks/useFeaturedMovie';
import { Banner } from '../../components/Banner/Banner';
import CarouselURL from '../../components/CarouselURL/CarouselURL';
import { useLanguage } from '../../context/LanguageContext';
import { useEffect, useMemo } from 'react';
import { getFetchURLs } from '../../utils/endPoints';
import '../Home/Home.css';
import { useMenu } from '../../context/MenuContext';
import { useSearch } from '../../context/SearchContext';
import { useRef, useState } from 'react';
export default function MoviesWindow() {
    const featuredMovie = useFeaturedMovie("feautedMovieMW", "itemsBannerMovies", "movie");
    const { language } = useLanguage();
    const fetchURLS = useMemo(() => getFetchURLs(language), [language]);
    const { setOpenMenu } = useMenu();
    const { setSearchTerm } = useSearch();

    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: "instant" });
        setSearchTerm("");
        setOpenMenu(false);
    }, []);

    const carousels = useMemo(() => [
        { URL: fetchURLS.popularMovies, title: "Popular Movies" },
        { URL: fetchURLS.topRatedMovies, title: "Best Voted", isLarge: true },
        { URL: fetchURLS.actionMovies, title: "Movies of action" },
        { URL: fetchURLS.adventureMovies, title: "Adventure on family", isLarge: true },
        { URL: fetchURLS.animationMovies, title: "Animation", isLarge: true },
        { URL: fetchURLS.comedyMovies, title: "Comedy", isLarge: true },
        { URL: fetchURLS.crimeMovies, title: "Crime", isLarge: true },
        { URL: fetchURLS.documentaryMovies, title: "Documentary", isLarge: true },
        { URL: fetchURLS.dramaMovies, title: "Drama", isLarge: true },
        { URL: fetchURLS.familyMovies, title: "Family", isLarge: true },
        { URL: fetchURLS.fantasyMovies, title: "Fantasy", isLarge: true },
        { URL: fetchURLS.historyMovies, title: "History" },
        { URL: fetchURLS.horrorMovies, title: "Horror" },
        { URL: fetchURLS.musicMovies, title: "Music", isLarge: true },
        { URL: fetchURLS.mysteryMovies, title: "Mystery", isLarge: true },
        { URL: fetchURLS.romanceMovies, title: "Romance", isLarge: true },
        { URL: fetchURLS.scienceFictionMovies, title: "Science Fiction", isLarge: true },
        { URL: fetchURLS.thrillerMovies, title: "Thriller", isLarge: true },
    ], [fetchURLS]);


    const [visibleCarousels, setVisibleCarousels] = useState<number>(1);
    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisibleCarousels((prev) => Math.min(prev + 7, carousels.length));
                }
            },
            { rootMargin: "100px" }
        );

        const target = loadMoreRef.current;
        if (target) observer.observe(target);

        return () => {
            if (target) observer.unobserve(target);
        };
    }, [carousels]);


    return (
        <div className="contenedorWindow">
            <Banner itemId={featuredMovie?.id} type='movie' />
            <div className="contenedorItems">
                {carousels.slice(0, visibleCarousels).map((carousel, index) => (
                    <CarouselURL key={index} {...carousel} />
                ))}
                {visibleCarousels < carousels.length && (
                    <div ref={loadMoreRef} style={{ height: '120px', background: 'transparent' }} />
                )}
            </div>
        </div>
    );
}
