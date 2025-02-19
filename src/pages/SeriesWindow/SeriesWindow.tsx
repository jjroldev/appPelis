import { useFeaturedMovie } from '../../hooks/useFeaturedMovie';
import { Banner } from '../../components/Banner/Banner';
import { useLanguage } from '../../context/LanguageContext';
import { useMemo, useEffect, useRef, useState } from 'react';
import { getFetchSeriesURLs } from '../../utils/endPoints';
import { useMenu } from '../../context/MenuContext';
import '../Home/Home.css';
import './SeriesWindow.css';
import CarouselURL from '../../components/CarouselURL/CarouselURL';
import { useSearch } from '../../context/SearchContext';

export default function SeriesWindow() {
    const featuredSerie = useFeaturedMovie("feautedSerieSW", "itemsBannerSeries", "serie");
    const { language } = useLanguage();
    const fetchURLS = useMemo(() => getFetchSeriesURLs(language), [language]);
    const { setSearchTerm } = useSearch();
    const { setOpenMenu } = useMenu();

    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: "instant" });
        setSearchTerm("");
        setOpenMenu(false);
    }, []);

    const carousels = useMemo(() => [
        { URL: fetchURLS.popularSeries, title: "Popular Series" },
        { URL: fetchURLS.topRatedSeries, title: "Best Voted", isLarge: true },
        { URL: fetchURLS.actionAdventureSeries, title: "Series of action and adventure" },
        { URL: fetchURLS.familySeries, title: "Series for watch family", isLarge: true },
        { URL: fetchURLS.animationSeries, title: "Animation series", isLarge: true },
        { URL: fetchURLS.comedySeries, title: "Comedy series", isLarge: true },
        { URL: fetchURLS.crimeSeries, title: "Crime series", isLarge: true },
        { URL: fetchURLS.documentarySeries, title: "Documentary series", isLarge: true },
        { URL: fetchURLS.dramaSeries, title: "Drama series", isLarge: true },
        { URL: fetchURLS.sciFiFantasySeries, title: "Fantasy series", isLarge: true },
        { URL: fetchURLS.kidsSeries, title: "Kids series" },
        { URL: fetchURLS.realitySeries, title: "Reality series" },
        { URL: fetchURLS.mysterySeries, title: "Mystery series", isLarge: true },
        { URL: fetchURLS.warPoliticsSeries, title: "Series of war", isLarge: true },
    ], [fetchURLS]);

    const [visibleCarousels, setVisibleCarousels] = useState(1);
    const loadMoreRef = useRef(null);

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
            <Banner itemId={featuredSerie?.id} type='serie' />
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
