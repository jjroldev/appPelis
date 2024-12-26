import { Banner } from "../Banner/Banner"
import { MovieSwiper } from "../MovieSwiper/MovieSwiper"
import { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "../../App";
import './Home.css'
interface Genre {
    id: number;
    name: string;
}

interface GenresResponse {
    genres: Genre[];
}


export function Home({language}:{language:string}) {
    const [genres, setGenres] = useState<Genre[]>([]);
    const fetchURLS = [{
        popularMovies: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=${language}`,
        topRatedMovies: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=${language}`,
        upcomingMovies: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=${language}`,
        discoverMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}`,
        nowPlaying: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=${language}`,
    }];
    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const storedGenres = localStorage.getItem(`genres_${language}`);
                if (storedGenres) {
                    setGenres(JSON.parse(storedGenres));
                    return;
                }

                const response = await fetch(
                    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=${language}`
                );
                const data: GenresResponse = await response.json();
                setGenres(data.genres);
            } catch (error) {
                console.error("Error fetching genres:", error);
            }
        };
        fetchGenres();
    }, [language]);

    return (
        <div className="contenedorHome">
            <Banner URL={fetchURLS[0].nowPlaying} language={language} logoBuscar={true}/>
            <div className="contenedorPeliculas">
                <MovieSwiper URL={fetchURLS[0].popularMovies} title={language === 'es' ? 'Populares' : 'Populars'} />
                <MovieSwiper URL={fetchURLS[0].topRatedMovies} title={language === 'es' ? 'Mejores Votadas' : 'Best Voted'} />
                <MovieSwiper URL={fetchURLS[0].upcomingMovies} title={language === 'es' ? "Próximamente" : 'Upcoming'} />
                {genres.map((genre) => (
                    <MovieSwiper
                        key={genre.id}
                        URL={`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&with_genres=${genre.id}`}
                        title={genre.name}
                    />
                ))}
            </div>
        </div>
    )
}