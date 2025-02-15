import './MoviesWindow.css';
import { useFeaturedMovie } from '../../hooks/useFeaturedMovie';
import { Banner } from '../../components/Banner/Banner';
import CarouselURL from '../../components/CarouselURL/CarouselURL';
import { useLanguage } from '../../context/LanguageContext';
import { useEffect, useMemo, useState } from 'react';
import { getFetchURLs } from '../../utils/endPoints';
import '../Home/Home.css';
import { useMenu } from '../../context/MenuContext';
import { useSearch } from '../../context/SearchContext';
import { useRefVisible } from '../../hooks/useRef';
export default function MoviesWindow() {
    const featuredMovie = useFeaturedMovie("feautedMovieMW", "moviesW", "movie");
    const { language } = useLanguage();
    const fetchURLS = useMemo(() => getFetchURLs(language), [language]);
    const { setOpenMenu } = useMenu();
    const { setSearchTerm } = useSearch();
    const [visibleSections, setVisibleSections] = useState(5);

    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: "instant" });
        setSearchTerm("");
        setOpenMenu(false);
    }, []);

    const sections = useMemo(() => [
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

    const observerRef = useRefVisible(() => {
        setVisibleSections((prev) => Math.min(prev + 5, sections.length));
    });

    return (
        <div className="contenedorWindow">
            <Banner itemId={featuredMovie?.id} logoBuscar={true} type='movie' />
            <div className="contenedorItems">
                {sections.slice(0, visibleSections).map((section, index) => (
                    <>
                        {index === visibleSections - 2 && visibleSections < sections.length && (
                            <div ref={observerRef} style={{ height: "50px", margin: "20px 0" }}></div>
                        )}
                        <CarouselURL key={index} URL={section.URL} title={section.title} isLarge={section.isLarge} />
                    </>
                ))}
            </div>
        </div>
    );
}
