import { useQuery, useQueryClient } from "react-query";
import { addFavoriteToProfile, getFavoritesByProfile } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { Movie } from "../interface/Movie";
import { removeFavoriteToProfile } from "../firebase";

export function useFavorites() {
  const { currentPerfil, currentUser } = useAuth();
  const queryClient = useQueryClient();

  const { data: favorites } = useQuery<Movie[]>(
    `favorites-${currentUser?.id}-${currentPerfil?.id}`,
    () => getFavoritesByProfile(currentUser?.id, currentPerfil?.id),
    { enabled: !!currentUser?.id && !!currentPerfil?.id }
  );

  const handleAddFavorite = async (movie: Movie | undefined) => {
    await addFavoriteToProfile(currentUser?.id, currentPerfil?.id, movie);
    await queryClient.invalidateQueries(
      `favorites-${currentUser?.id}-${currentPerfil?.id}`
    );
  };

  const handleRemoveFavorite = async (movie: Movie) => {
    await removeFavoriteToProfile(currentUser?.id, currentPerfil?.id, movie);
    await queryClient.invalidateQueries(`favorites-${currentUser?.id}-${currentPerfil?.id}`);
  };

  return { favorites, handleAddFavorite,handleRemoveFavorite };
}
