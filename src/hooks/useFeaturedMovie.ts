import { useState, useEffect, useMemo } from 'react';
import { Movie } from '../interface/Movie';
import { useQuery } from 'react-query';
import { useLanguage } from '../context/LanguageContext';
import { fetchData } from '../utils/fetchData';
import { getFetchSeriesURLs, getFetchURLs } from '../utils/endPoints';
import { Serie } from '../interface/Serie';
import { useAuth } from '../context/AuthContext';

export function useFeaturedMovie(nameItem: string, keyQuery: string, type: string): Movie | Serie | null {
    const { language } = useLanguage();
    const { currentPerfil } = useAuth();
    const fetchURLS = useMemo(() => getFetchURLs(language), [language]);
    const fetchSeriesURLS = useMemo(() => getFetchSeriesURLs(language), [language]);

    const { data: items, isLoading } = useQuery([keyQuery, language], () =>
        type === "movie" ? fetchData(fetchURLS.topRatedMovies) : fetchData(fetchSeriesURLS.topRatedSeries)
    );

    const [featuredItem, setFeaturedItem] = useState<Movie | Serie | null>(null);

    const validItems = useMemo(
        () => items?.results?.filter((item: Movie | Serie) => item.backdrop_path && item.overview) || [],
        [items]
    );

    useEffect(() => {
        if (!isLoading && validItems.length > 0 && currentPerfil) {
            const storedItemKey = `${nameItem}-${currentPerfil.id}`;
            const storedItem = sessionStorage.getItem(storedItemKey);

            if (storedItem) {
                setFeaturedItem(JSON.parse(storedItem));
            } else {
                const selectedItem = validItems[Math.floor(Math.random() * validItems.length)];
                setFeaturedItem(selectedItem);
                sessionStorage.setItem(storedItemKey, JSON.stringify(selectedItem));
            }
        }
    }, [validItems, isLoading, currentPerfil]);

    return featuredItem;
}
