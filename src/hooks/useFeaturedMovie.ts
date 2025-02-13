import { useState, useEffect, useMemo } from 'react';
import { Movie } from '../interface/Movie';
import { useQuery } from 'react-query';
import { useLanguage } from '../context/LanguageContext';
import { fetchData } from '../utils/fetchData';
import { getFetchSeriesURLs, getFetchURLs } from '../utils/endPoints';
import { Serie } from '../interface/Serie';
export function useFeaturedMovie(nameItem: string, keyQuery: string, type: string): Movie | Serie | null {
    const { language } = useLanguage()
    const fetchURLS = useMemo(() => getFetchURLs(language), [language]);
    const fetchSeriesURLS = useMemo(() => getFetchSeriesURLs(language), [language]);

    const { data: items, isLoading } = useQuery([keyQuery, language], () =>
        type == "movie" ? fetchData(fetchURLS.topRatedMovies) : fetchData(fetchSeriesURLS.topRatedSeries));

    const [featuredItem, setFeaturedItem] = useState<Movie | null>(null);

    const validItems = useMemo(() => items?.results?.filter((item: Movie | Serie) => item.backdrop_path && item.overview) || [], [items]);

    useEffect(() => {
        if (!isLoading && validItems.length > 0) {
            const storedItem = sessionStorage.getItem(nameItem);
            const selectedItem = storedItem
                ? JSON.parse(storedItem)
                : validItems[Math.floor(Math.random() * validItems.length)];
            setFeaturedItem(selectedItem);
            sessionStorage.setItem(nameItem, JSON.stringify(selectedItem));
        }
    }, [validItems, isLoading]);

    return featuredItem;
}
