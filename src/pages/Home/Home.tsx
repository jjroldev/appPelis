import { useEffect, useMemo, useState } from "react";
import { Banner } from "../../components/Banner/Banner";
import CarouselURL from "../../components/CarouselURL/CarouselURL";
import { useSearch } from "../../context/SearchContext";
import { useMenu } from "../../context/MenuContext";
import "./Home.css";
import { useFeaturedMovie } from "../../hooks/useFeaturedMovie";
import { getFetchSeriesURLs, getFetchURLs } from "../../utils/endPoints";
import { useLanguage } from "../../context/LanguageContext";
import { CarouselFavorites } from "../../components/CarouselFavorites/CarouselFavorites";
import { useRefVisible } from "../../hooks/useRef";
import React from "react";
export default function Home() {
    const { setSearchTerm } = useSearch();
    const { setOpenMenu } = useMenu();
    const { language } = useLanguage();
    const fetchURLS = useMemo(() => getFetchURLs(language), [language]);
    const fetchSeriesURLS = useMemo(() => getFetchSeriesURLs(language), [language]);
    const featuredMovie = useFeaturedMovie("feautedMovieHome", "moviesHome", "movie");

    const [visibleSections, setVisibleSections] = useState(5);

    const sections = useMemo(() => [
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
        { URL: fetchURLS.familyMovies, title: "Family Movies", isLarge: true },
        { URL: fetchURLS.fantasyMovies, title: "Fantasy Movies", isLarge: true },
        { URL: fetchURLS.historyMovies, title: "History Movies" },
        { URL: fetchURLS.horrorMovies, title: "Horror Movies" },
        { URL: fetchSeriesURLS.realitySeries, title: "Reality Series" },
        { URL: fetchURLS.musicMovies, title: "Music Movies", isLarge: true },
        { URL: fetchURLS.mysteryMovies, title: "Mystery Movies", isLarge: true },
        { URL: fetchSeriesURLS.mysterySeries, title: "Mystery Series", isLarge: true },
        { URL: fetchURLS.romanceMovies, title: "Romance Movies", isLarge: true },
        { URL: fetchURLS.scienceFictionMovies, title: "Science Fiction Movies", isLarge: true },
        { URL: fetchSeriesURLS.warPoliticsSeries, title: "War Series", isLarge: true },
        { URL: fetchURLS.thrillerMovies, title: "Thriller Movies", isLarge: true },
    ], [fetchURLS, fetchSeriesURLS]);

    useEffect(() => {
        setOpenMenu(false);
        setSearchTerm("");
    }, []);

    const loadMoreSections = () => {
        setVisibleSections((prev) => Math.min(prev + 5, sections.length));
    };

    const loadMoreRef = useRefVisible(() => {
        loadMoreSections();
    });

    return (
        <div className="contenedorWindow">
            <Banner itemId={featuredMovie?.id} logoBuscar={true} type="movie" />
            <div className="contenedorItems">
                <CarouselFavorites isLarge={true} title="My List" />

                {sections.slice(0, visibleSections).map((section, index) => (
                    <React.Fragment key={section.URL || index}>
                        {index === visibleSections - 2 && visibleSections < sections.length && (
                            <div ref={loadMoreRef} style={{ height: "100px", margin: "20px 0" }}></div>
                        )}
                        <CarouselURL URL={section.URL} title={section.title} isLarge={section.isLarge} />
                    </React.Fragment>
                ))}

            </div>
        </div>
    );
}
