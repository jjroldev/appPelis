import { useFeaturedMovie } from '../../hooks/useFeaturedMovie';
import { Banner } from '../../components/Banner/Banner';
import { useLanguage } from '../../context/LanguageContext';
import { useMemo, useEffect, useRef, useState } from 'react';
import { getFetchSeriesURLs } from '../../utils/endPoints';
import { useMenu } from '../../context/MenuContext';
import '../Home/Home.css';
import CarouselURL from '../../components/CarouselURL/CarouselURL';
import Loader from '../../components/Loader/Loader';

export default function SeriesWindow() {
    const featuredSerie = useFeaturedMovie("feautedSerieSW", "itemsBannerSeries", "serie");
    const { language } = useLanguage();
    const fetchURLS = useMemo(() => getFetchSeriesURLs(language), [language]);
    const { setOpenMenu } = useMenu();

    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: "instant" });
        setOpenMenu(false);
    }, []);

    const carousels = useMemo(() => [
        { URL: fetchURLS.popularSeries, title: "Popular Series" },
        { URL: fetchURLS.topRatedSeries, title: "Best Voted" },
        { URL: fetchURLS.actionAdventureSeries, title: "Series of action and adventure" },
        { URL: fetchURLS.familySeries, title: "Series for watch family" },
        { URL: fetchURLS.animationSeries, title: "Animation series",  },
        { URL: fetchURLS.comedySeries, title: "Comedy series",  },
        { URL: fetchURLS.crimeSeries, title: "Crime series",  },
        { URL: fetchURLS.documentarySeries, title: "Documentary series",  },
        { URL: fetchURLS.dramaSeries, title: "Drama series",  },
        { URL: fetchURLS.sciFiFantasySeries, title: "Fantasy series",  },
        { URL: fetchURLS.kidsSeries, title: "Kids series" },
        { URL: fetchURLS.realitySeries, title: "Reality series" },
        { URL: fetchURLS.mysterySeries, title: "Mystery series",  },
        { URL: fetchURLS.warPoliticsSeries, title: "Series of war",  },
    ], [fetchURLS]);

    const [visibleCarousels, setVisibleCarousels] = useState(5);
    const loadMoreRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisibleCarousels((prev) => Math.min(prev + 7, carousels.length));
                }
            },
            { rootMargin: "450px" }
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
                        <CarouselURL key={index} isLarge={true} URL={carousel.URL} title={carousel.title} />
                    ))}
                {visibleCarousels < carousels.length && (
                    <div ref={loadMoreRef} style={{ height: '200px', background: 'transparent' }} >
                        <Loader />
                    </div>
                )}
            </div>
        </div>
    );
}
