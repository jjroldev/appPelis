import { useEffect } from 'react';
import CardMovie from '../CardMovie/CardMovie';
import { NavBar } from '../NavBar/NavBar';
import { Movie } from '../../interface/Movie';
import "./MiLista.css"
import { useAuth } from '../../context/AuthContext';
import { removeFavoriteToProfile } from '../../firebase';
import { useQuery } from 'react-query';
import { getFavoritesByProfile } from '../../firebase';
import { useQueryClient } from "react-query";
import { useSearch } from '../../context/SearchContext';
export default function MiLista() {
  const { currentUser, currentPerfil } = useAuth()
  const queryClient = useQueryClient();
  const { data: movies, isLoading } = useQuery<Movie[]>(
    `favorites-${currentUser?.id}-${currentPerfil?.id}`,
    () => getFavoritesByProfile(currentUser?.id, currentPerfil?.id),
    {
      enabled: !!currentUser?.id && !!currentPerfil?.id,
    }
  );
  const {setSearchTerm}=useSearch()

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "instant" });
    setSearchTerm("")
}, []);
  const handleRemoveFavorite = async (movie: Movie) => {
    await removeFavoriteToProfile(currentUser?.id, currentPerfil?.id, movie);
    await queryClient.invalidateQueries(`favorites-${currentUser?.id}-${currentPerfil?.id}`);
  };


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
