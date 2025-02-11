import { useEffect } from 'react';
import CardMovie from '../CardMovie/CardMovie';
import { NavBar } from '../NavBar/NavBar';
import { Movie } from '../../interface/Movie';
import "./MiLista.css"
import { useAuth } from '../../context/AuthContext';
import { useQuery } from 'react-query';
import { getFavoritesByProfile } from '../../firebase';
import { useSearch } from '../../context/SearchContext';
import { useMenu } from '../../context/MenuContext';
import { useFavorites } from '../../hooks/useFavorites';
export default function MiLista() {
  const { currentUser, currentPerfil } = useAuth()
  const { setSearchTerm } = useSearch()
  const{setOpenMenu}=useMenu()
  const {handleRemoveFavorite}=useFavorites()

  const { data: movies, isLoading } = useQuery<Movie[]>(
    `favorites-${currentUser?.id}-${currentPerfil?.id}`,
    () => getFavoritesByProfile(currentUser?.id, currentPerfil?.id),
    {
      enabled: !!currentUser?.id && !!currentPerfil?.id,
    }
  );

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "instant" });
    setSearchTerm("")
  }, []);

  useEffect(() => {
    setOpenMenu(false)
  }, []);


  if (isLoading) {
    return (
      <>
        <NavBar logoBuscar={true} menu={true} perfil={true} />
        <div className="favorites">
          <div className="contenedorFavoritas">
            <h2 className="tituloFavoritas">Mi Lista</h2>
            <div className={`favoritasContainerSpinner`}>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <NavBar logoBuscar={true} menu={true} perfil={true} />
      <div className="favorites">
        <h2 className="tituloFavoritas">Mi Lista</h2>
        <div className='contenedorFavoritas'>
          <div className={`favoritasContainer ${movies?.length === 0 ? 'empty' : ''}`}>
            {!isLoading && (
              movies?.map((movie) => (
                <CardMovie
                  key={movie.id}
                  movie={movie}
                  isLarge={true}
                  doDelete={true}
                  onRemoveFavorite={handleRemoveFavorite}
                />
              ))
            )}

            {movies?.length == 0 &&
              <div className="noFavorites">No hay películas favoritas</div>
            }
          </div>
        </div>

      </div>
    </>
  );
}
