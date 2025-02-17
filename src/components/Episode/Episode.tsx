import './Episode.css'
import { Episode } from '../../interface/Serie';
import { getSeriesImagesURL, URL_IMAGE_STILL } from '../../utils/endPoints';
import { useQuery } from 'react-query';
import { fetchData } from '../../utils/fetchData';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useWindowWidth } from '../../hooks/useWindowWidth';

interface EpisodeProps {
    episode: Episode,
    serie_backdrop: string
}

export default function EpisodeC({ episode, serie_backdrop }: EpisodeProps) {
    const { seriesId } = useParams();
    const [randomImageIndex, setRandomImageIndex] = useState<number | null>(null);
    const width = useWindowWidth()
    const { data, isLoading } = useQuery(`images-${seriesId}`, () => fetchData(getSeriesImagesURL(seriesId)), {
        enabled: !!seriesId && episode.still_path == null,
        staleTime: 1000 * 60 * 30,
        cacheTime: 1000 * 60 * 30,
    });

    useEffect(() => {
        if (data?.backdrops?.length && randomImageIndex === null) {
            setRandomImageIndex(Math.floor(Math.random() * data.backdrops.length));
        }
    }, [data, randomImageIndex]);


    if (isLoading) return null;

    const formatRuntime = (minutes: number) => {
        if (!minutes) return null

        if (minutes < 60) {
            return `${minutes} min`;
        }
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return mins > 0 ? `${hours} h ${mins} min` : `${hours} h`;
    };

    const image_path = episode.still_path
        ? episode.still_path
        : data?.backdrops?.length && randomImageIndex !== null
            ? data.backdrops[randomImageIndex].file_path
            : serie_backdrop;

    return (
        <div className="flex flex-col containerEpisode">
            <div className='container-episode'>
                <div className='wrapper-img-episode'>
                    {image_path && (
                        <img src={URL_IMAGE_STILL + image_path || serie_backdrop} alt={episode.name} />
                    )}
                </div>
                <div className="info-episode">
                    <h4>{episode.episode_number}.  {episode.name}</h4>
                    <div className='flex flex-row detailsDate'>
                        {new Date(episode.air_date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                        {width > 990 && <p>{formatRuntime(episode.runtime)}</p>}
                    </div>
                    {width <=990 && <p>{formatRuntime(episode.runtime)}</p>}
                    {width > 990 && episode.overview &&
                        <p>{
                            episode.overview.length >= 300 ? (
                                episode.overview.slice(0, 300 + 1) + "..."
                            ) : (
                                episode.overview
                            )
                        }
                        </p>}
                </div>
                {
                    width > 580 && (
                        <div className="containerPlay">
                            <i className="fa-solid fa-play"></i>
                        </div>
                    )
                }
            </div>
            {
                width <= 990 && episode.overview && (
                    <div className='overViewEpisodeC'>
                        <p className='overViewEpisode'>
                            {
                                episode.overview.length >= 300 ? (
                                    episode.overview.slice(0, 300 + 1) + "..."
                                ) : (
                                    episode.overview
                                )
                            }
                        </p>
                    </div>
                )
            }
        </div>
    );
}
