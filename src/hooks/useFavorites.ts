import { useQuery, useQueryClient } from "react-query";
import { addFavoriteToProfile, getFavoritesByProfile } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { Movie } from "../interface/Movie";
import { removeFavoriteToProfile } from "../firebase";
import { Serie } from "../interface/Serie";

export function useFavorites() {
  const { currentPerfil, currentUser } = useAuth();
  const queryClient = useQueryClient();

  const { data: favorites } = useQuery<Movie[]|Serie[]>(
    `favorites-${currentUser?.id}-${currentPerfil?.id}`,
    () => getFavoritesByProfile(currentUser?.id, currentPerfil?.id),
    { enabled: !!currentUser?.id && !!currentPerfil?.id }
  );

  const handleAddFavorite = async (item: Movie | undefined | Serie) => {
    await addFavoriteToProfile(currentUser?.id, currentPerfil?.id, item);
    await queryClient.invalidateQueries(
      `favorites-${currentUser?.id}-${currentPerfil?.id}`
    );
  };

  const handleRemoveFavorite = async (item: Movie | Serie) => {
    await removeFavoriteToProfile(currentUser?.id, currentPerfil?.id, item);
    await queryClient.invalidateQueries(`favorites-${currentUser?.id}-${currentPerfil?.id}`);
  };

  return { favorites, handleAddFavorite,handleRemoveFavorite };
}
