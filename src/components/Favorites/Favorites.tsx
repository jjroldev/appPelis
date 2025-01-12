import './Favorites.css'
import { getFetchURLs } from '../../utils/endPoints'
import { useFetchMovies } from '../../hooks/useFetchMovies'
import CardMovie from '../CardMovie/CardMovie'
import { NavBar } from '../NavBar/NavBar'
import { useLanguage } from '../../context/LanguageContext'
export default function Favorites() {
    const {language}=useLanguage();
    const fetchURLS = getFetchURLs(language)
    const { movies } = useFetchMovies(fetchURLS[0].actionMovies, 3) //prueba porque falta el usuario
    return (
        <div className="favorites">
            <NavBar logoBuscar={true}/>
            <div className='contenedorFavoritas flex flex-col'>
                <h2 className='tituloFavoritas'>Mi Lista</h2>
                <div className='favoritasContainer'>
                    {movies.length > 0 ? (
                        movies.map((movie) => (
                            <CardMovie key={movie.id} movie={movie} isLarge={true}/> //prueba
                        ))
                    ) : (
                        <p>No hay películas favoritas</p>
                    )}
                </div>
            </div>
        </div>
    )
}