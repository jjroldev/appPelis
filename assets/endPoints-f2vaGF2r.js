const s="https://image.tmdb.org/t/p/w500",t="https://image.tmdb.org/t/p/w780",$="https://image.tmdb.org/t/p/original",v="https://image.tmdb.org/t/p/h632",a="https://image.tmdb.org/t/p/w500",i="https://api.themoviedb.org/3",r="http://127.0.0.1:3000",o="0a3e16dce99743d4f9bfa5036e67062b",_=e=>({popularMovies:`${i}/movie/popular?api_key=${o}&language=${e}`,topRatedMovies:`${i}/movie/top_rated?api_key=${o}&language=${e}`,upcomingMovies:`${i}/movie/upcoming?api_key=${o}&language=${e}`,discoverMovies:`${i}/discover/movie?api_key=${o}&language=${e}`,nowPlaying:`${i}/movie/now_playing?api_key=${o}&language=${e}`,actionMovies:`${i}/discover/movie?api_key=${o}&language=${e}&with_genres=28`,adventureMovies:`${i}/discover/movie?api_key=${o}&language=${e}&with_genres=12`,animationMovies:`${i}/discover/movie?api_key=${o}&language=${e}&with_genres=16`,comedyMovies:`${i}/discover/movie?api_key=${o}&language=${e}&with_genres=35`,crimeMovies:`${i}/discover/movie?api_key=${o}&language=${e}&with_genres=80`,documentaryMovies:`${i}/discover/movie?api_key=${o}&language=${e}&with_genres=99`,dramaMovies:`${i}/discover/movie?api_key=${o}&language=${e}&with_genres=18`,familyMovies:`${i}/discover/movie?api_key=${o}&language=${e}&with_genres=10751`,fantasyMovies:`${i}/discover/movie?api_key=${o}&language=${e}&with_genres=14`,historyMovies:`${i}/discover/movie?api_key=${o}&language=${e}&with_genres=36`,horrorMovies:`${i}/discover/movie?api_key=${o}&language=${e}&with_genres=27`,musicMovies:`${i}/discover/movie?api_key=${o}&language=${e}&with_genres=10402`,mysteryMovies:`${i}/discover/movie?api_key=${o}&language=${e}&with_genres=9648`,romanceMovies:`${i}/discover/movie?api_key=${o}&language=${e}&with_genres=10749`,scienceFictionMovies:`${i}/discover/movie?api_key=${o}&language=${e}&with_genres=878`,thrillerMovies:`${i}/discover/movie?api_key=${o}&language=${e}&with_genres=53`}),p=e=>({movieDetails:`${i}/movie/${e}?api_key=${o}&append_to_response=credits,images`,providers:`${i}/movie/${e}/watch/providers?api_key=${o}`,videos:`${i}/movie/${e}?api_key=${o}&append_to_response=videos`});export{o as A,r as B,v as U,i as a,p as b,$ as c,a as d,t as e,s as f,_ as g};
