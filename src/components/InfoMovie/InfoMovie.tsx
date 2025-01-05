import './InfoMovie.css';
import { useLocation } from 'react-router';
import { Banner } from '../Banner/Banner';
import { Movie } from '../../interface/Movie';
import Carousel from 'react-multi-carousel';
import { Card } from '../Card/Card';
import { useEffect } from 'react';
import useFetchMovieDetails from '../../hooks/useFecthMovieWithDetail';

export default function InfoMovie() {
    const location = useLocation();
    const { movie: movie1, language }: { movie: Movie, language: string } = location.state;
    const { movie} = useFetchMovieDetails(movie1?.id, language);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1281 },
            items: 7,
            slidesToSlide: 6,
        },
        tablet: {
            breakpoint: { max: 1280, min: 769 },
            items: 6,
            slidesToSlide: 5,
        },
        mobileLarge: {
            breakpoint: { max: 768, min: 481 },
            items: 4,
            slidesToSlide: 3,
        },
        mobileSmall: {
            breakpoint: { max: 480, min: 0 },
            items: 2,
            slidesToSlide: 1,
        },
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!movie) {
        return <div className="w-screen h-screen bg-black"></div>;
    }

    return (
        <div className="contenedorPrincipalMovie">
            <Banner language={language} movie={movie} logoBuscar={true} isShort={false} isDetail={true} />
            {(movie.credits?.cast?.length > 0 || movie.credits?.crew?.length > 0) && (
                <div className="infoMovieContainer">
                    <div className="detallesInfo">
                        {movie.credits.cast?.length > 0 &&(
                            <div className="detallesReparto">
                                <h2>Cast</h2>
                                <Carousel
                                    swipeable={false}
                                    draggable={false}
                                    showDots={false}
                                    responsive={responsive}
                                    ssr={true}
                                    infinite={true}
                                    keyBoardControl={false}
                                    className='carousel-cast'
                                >
                                    {movie.credits.cast.map((castM) => {
                                        if (castM.profile_path) {
                                            return <Card key={castM.id} castMember={castM} />;
                                        }
                                        return null;
                                    })}
                                </Carousel>
                            </div>
                        )}
                        {movie.credits.crew?.length > 0 &&(
                            <div className="detallesReparto">
                                <h2>Crew</h2>
                                <Carousel
                                    swipeable={false}
                                    draggable={false}
                                    showDots={false}
                                    responsive={responsive}
                                    ssr={true}
                                    infinite={true}
                                    keyBoardControl={false}
                                    className="carousel-cast"
                                >
                                    {movie.credits.crew.map((crewM) => {
                                        if (crewM.profile_path) {
                                            return <Card key={crewM.id} castMember={crewM} isCrew={true} />;
                                        }
                                        return null;
                                    })}
                                </Carousel>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
