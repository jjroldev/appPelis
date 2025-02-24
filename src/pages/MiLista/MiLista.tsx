import { useEffect, useState } from 'react';
import CardItem from '../../components/CardItem/CardItem';
import { Movie } from '../../interface/Movie';
import "./MiLista.css"
import { useAuth } from '../../context/AuthContext';
import { useQuery } from 'react-query';
import { getFavoritesByProfile } from '../../firebase';
import { useMenu } from '../../context/MenuContext';
import { useFavorites } from '../../hooks/useFavorites';
import { Serie } from '../../interface/Serie';
import BarMenu from '../../components/BarMenu/BarMenu';
export default function MiLista() {
  const { currentUser, currentPerfil } = useAuth()
  const { setOpenMenu } = useMenu()
  const { handleRemoveFavorite } = useFavorites()
  const [enabledEdit,setEnabledEdit]=useState(false)
  const { data: items, isLoading } = useQuery<Movie[] | Serie[]>(
    `favorites-${currentUser?.id}-${currentPerfil?.id}`,
    () => getFavoritesByProfile(currentUser?.id, currentPerfil?.id),
    {
      enabled: !!currentUser?.id && !!currentPerfil?.id,
    }
  );

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "instant" });
    setOpenMenu(false)
  }, []);


  if (isLoading) {
    return (
      <>
        <BarMenu />
        <div className="favorites">
          <div className="contenedorFavoritas">
            <h2 className="tituloFavoritas">{currentPerfil?.name.toUpperCase()}</h2>
            <div className={`favoritasContainerSpinner`}>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <BarMenu />
      <div className="favorites">
        <div className="contenedorTituloFavoritas flex justify-between">
          <h2 className="tituloFavoritas">{currentPerfil?.name.toUpperCase()}</h2>
          <span className="material-symbols-outlined" onClick={()=>setEnabledEdit(!enabledEdit)}>
            edit
          </span>
        </div>
        <div className='contenedorFavoritas'>
          <div className={`favoritasContainer ${items?.length === 0 ? 'empty' : ''}`}>
            {!isLoading && (
              items?.map((item) => (
                <CardItem
                  key={item.id}
                  item={item}
                  isLarge={true}
                  doDelete={enabledEdit}
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
