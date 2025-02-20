import { Movie } from "./Movie";
export interface Perfil{
    id:string | undefined,
    name:string,
    favoritesMovies?:Movie[],
    imagen:string,
    type: string
}