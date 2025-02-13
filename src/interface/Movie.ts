import { Trailer } from "./Trailer";
import { Logo } from "./Logo";
export interface CastMember {
id: number;
name: string;
profile_path: string;
credit_id: string;
character?: string;
job?: string;
}

export interface Genre {
id: number;
name: string;
}

export interface ProductionCompany {
id: number;
logo_path: string | null;
name: string;
origin_country: string;
}

export interface ProductionCountry {
iso_3166_1: string;
name: string;
}

export interface SpokenLanguage {
iso_639_1: string;
name: string;
}

export interface Movie {
backdrop_path: string;
budget: number;
credits: {
  cast: CastMember[];
  crew: CastMember[];
};
genres: Genre[];
homepage: string;
id: string;
images: {
  backdrops: Logo[];
  posters: Logo[];
  logos: Logo[];
};
imdb_id: string;
origin_country: string[];
original_language: string;
original_title: string;
overview: string;
popularity: number;
poster_path: string;
production_companies: ProductionCompany[];
production_countries: ProductionCountry[];
release_date: string;
runtime: number;
spoken_languages: SpokenLanguage[];
title: string;
videos: {
  results: Trailer[];
};
vote_average: number;
vote_count: number;
}