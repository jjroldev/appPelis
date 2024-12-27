import { useState, useEffect } from "react";
import { Movie } from "../interface/Movie";
export const useFetchMovies = (url: string) => {
    const [movies, setMovies] = useState<Movie[]>([]);

    const fetchMovies = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setMovies(data.results);
        } catch (err) {
            console.error('error');
        }
    };

    useEffect(() => {
        fetchMovies();
    }, [url]);

    return { movies, fetchMovies };
};
