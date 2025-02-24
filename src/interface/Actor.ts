import { Movie } from "./Movie";
import { Serie } from "./Serie";

export interface Actor{
    id:string;
    biography:string;
    birthday:string;
    name:string;
    place_of_birth:string;
    profile_path:string;
    gender:number;
    known_for:Movie[] | Serie[] |undefined
}