import './Buscar.css';
import { BASE_URL, getFetchURLs } from '../../utils/endPoints';
import CardMovie from '../CardMovie/CardMovie';
import { Movie } from '../../interface/Movie';
import { NavBar } from '../NavBar/NavBar';
import { useEffect, useMemo, useState, useCallback } from 'react';
import { useSearch } from '../../context/SearchContext';
import { useNavigate } from 'react-router-dom';
import { API_KEY } from '../../utils/endPoints';
import { useLanguage } from '../../context/LanguageContext';
import { useQuery, useQueryClient } from 'react-query';
import { fetchData } from '../../utils/fetchData';
import { addFavoriteToProfile } from '../../firebase';
import { getFavoritesByProfile } from '../../firebase';
import { useAuth } from '../../context/AuthContext';
import { useMenu } from '../../context/MenuContext';
import Lupa from '../Lupa/Lupa';
export default function Buscar() {

  const { searchTerm, setSearchTerm } = useSearch()
  const navigate = useNavigate()
  const { language } = useLanguage()
  const { currentPerfil, currentUser } = useAuth()
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "instant" });
  });
  const { setOpenMenu } = useMenu()

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  useEffect(() => {
    if (searchTerm === "" && width >= 900) {
      navigate("/home", { state: { fromBuscar: true } });
    }


  }, [searchTerm, width]);

  useEffect(() => {
    setOpenMenu(false);
  }, []);


  const queryClient = useQueryClient()


  const handleSearch = useCallback((value: string) => {
    if (value !== searchTerm) {
      setSearchTerm(value);
    }
  }, [searchTerm, setSearchTerm]);
  


  const { } = useQuery<Movie[]>(
    `favorites-${currentUser?.id}-${currentPerfil?.id}`,
    () => getFavoritesByProfile(currentUser?.id, currentPerfil?.id),
    {
      enabled: !!currentUser?.id && !!currentPerfil?.id,
    }
  );

  const handleAddFavorite = useCallback(async (movie: Movie | null) => {
    await addFavoriteToProfile(currentUser?.id, currentPerfil?.id, movie);
    await queryClient.invalidateQueries(`favorites-${currentUser?.id}-${currentPerfil?.id}`);
  }, [currentUser?.id, currentPerfil?.id, queryClient]);
  

  const fetchSearch = useMemo(() => {
    return searchTerm
      ? `${BASE_URL}/search/movie?api_key=${API_KEY}&language=${language}&query=${searchTerm}`
      : getFetchURLs(language).popularMovies;
  }, [searchTerm, language]);
  

  const { data: movies, isLoading } = useQuery(
    [searchTerm || "popularMovies"],
    () => fetchData(fetchSearch)
  );

  const validMovies = useMemo(() => {
    return movies?.results?.filter((movie: Movie) => movie.backdrop_path && movie.poster_path);
  }, [movies?.results]);


  if (isLoading) {
    return (
      <>
        <div className="contenedor">
          <NavBar logoBuscar={true} menu={true} perfil={true} condicionExpanded={true} />
        </div>
      </>
    )
  }

  const renderMovies = (movies: Movie[]) =>
    movies.map((movie, index) => <CardMovie key={index} movie={movie} onAddFavorite={() => handleAddFavorite(movie)} />);

  const renderContent = () => {
    if (validMovies.length > 0) {
      return <div className="contenedorPeliculasBuscar">{renderMovies(validMovies)}</div>;
    } else if (validMovies.length == 0) {
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
        {width < 900 && (
          <Lupa placeholder='Search Movies' onSubmit={handleSearch} />
        )}
        {renderContent()}
      </div>
    </div>
  );
}
