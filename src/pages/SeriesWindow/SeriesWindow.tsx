import { useFeaturedMovie } from '../../hooks/useFeaturedMovie';
import { Banner } from '../../components/Banner/Banner';
import { useLanguage } from '../../context/LanguageContext';
import { useMemo, useEffect, useState } from 'react';
import { getFetchSeriesURLs } from '../../utils/endPoints';
import { useMenu } from '../../context/MenuContext';
import '../Home/Home.css';
import React from 'react';
import './SeriesWindow.css';
import CarouselURL from '../../components/CarouselURL/CarouselURL';
import { useSearch } from '../../context/SearchContext';
import { useRefVisible } from '../../hooks/useRef';
export default function SeriesWindow() {
    const featuredSerie = useFeaturedMovie("feautedSerieSW", "seriesW", "serie");
    const { language } = useLanguage();
    const fetchURLS = useMemo(() => getFetchSeriesURLs(language), [language]);
    const { setSearchTerm } = useSearch();
    const { setOpenMenu } = useMenu();
    const [visibleSections, setVisibleSections] = useState(5);

    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: "instant" });
        setSearchTerm("");
        setOpenMenu(false);
    }, []);

    const sections = useMemo(() => [
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
        { URL: fetchURLS.warPoliticsSeries, title: "Series of war", isLarge: true }
    ], [fetchURLS]);

    const observerRef = useRefVisible(() => {
        setVisibleSections((prev) => Math.min(prev + 5, sections.length));
    });

    return (
        <div className="contenedorWindow">
            <Banner itemId={featuredSerie?.id} logoBuscar={true} type='serie' />
            <div className="contenedorItems">
                {sections.slice(0, visibleSections).map((section, index) => (
                    <React.Fragment key={section.URL || index}>
                        {index === visibleSections - 2 && visibleSections < sections.length && (
                            <div ref={observerRef} style={{ height: "0px", margin: "20px 0" }}></div>
                        )}
                        <CarouselURL URL={section.URL} title={section.title} isLarge={section.isLarge} />
                    </React.Fragment>
                ))}

            </div>
        </div>
    );
}
