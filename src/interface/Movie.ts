export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}


import { Trailer } from "./Trailer";
import { Logo } from "./Logo";
export interface CastMember {
adult: boolean;
gender: number;
id: number;
known_for_department: string;
name: string;
original_name: string;
popularity: number;
profile_path: string;
credit_id: string;
character?: string;
job?: string;
order?: number;
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

export interface MovieDetails {
adult: boolean;
backdrop_path: string;
budget: number;
credits: {
  cast: CastMember[];
  crew: CastMember[];
};
genres: Genre[];
homepage: string;
id: number;
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
revenue: number;
runtime: number;
spoken_languages: SpokenLanguage[];
status: string;
tagline: string;
title: string;
video: boolean;
videos: {
  results: Trailer[];
};
vote_average: number;
vote_count: number;
}