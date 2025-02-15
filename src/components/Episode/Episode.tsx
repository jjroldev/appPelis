import './Episode.css'
import { Episode } from '../../interface/Serie';
import { getSeriesImagesURL, URL_IMAGE_STILL } from '../../utils/endPoints';
import { useQuery } from 'react-query';
import { fetchData } from '../../utils/fetchData';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

interface EpisodeProps {
    episode: Episode
}

export default function EpisodeC({ episode }: EpisodeProps) {
    const { seriesId } = useParams();
    const [randomImageIndex, setRandomImageIndex] = useState<number | null>(null);

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
        : "";

    return (
        <div className='container-episode'>
            <div className='wrapper-img-episode'>
                {image_path ? (
                    <img src={URL_IMAGE_STILL + image_path} alt={episode.name} />
                ) : (
                    <div className="placeholder-img">No Image Available</div>
                )}
            </div>
            <div className="info-episode">
                <h4>S {episode.season_number} E {episode.episode_number} - {episode.name}</h4>
                <div className='flex flex-row detailsDate'>
                    {new Date(episode.air_date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                    <p>{formatRuntime(episode.runtime)}</p>
                </div>
                <p>{episode.overview}</p>
            </div>
            <div className="containerPlay">
                <i className="fa-solid fa-play"></i>
            </div>
        </div>
    );
}
