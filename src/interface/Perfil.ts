import { Movie } from "./Movie";
export interface Perfil{
    id:string,
    name:string,
    favoritesMovies?:Movie[],
    imagen:string,
    type: string
}