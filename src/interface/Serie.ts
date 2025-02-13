import { CastMember, Genre } from "./Movie";
import { Logo } from "./Logo";
import { Trailer } from "./Trailer";
export interface Serie {
    id: string;
    name: string;
    numberOfSeasons: number;
    numberOfEpisodes: number;
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
}

export interface Episode {
    air_date: string;
    crew: CastMember[];
    name: string;
    overview: string;
    runtime: number;
    season_number: number;
    vote_average: number;
    still_path: string;
}
