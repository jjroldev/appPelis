import './Season.css';
import { useQuery } from 'react-query';
import { Season, Serie } from '../../interface/Serie';
import { fetchData } from '../../utils/fetchData';
import { getSeasonDetailsURL } from '../../utils/endPoints';
import { useLanguage } from '../../context/LanguageContext';
import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import EpisodeSkeleton from '../../components/Episode/EpidoseSkeleton';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { motion } from "framer-motion";
const EpisodeC = lazy(() => import('../Episode/Episode'))
interface SeasonProps {
    series: Serie;
    numeroTemporadas: number | undefined;
}

export default function SeasonC({ series, numeroTemporadas }: SeasonProps) {
    const { language } = useLanguage();
    const width = useWindowWidth();
    const [numSeason, setNumSeason] = useState<number>(1);

    const { data: season, isLoading } = useQuery<Season>(
        `seasons-${series.id}-${numSeason}`,
        () => fetchData(getSeasonDetailsURL(series.id, numSeason, language)), { enabled: series.number_of_seasons != 0 }
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

    if ((!series.number_of_seasons)) {
        return null
    }

    return (
        <div className={`containerSeason ${width >= 1260 && "CSSinMargin"}`}>
            <div className="contenedorSeleccionSeason gap-1">
                <h3 className='tituloSerie'>{series.name}</h3>
                <select onChange={(e) => setNumSeason(Number(e.target.value))}>
                    {numeroTemporadas && [...Array(numeroTemporadas)].map((_, index) => (
                        <option key={index} value={index + 1}>Temporada {index + 1}</option>
                    ))}
                </select>
            </div>
            <div className='contenedorEpisodios'>
                {!season || isLoading ? (
                    <>
                        <EpisodeSkeleton />
                        <EpisodeSkeleton />
                        <EpisodeSkeleton />
                    </>
                ) : season?.episodes?.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="w-full text-center">
                            <p className="overcoming text-center">overcoming...</p>
                        </div>
                    </motion.div>
                ) : (
                    <>
                        {season?.episodes?.slice(0, visibleEpisodes).map((episode, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                {
                                    episode && (
                                        <Suspense fallback={<></>}>
                                            <EpisodeC episode={episode} serie_backdrop={series.backdrop_path} />
                                        </Suspense>
                                    )
                                }
                            </motion.div>))}
                        {visibleEpisodes < season?.episodes?.length && (
                            <div ref={loadMoreRef} style={{ height: '20px', background: 'transparent' }} />
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
