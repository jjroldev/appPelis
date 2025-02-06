import './Buscar.css';
import { BASE_URL } from '../../utils/endPoints';
import CardMovie from '../CardMovie/CardMovie';
import { Movie } from '../../interface/Movie';
import { NavBar } from '../NavBar/NavBar';
import { useEffect, useMemo } from 'react';
import { useSearch } from '../../context/SearchContext';
import { useNavigate } from 'react-router-dom';
import { API_KEY } from '../../utils/endPoints';
import { useLanguage } from '../../context/LanguageContext';
import { useQuery, useQueryClient } from 'react-query';
import { fetchData } from '../../utils/fetchData';
import { addFavoriteToProfile } from '../../firebase';
import { getFavoritesByProfile } from '../../firebase';
import { useAuth } from '../../context/AuthContext';
import Spinner from '../Spinner/Spinner';
export default function Buscar() {

  const { searchTerm } = useSearch()
  const navigate = useNavigate()
  const { language } = useLanguage()
  const {currentPerfil,currentUser}=useAuth()
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "instant" });
  }, []);


  useEffect(() => {
    if (searchTerm === "") {
      navigate("/home", { state: { fromBuscar: true } });
    }
  }, [searchTerm]);

  const queryClient=useQueryClient()

  const {  } = useQuery<Movie[]>(
    `favorites-${currentUser?.id}-${currentPerfil?.id}`,
    () => getFavoritesByProfile(currentUser?.id, currentPerfil?.id),
    {
        enabled: !!currentUser?.id && !!currentPerfil?.id,
    }
);

  const handleAddFavorite = async (movie: Movie | null) => {
    await addFavoriteToProfile(currentUser?.id, currentPerfil?.id, movie);
    await queryClient.invalidateQueries(`favorites-${currentUser?.id}-${currentPerfil?.id}`);
};

  const fetchSearch = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=${language}&query=${searchTerm}`;

  const { data: movies, isLoading } = useQuery([searchTerm, URL], () => fetchData(fetchSearch), { refetchOnWindowFocus: false, });

  const validMovies = useMemo(() => {
    return movies?.results?.filter((movie: Movie) => movie.backdrop_path && movie.poster_path)
  }, [movies?.results])

  if (isLoading) {
    return (
      <>
        <NavBar logoBuscar={true} menu={true} perfil={true} condicionExpanded={true} />
        <Spinner />
      </>
    )
  }

  const renderMovies = (movies: Movie[]) =>
    movies.map((movie, index) => <CardMovie key={index} movie={movie} onAddFavorite={()=>handleAddFavorite(movie)}/>);

  const renderContent = () => {
    if (validMovies.length > 0) {
      return <div className="contenedorPeliculasBuscar">{renderMovies(validMovies)}</div>;
    } else if (searchTerm && movies.length == 0) {
      return (
        <>
          <div className='contenedorPeliculasNoE'>
            <p>La busqueda de {searchTerm} no arrrojó coincidencias.</p>
          </div>
        </>
      )
    };
  }

  return (
    <div className="contenedor">
      <NavBar perfil={true} menu={true} logoBuscar={true} condicionExpanded={true} />
      <div className="contenedorBuscar">
        {renderContent()}
      </div>
    </div>
  );
}
