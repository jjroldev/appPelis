import './MoviesWindow.css';
import { useFeaturedMovie } from '../../hooks/useFeaturedMovie';
import { Banner } from '../../components/Banner/Banner';
import CarouselURL from '../../components/CarouselURL/CarouselURL';
import { useLanguage } from '../../context/LanguageContext';
import { useEffect, useMemo } from 'react';
import { getFetchURLs } from '../../utils/endPoints';
import '../Home/Home.css';
import { useMenu } from '../../context/MenuContext';
import { useRef, useState } from 'react';
import Loader from '../../components/Loader/Loader';
export default function MoviesWindow() {
    const featuredMovie = useFeaturedMovie("feautedMovieMW", "itemsBannerMovies", "movie");
    const { language } = useLanguage();
    const fetchURLS = useMemo(() => getFetchURLs(language), [language]);
    const { setOpenMenu } = useMenu();

    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: "instant" });
        setOpenMenu(false);
    }, []);

    const carousels = useMemo(() => [
        { URL: fetchURLS.popularMovies, title: "Popular Movies" },
        { URL: fetchURLS.topRatedMovies, title: "Best Voted" },
        { URL: fetchURLS.actionMovies, title: "Movies of action" },
        { URL: fetchURLS.adventureMovies, title: "Adventure on family" },
        { URL: fetchURLS.animationMovies, title: "Animation" },
        { URL: fetchURLS.comedyMovies, title: "Comedy" },
        { URL: fetchURLS.crimeMovies, title: "Crime" },
        { URL: fetchURLS.documentaryMovies, title: "Documentary" },
        { URL: fetchURLS.dramaMovies, title: "Drama" },
        { URL: fetchURLS.familyMovies, title: "Family" },
        { URL: fetchURLS.fantasyMovies, title: "Fantasy" },
        { URL: fetchURLS.historyMovies, title: "History" },
        { URL: fetchURLS.horrorMovies, title: "Horror" },
        { URL: fetchURLS.musicMovies, title: "Music" },
        { URL: fetchURLS.mysteryMovies, title: "Mystery" },
        { URL: fetchURLS.romanceMovies, title: "Romance" },
        { URL: fetchURLS.scienceFictionMovies, title: "Science Fiction" },
        { URL: fetchURLS.thrillerMovies, title: "Thriller" },
    ], [fetchURLS]);


    const [visibleCarousels, setVisibleCarousels] = useState<number>(5);
    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisibleCarousels((prev) => Math.min(prev + 7, carousels.length));
                }
            },
            { rootMargin: "1300px" }
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
                    <CarouselURL key={index} isLarge={true} URL={carousel.URL} title={carousel.title} />
                ))}
                {visibleCarousels < carousels.length && (
                    <div ref={loadMoreRef} style={{ height: '100px', background: 'transparent' }} >
                        <Loader />
                    </div>
                )}
            </div>
        </div>
    );
}
