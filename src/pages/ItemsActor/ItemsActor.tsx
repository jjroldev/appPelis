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
import { useFavorites } from '../../hooks/useFavorites'
import { useLanguage } from '../../context/LanguageContext'

const BarMenu = lazy(() => import('../../components/BarMenu/BarMenu'))
export default function ItemsActor() {
    const { actorId } = useParams()
    const {language}=useLanguage()
    const { handleAddFavorite } = useFavorites()
    const { data: results, isLoading } = useQuery(`movies-${actorId}`,
        () => fetchData(getURLItemsOfActor(actorId,language)), {
        refetchOnWindowFocus: false
    })


    const validResults = useMemo(() => {
        if (!results || !results.cast) return [];
        return results.cast.filter((movie: Movie | Serie) => movie.poster_path && movie.backdrop_path && movie.overview);
    }, [results])
    

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className="containerItemsActor">
            <BarMenu />
            <div className="contenedorItemsPosters items-center justify-center">
                {validResults.map((movie: Movie | Serie) => (
                    <CardItem item={movie} isLarge={false} onAddFavorite={handleAddFavorite} />
                ))}
                {
                    !isLoading && !validResults.length && (
                        <p>No hay películas o series de este actor</p>
                    )
                }
            </div>
        </div>
    )
}