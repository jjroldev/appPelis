export const URL_IMAGE_POSTER = "https://image.tmdb.org/t/p/w300";
export const URL_IMAGE_BACKDROP = "https://image.tmdb.org/t/p/w500";
export const URL_IMAGE_BACKDROPC = "https://image.tmdb.org/t/p/w1280";
export const URL_IMAGE_BANNER = "https://image.tmdb.org/t/p/original";
export const URL_IMAGE_PROFILE = "https://image.tmdb.org/t/p/w185";
export const URL_IMAGE_lOGO = "https://image.tmdb.org/t/p/w500";
export const URL_IMAGE_STILL = "https://image.tmdb.org/t/p/w300";
export const BASE_URL = "https://api.themoviedb.org/3";
export const API_KEY = import.meta.env.VITE_API_KEY as string;
export const getFetchURLs = (language: string) => ({
  popularMovies: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=${language}`,
  topRatedMovies: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=${language}`,
  upcomingMovies: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=${language}`,
  discoverMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}`,
  nowPlaying: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=${language}`,
  actionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=28`,
  adventureMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=12`,
  animationMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=16`,
  comedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=35`,
  crimeMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=80`,
  documentaryMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=99`,
  dramaMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=18`,
  familyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=10751`,
  fantasyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=14`,
  historyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=36`,
  horrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=27`,
  musicMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=10402`,
  mysteryMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=9648`,
  romanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=10749`,
  scienceFictionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=878`,
  thrillerMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=53`,
});

export const getFetchSeriesURLs = (language: string) => ({
  popularSeries: `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=${language}`,
  topRatedSeries: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=${language}`,
  upcomingSeries: `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=${language}`,
  airingToday: `${BASE_URL}/tv/airing_today?api_key=${API_KEY}&language=${language}`,
  actionAdventureSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=10759`,
  animationSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=16`,
  comedySeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=35`,
  crimeSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=80`,
  documentarySeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=99`,
  dramaSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=18`,
  familySeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=10751`,
  kidsSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=10762`,
  mysterySeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=9648`,
  newsSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=10763`,
  realitySeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=10764`,
  sciFiFantasySeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=10765`,
  soapSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=10766`,
  talkSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=10767`,
  warPoliticsSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=10768`,
  westernSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&with_genres=37`,
});


export const getURLMovieDetails=(id:string|undefined|null,language?:string|undefined)=>({
  movieDetails:`${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits,images,release_dates`,
  providers: `${BASE_URL}/movie/${id}/watch/providers?api_key=${API_KEY}`,
  similar:`${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}&language=${language}`
})

export const getMovieImagesURL =(movieId: string | null |undefined)=> 
  `${BASE_URL}/movie/${movieId}/images?api_key=${API_KEY}`;

export const getSeriesDetailsURL = (seriesId: string | null |undefined) => 
  `${BASE_URL}/tv/${seriesId}?api_key=${API_KEY}&append_to_response=videos,credits,images,content_ratings`;

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


export const getSimilarSeriesURL = (seriesId: string | null |undefined, language: string) => 
  `${BASE_URL}/tv/${seriesId}/similar?api_key=${API_KEY}&language=${language}`;


export const getSeriesImagesURL =(seriesId: string | null |undefined)=> 
  `${BASE_URL}/tv/${seriesId}/images?api_key=${API_KEY}&include_image_language=en,null`;

export const getSeriesVideosURL = (seriesId:string | null |undefined)=>
  `${BASE_URL}/tv/${seriesId}/videos?api_key=${API_KEY}&language=en`


export const getCollectionDetailsURL = (collectionId: string | undefined) =>
  `${BASE_URL}/collection/${collectionId}?api_key=${API_KEY}`;


export const getVideosEpisodeURL = (series_id:string | undefined,season_number:number,episode_number:number)=>{
  return `${BASE_URL}/tv/${series_id}/season/${season_number}/episode/${episode_number}/videos?api_key=${API_KEY}&language=en`
}