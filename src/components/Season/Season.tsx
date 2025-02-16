import './Season.css';
import { useQuery } from 'react-query';
import { Season } from '../../interface/Serie';
import { fetchData } from '../../utils/fetchData';
import { getSeasonDetailsURL } from '../../utils/endPoints';
import { useLanguage } from '../../context/LanguageContext';
import { useState, useCallback, useMemo } from 'react';
import { useRefVisible } from '../../hooks/useRef';
import EpisodeC from '../../components/Episode/Episode';
import EpisodeSkeleton from '../../components/Episode/EpidoseSkeleton';
interface SeasonProps {
    seriesId: string | undefined;
    numeroTemporadas: number | undefined;
}

export default function SeasonC({ seriesId, numeroTemporadas }: SeasonProps) {
    const { language } = useLanguage();
    const [numSeason, setNumSeason] = useState<number>(1);
    const [visibleEpisodes, setVisibleEpisodes] = useState<number>(8);

    const { data: season, isLoading } = useQuery<Season>(
        `seasons-${seriesId}-${numSeason}`,
        () => fetchData(getSeasonDetailsURL(seriesId, numSeason, language))
    );

    const visibleEpisodesList = useMemo(() => {
        return season ? season.episodes.slice(0, visibleEpisodes) : [];
    }, [season, visibleEpisodes]);

    const loadMoreEpisodes = useCallback(() => {
        if (season && visibleEpisodes < season.episodes.length) {
            setVisibleEpisodes((prev) => Math.min(prev + 8, season.episodes.length));
        }
    }, [season, visibleEpisodes]);

    const loadMoreRef = useRefVisible(loadMoreEpisodes);

    return (
        <div className='containerSeason'>
            <div className="contenedorSeleccionSeason">
                <select onChange={(e) => {
                    setNumSeason(Number(e.target.value));
                    setTimeout(() => setVisibleEpisodes(8), 0);
                }}>
                    {numeroTemporadas && [...Array(numeroTemporadas)].map((_, index) => (
                        <option key={index} value={index + 1}>Temporada {index + 1}</option>
                    ))}
                </select>
            </div>
            <div className='contenedorEpisodios'>
                {isLoading ? (
                    <>
                        <EpisodeSkeleton />
                        <EpisodeSkeleton />
                        <EpisodeSkeleton />
                    </>
                ) : (
                    visibleEpisodesList.map((episode, index) => (
                        <EpisodeC key={index} episode={episode} />
                    ))
                )}
                <div ref={loadMoreRef} style={{ height: '50px', margin: '20px 0' }}></div>
            </div>
        </div>
    );
}
