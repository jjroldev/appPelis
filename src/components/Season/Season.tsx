import './Season.css';
import { useQuery } from 'react-query';
import { Season, Serie } from '../../interface/Serie';
import { fetchData } from '../../utils/fetchData';
import { getSeasonDetailsURL } from '../../utils/endPoints';
import { useLanguage } from '../../context/LanguageContext';
import { useState, useEffect, useRef } from 'react';
import EpisodeC from '../../components/Episode/Episode';
import EpisodeSkeleton from '../../components/Episode/EpidoseSkeleton';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { getCertifiedReleaseItem } from '../../utils/helpers';

interface SeasonProps {
    series: Serie;
    numeroTemporadas: number | undefined;
}

export default function SeasonC({ series, numeroTemporadas }: SeasonProps) {
    const { language } = useLanguage();
    const width = useWindowWidth();
    const [numSeason, setNumSeason] = useState<number>(1);

    const { data: season } = useQuery<Season>(
        `seasons-${series.id}-${numSeason}`,
        () => fetchData(getSeasonDetailsURL(series.id, numSeason, language))
    );

    const [visibleEpisodes, setVisibleEpisodes] = useState<number>(5);
    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setVisibleEpisodes(5);
    }, [numSeason]);

    useEffect(() => {
        if (!season?.episodes) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisibleEpisodes((prev) => Math.min(prev + 8, season.episodes.length));
                }
            },
            { threshold: 0.5 }
        );

        const target = loadMoreRef.current;
        if (target) observer.observe(target);

        return () => {
            if (target) observer.unobserve(target);
        };
    }, [season?.episodes]);

    return (
        <div className={`containerSeason ${width >= 1260 && "CSSinMargin"}`}>
            <div className="contenedorSeleccionSeason">
                <div className="flex flex-row gap-7.5">
                    <h3 className='tituloSerie'>{series.name}
                    </h3>
                    {
                        getCertifiedReleaseItem(series) && (
                            <span className="edadParaPublico inline-block max-h-fit">{getCertifiedReleaseItem(series)}+</span>
                        )
                    }
                </div>
                <select onChange={(e) => setNumSeason(Number(e.target.value))}>
                    {numeroTemporadas && [...Array(numeroTemporadas)].map((_, index) => (
                        <option key={index} value={index + 1}>Temporada {index + 1}</option>
                    ))}
                </select>
            </div>
            <div className='contenedorEpisodios'>
                {!season?.episodes ? (
                    <>
                        <EpisodeSkeleton />
                        <EpisodeSkeleton />
                        <EpisodeSkeleton />
                    </>
                ) : (
                    <>
                        {season.episodes.slice(0, visibleEpisodes).map((episode, index) => (
                            <EpisodeC key={index} episode={episode} serie_backdrop={series.backdrop_path} />
                        ))}
                        {visibleEpisodes < season.episodes.length && (
                            <div ref={loadMoreRef} style={{ height: '20px', background: 'transparent' }} />
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
