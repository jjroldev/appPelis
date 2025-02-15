import { CastMember, Genre } from "./Movie";
import { Logo } from "./Logo";
import { Trailer } from "./Trailer";
import { BelongsCollection } from "./Movie";
export interface Serie {
    id: string;
    belongs_to_collection: BelongsCollection | null
    name: string;
    number_of_seasons: number;
    number_of_episodes: number;
    overview: string;
    backdrop_path: string;
    poster_path: string;
    genres: Genre[];
    vote_average: number;
    first_air_date: string;
    created_by: Creator[];
    images: {
        backdrops: Logo[];
        posters: Logo[];
        logos: Logo[];
    };
    videos: {
        results: Trailer[];
    };
    credits: {
        cast: CastMember[];
        crew: CastMember[];
    };
}

interface Creator {
    id: string;
    credit_id: string;
    name: string;
    profile_path: string
}

export interface Season {
    id: string;
    air_date: string;
    crew: CastMember[];
    name: string;
    poster_path: string;
    season_number: number;
    vote_average: number;
    episodes:Episode[]
}

export interface Episode {
    id:string;
    air_date: string;
    crew: CastMember[];
    name: string;
    overview: string;
    episode_number:number;
    runtime: number;
    season_number: number;
    vote_average: number;
    images: {
        backdrops: Logo[];
        posters: Logo[];
        logos: Logo[];
    };
    still_path: string;
}
