import Carousel from 'react-bootstrap/Carousel';
import { useState, useRef } from 'react';
import YouTube, { YouTubeEvent } from 'react-youtube';
import useFetchMovieDetails from '../../hooks/useFecthMovieWithDetail';
import { Movie } from '../../interface/Movie';
import './CarouselBoostrap2.css';

export function CarouselBoostrap2({ movie }: { movie: Movie }) {
    const { movie: movieWithImages } = useFetchMovieDetails(movie.id,"en");
    const [activeIndex, setActiveIndex] = useState(0);
    const videoRefs = useRef<{ [key: string]: any }>({});

    const handleSlide = (selectedIndex: number) => {
        if (videoRefs.current[activeIndex]) {
            videoRefs.current[activeIndex].pauseVideo();
        }
        setActiveIndex(selectedIndex);
    };

    return (
        <div className="carousel-bootstrap">
            <Carousel onSelect={handleSlide} interval={null}>
                {movieWithImages?.videos.results.map((video, index) => (
                    <Carousel.Item key={video.key}>
                        <div
                            style={{
                                aspectRatio: "16/9",
                            }}
                        >
                            <YouTube
                                videoId={video.key}
                                opts={{
                                    width: "100%",
                                    height: "100%",
                                    playerVars: {
                                        autoplay: index === activeIndex ? 1 : 0,
                                        controls: 1,
                                        modestbranding: 1,
                                        rel: 0,
                                    },
                                }}
                                onReady={(event:YouTubeEvent) => {
                                    videoRefs.current[index] = event.target;
                                }}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}
