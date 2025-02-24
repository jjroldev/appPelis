import { lazy, useMemo } from 'react'
import './ItemsActor.css'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { fetchData } from '../../utils/fetchData'
import { getURLItemsOfActor } from '../../utils/endPoints'
import { Movie } from '../../interface/Movie'
import { Serie } from '../../interface/Serie'
import Spinner from '../../components/Spinner/Spinner'
import CardItem from '../../components/CardItem/CardItem'
import { useLanguage } from '../../context/LanguageContext'
import { useEffect } from 'react'
import SectionActor from '../../components/SectionActor/SectionActor'
const BarMenu = lazy(() => import('../../components/BarMenu/BarMenu'))
export default function ItemsActor() {
    const { actorId } = useParams()
    const { language } = useLanguage()
    const { data: results, isLoading } = useQuery(`movies-${actorId}`,
        () => fetchData(getURLItemsOfActor(actorId, language)), {
        refetchOnWindowFocus: false
    })

    const validResults = useMemo(() => {
        if (!results || !results.cast) return [];
        return results.cast.filter((movie: Movie | Serie) => movie.poster_path && movie.backdrop_path && movie.overview);
    }, [results])

    const validResultsCrew = useMemo(() => {
        if (!results || !results.cast) return [];
        return results.crew.filter((movie: Movie | Serie) => movie.poster_path && movie.backdrop_path && movie.overview);
    }, [results])

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);


    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className="containerItemsActor">
            <BarMenu />
            <div className="flex flex-col contenedorInformacionActor">
                <SectionActor actorId={actorId} />
                <div className={`contenedorItemsPosters ${validResults.length === 0 && validResultsCrew.length === 0 ? '!flex items-center justify-center' : ''}`}>
                    {validResults.map((movie: Movie | Serie, index: number) => (
                        <CardItem key={index} item={movie} isLarge={false} />
                    ))}

                    {validResultsCrew.map((movie: Movie | Serie, index: number) => (
                        <CardItem key={index} item={movie} isLarge={false} />
                    ))}

                    {
                        !isLoading && validResults.length === 0 && validResultsCrew.length === 0 && (
                            <p className='text-white w-full'>No hay películas o series de este actor</p>
                        )
                    }
                </div>

            </div>
        </div>
    )
}