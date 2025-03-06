export const URL_IMAGE_POSTER = "https://image.tmdb.org/t/p/w300";
export const URL_IMAGE_BACKDROP = "https://image.tmdb.org/t/p/w500";
export const URL_IMAGE_BACKDROPC = "https://image.tmdb.org/t/p/original";
export const URL_IMAGE_BANNER = "https://image.tmdb.org/t/p/original";
export const URL_IMAGE_PROFILE = "https://image.tmdb.org/t/p/h632";
export const URL_IMAGE_PROFILE_HD = "https://image.tmdb.org/t/p/h632";
export const URL_IMAGE_lOGO = "https://image.tmdb.org/t/p/w300";
export const URL_IMAGE_lOGO_HD = "https://image.tmdb.org/t/p/w500";
export const URL_IMAGE_STILL = "https://image.tmdb.org/t/p/w500";
export const BASE_URL = "https://api.themoviedb.org/3";
export const API_KEY = import.meta.env.VITE_API_KEY as string;
export const getFetchURLs = (language: string,page:number=1) => {
  return {
    popularMovies: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=${language}&page=${page}`,
    topRatedMovies: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=${language}&page=${page}`,
    upcomingMovies: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=${language}&page=${page}`,
    discoverMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&page=${page}`,
    nowPlaying: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=${language}&page=${page}`,
    actionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=28&page=${page}`,
    adventureMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=12&page=${page}`,
    animationMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=16&page=${page}`,
    comedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=35&page=${page}`,
    crimeMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=80&page=${page}`,
    documentaryMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=99&page=${page}`,
    dramaMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=18&page=${page}`,
    familyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=10751&page=${page}`,
    fantasyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=14&page=${page}`,
    historyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=36&page=${page}`,
    horrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=page7&page=${page}`,
    musicMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=10402&page=${page}`,
    mysteryMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=9648&page=${page}`,
    romanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=10749&page=${page}`,
    scienceFictionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=878&page=${page}`,
    thrillerMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=53&page=${page}`,
  };
};

export const getFetchSeriesURLs = (language: string,page:number=1) => ({
  now_playing:`${BASE_URL}/tv/airing_today?api_key=${API_KEY}&language=${language}&page=${page}`,
  popularSeries: `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=${language}&page=${page}`,
    topRatedSeries: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=${language}&page=${page}`,
    upcomingSeries: `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=${language}&page=${page}`,
    airingToday: `${BASE_URL}/tv/airing_today?api_key=${API_KEY}&language=${language}&page=${page}`,
    actionAdventureSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=10759&page=${page}`,
    animationSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=16&page=${page}`,
    comedySeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=35&page=${page}`,
    crimeSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=80&page=${page}`,
    documentarySeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=99&page=${page}`,
    dramaSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=18&page=${page}`,
    familySeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=10751&page=${page}`,
    kidsSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=10762&page=${page}`,
    mysterySeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=9648&page=${page}`,
    newsSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=10763&page=${page}`,
    realitySeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=10764&page=${page}`,
    sciFiFantasySeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=10765&page=${page}`,
    soapSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=10766&page=${page}`,
    talkSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=10767&page=${page}`,
    warPoliticsSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=10768&page=${page}`,
    westernSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=37&page=${page}`,
});


export const getURLMovieDetails=(id:string|undefined|null,language:string|undefined,page:number=1)=>({
  movieDetails:`${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits,images,release_dates&language=${language}`,
  providers: `${BASE_URL}/movie/${id}/watch/providers?api_key=${API_KEY}`,
  similar:`${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}&language=${language}&page=${page}`
})

export const getMovieImagesURL =(movieId: string | null |undefined)=> 
  `${BASE_URL}/movie/${movieId}/images?api_key=${API_KEY}`;

export const getSeriesDetailsURL = (seriesId: string | null |undefined,language:string |undefined) => 
  `${BASE_URL}/tv/${seriesId}?api_key=${API_KEY}&append_to_response=videos,credits,images,content_ratings&language=${language}`;

export const getImagesEpisode=(series_id:string |undefined,season_number:number,episode_number:number)=>
  `${BASE_URL}/tv/${series_id}/season/${season_number}/episode/${episode_number}/images?api_key=${API_KEY}`

export const getImagesSeason = (series_id: string | undefined, season_number: number) =>
  `${BASE_URL}/tv/${series_id}/season/${season_number}/images?api_key=${API_KEY}`;


export const getSeasonDetailsURL = (seriesId: string | null |undefined, seasonNumber: number, language: string) => 
  `${BASE_URL}/tv/${seriesId}/season/${seasonNumber}?api_key=${API_KEY}&language=${language}`;


export const getEpisodeDetailsURL = (seriesId: string | null |undefined, seasonNumber: number, episodeNumber: number, language: string) => 
  `${BASE_URL}/tv/${seriesId}/season/${seasonNumber}/episode/${episodeNumber}?api_key=${API_KEY}&language=${language}`;


export const getSeriesCreditsURL = (seriesId: string | null |undefined, language: string) => 
  `${BASE_URL}/tv/${seriesId}/credits?api_key=${API_KEY}&language=${language}`;


export const getSimilarSeriesURL = (seriesId: string | null |undefined, language: string,page:number=1) => 
  `${BASE_URL}/tv/${seriesId}/similar?api_key=${API_KEY}&language=${language}&page=${page}`;


export const getSeriesImagesURL =(seriesId: string | null |undefined)=> 
  `${BASE_URL}/tv/${seriesId}/images?api_key=${API_KEY}`;

export const getSeriesVideosURL = (seriesId:string | null |undefined,language:string|undefined)=>
  `${BASE_URL}/tv/${seriesId}/videos?api_key=${API_KEY}&language=${language}`


export const getCollectionDetailsURL = (collectionId: string | undefined, language: string| undefined) =>
  `${BASE_URL}/collection/${collectionId}?api_key=${API_KEY}&language=${language}`;


export const getVideosEpisodeURL = (series_id:string | undefined,season_number:number,episode_number:number,language:string|undefined)=>{
  return `${BASE_URL}/tv/${series_id}/season/${season_number}/episode/${episode_number}/videos?api_key=${API_KEY}&language=${language}`
}


export const getURLItemsOfActor=(ACTOR_ID:string | undefined,language:string|undefined)=>
  `${BASE_URL}/person/${ACTOR_ID}/combined_credits?api_key=${API_KEY}&language=${language}`



export const getURLMoviesOfActor=(ACTOR_ID:string | undefined,language:string|undefined)=>
  `${BASE_URL}/person/${ACTOR_ID}/movie_credits?api_key=${API_KEY}&language=${language}`

export const getURLDetailsOfActor = (actorId: string | undefined, language: string) => 
  `${BASE_URL}/person/${actorId}?api_key=${API_KEY}&append_to_response=combined_credits&language=${language}`

export const getURLSearchActors=(nameActor:string| undefined,language:string)=>
  `${BASE_URL}/search/person?api_key=${API_KEY}&query=${nameActor}&language=${language}`

export const getURLPopularActors = (language: string) =>
  `${BASE_URL}/person/popular?api_key=${API_KEY}&language=${language}`;

