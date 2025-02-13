import './MoviesWindow.css'
import { useFeaturedMovie } from '../../hooks/useFeaturedMovie'
import { Banner } from '../Banner/Banner'
import CarouselURL from '../CarouselURL/CarouselURL'
import { useLanguage } from '../../context/LanguageContext'
import { useEffect, useMemo } from 'react'
import { getFetchURLs } from '../../utils/endPoints'
import '../Home/Home.css'
import { useMenu } from '../../context/MenuContext'
import { useSearch } from '../../context/SearchContext'
export default function MoviesWindow() {

    const featuredMovie = useFeaturedMovie("feautedMovieMW", "moviesW","movie")
    const { language } = useLanguage()
    const fetchURLS = useMemo(() => getFetchURLs(language), [language]);
    const {setOpenMenu}=useMenu()
    const {setSearchTerm}=useSearch()

    useEffect(()=>{
        window.scroll({ top: 0, left: 0, behavior: "instant" });
        setSearchTerm("")
        setOpenMenu(false)
    },[])

    return (
        <div className="contenedorWindow">
            <Banner itemId={featuredMovie?.id} logoBuscar={true} type='movie' />
            <div className="contenedorItems">
                <CarouselURL
                    URL={fetchURLS.popularMovies}
                    title="Popular Movies"
                />
                <CarouselURL
                    URL={fetchURLS.topRatedMovies}
                    title="Best Voted"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.actionMovies}
                    title="Movies of action"
                />
                <CarouselURL
                    URL={fetchURLS.adventureMovies}
                    title="Adventure on family"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.animationMovies}
                    title="Animation"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.comedyMovies}
                    title="Comedy"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.crimeMovies}
                    title="Crime"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.documentaryMovies}
                    title="Documentary"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.dramaMovies}
                    title="Drama"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.familyMovies}
                    title="Family"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.fantasyMovies}
                    title="Fantasy"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.historyMovies}
                    title="History"
                />
                <CarouselURL
                    URL={fetchURLS.horrorMovies}
                    title="Horror"
                />
                <CarouselURL
                    URL={fetchURLS.musicMovies}
                    title="Music"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.mysteryMovies}
                    title="Mystery"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.romanceMovies}
                    title="Romance"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.scienceFictionMovies}
                    title="Science Fiction"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.thrillerMovies}
                    title="Thriller"
                    isLarge
                />

            </div>
        </div>
    )
}