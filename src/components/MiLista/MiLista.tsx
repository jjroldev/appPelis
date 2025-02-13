import { useEffect } from 'react';
import CardItem from '../CardItem/CardItem';
import { NavBar } from '../NavBar/NavBar';
import { Movie } from '../../interface/Movie';
import "./MiLista.css"
import { useAuth } from '../../context/AuthContext';
import { useQuery } from 'react-query';
import { getFavoritesByProfile } from '../../firebase';
import { useSearch } from '../../context/SearchContext';
import { useMenu } from '../../context/MenuContext';
import { useFavorites } from '../../hooks/useFavorites';
import { Serie } from '../../interface/Serie';
export default function MiLista() {
  const { currentUser, currentPerfil } = useAuth()
  const { setSearchTerm } = useSearch()
  const{setOpenMenu}=useMenu()
  const {handleRemoveFavorite}=useFavorites()

  const { data: items, isLoading } = useQuery<Movie[] |Serie[]>(
    `favorites-${currentUser?.id}-${currentPerfil?.id}`,
    () => getFavoritesByProfile(currentUser?.id, currentPerfil?.id),
    {
      enabled: !!currentUser?.id && !!currentPerfil?.id,
    }
  );

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "instant" });
    setOpenMenu(false)
    setSearchTerm("")
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
          <div className={`favoritasContainer ${items?.length === 0 ? 'empty' : ''}`}>
            {!isLoading && (
              items?.map((item) => (
                <CardItem
                  key={item.id}
                  item={item}
                  isLarge={true}
                  doDelete={true}
                  onRemoveFavorite={handleRemoveFavorite}
                />
              ))
            )}

            {items?.length == 0 &&
              <div className="noFavorites">No hay favoritas</div>
            }
          </div>
        </div>

      </div>
    </>
  );
}
