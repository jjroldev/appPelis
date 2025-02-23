import './Episode.css'
import { Episode } from '../../interface/Serie';
import { getSeriesImagesURL, getVideosEpisodeURL, URL_IMAGE_STILL } from '../../utils/endPoints';
import { useQuery } from 'react-query';
import { fetchData } from '../../utils/fetchData';
import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { formatRuntime, getIdVideoEpisode } from '../../utils/helpers.tsx';
import { Videos } from '../../interface/VideosEpisode';
import toast from 'react-hot-toast';
import { useLanguage } from '../../context/LanguageContext.tsx';
interface EpisodeProps {
    episode: Episode,
    serie_backdrop: string
}

export default function EpisodeC({ episode, serie_backdrop }: EpisodeProps) {
    const { seriesId } = useParams();
    const [randomImageIndex, setRandomImageIndex] = useState<number | null>(null);
    const width = useWindowWidth()
    const navigate = useNavigate()
    const { language } = useLanguage()

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

    const { data: videos } = useQuery<Videos>(`videos-${episode.id}`, () =>
        fetchData(getVideosEpisodeURL(seriesId, episode.season_number, episode.episode_number, language)))

    if (isLoading) return null;

    const image_path = episode.still_path
        ? episode.still_path
        : data?.backdrops?.length && randomImageIndex !== null
            ? data?.backdrops[randomImageIndex]?.file_path
            : serie_backdrop;

    const handleOpen = () => {
        if (getIdVideoEpisode(videos)) {
            navigate(`/watch/${getIdVideoEpisode(videos)}`)
        } else {
            toast.error("No existe un trailer para este episodio")
        }
    }

    return (
        <div className="flex flex-col containerEpisode" onClick={handleOpen}>
            <div className='container-episode'>
                <div className='wrapper-img-episode relative'>
                    {image_path && (
                        <img src={URL_IMAGE_STILL + image_path || serie_backdrop} alt={episode.name} />
                    )}
                    <div className='containerPlayMobile absolute'>
                        <i className="fa-solid fa-play play-icon absolute" />
                    </div>
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
                    {width <= 990 && <p>{formatRuntime(episode.runtime)}</p>}
                    {width > 990 && episode.overview &&
                        <p>{
                            episode.overview.length >= (width > 600 ? 300 : 150) ? (
                                episode.overview.slice(0, (width > 600 ? 300 : 150) + 1) + "..."
                            ) : (
                                episode.overview
                            )
                        }
                        </p>}
                </div>

                <div className="containerDownload">
                    <span className="material-symbols-outlined">
                        download
                    </span>
                </div>


            </div>
            {
                width <= 990 && episode.overview && (
                    <div className='overViewEpisodeC'>
                        <p className='overViewEpisode'>
                            {
                                episode.overview.length >= (width > 600 ? 300 : 150) ? (
                                    episode.overview.slice(0, (width > 600 ? 300 : 150) + 1) + "..."
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
