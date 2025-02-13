import { useFeaturedMovie } from '../../hooks/useFeaturedMovie'
import { Banner } from '../Banner/Banner'
import { useLanguage } from '../../context/LanguageContext'
import { useMemo } from 'react'
import { getFetchSeriesURLs} from '../../utils/endPoints'
import '../Home/Home.css'
import './SeriesWindow.css'
import CarouselURL from '../CarouselURL/CarouselURL'
export default function SeriesWindow() {

    const featuredSerie = useFeaturedMovie("feautedSerieSW", "seriesW","serie")
    const { language } = useLanguage()
    const fetchURLS = useMemo(() => getFetchSeriesURLs(language), [language]);

    return (
        <div className="contenedorWindow">
            <Banner itemId={featuredSerie?.id} logoBuscar={true} type='serie'/>
            <div className="contenedorItems">
                <CarouselURL
                    URL={fetchURLS.popularSeries}
                    title="Popular Series"
                />
                <CarouselURL
                    URL={fetchURLS.topRatedSeries}
                    title="Best Voted"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.actionAdventureSeries}
                    title="Movies of action and adventure"
                />
                <CarouselURL
                    URL={fetchURLS.familySeries}
                    title="Series for watch family"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.animationSeries}
                    title="Animation series"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.comedySeries}
                    title="Comedy series"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.crimeSeries}
                    title="Crime series"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.documentarySeries}
                    title="Documentary series"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.dramaSeries}
                    title="Drama series"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.sciFiFantasySeries}
                    title="Fantasy series"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.kidsSeries}
                    title="Kids series"
                />
                <CarouselURL
                    URL={fetchURLS.realitySeries}
                    title="Reality series"
                />
                <CarouselURL
                    URL={fetchURLS.mysterySeries}
                    title="Mystey series"
                    isLarge
                />
                <CarouselURL
                    URL={fetchURLS.warPoliticsSeries}
                    title="Series of war"
                    isLarge
                />
            </div>
        </div>
    )
}