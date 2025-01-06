import './InfoMovie.css';
import { useLocation } from 'react-router';
import { Banner } from '../Banner/Banner';
import { Movie } from '../../interface/Movie';
import Carousel from 'react-multi-carousel';
import { Card } from '../Card/Card';
import { useEffect } from 'react';
import useFetchMovieDetails from '../../hooks/useFecthMovieWithDetail';
import { responsiveInfo } from '../../utils/ResponsiveCarrousel';
import { lazy } from 'react';
import { Suspense } from 'react';
import { useLanguage } from '../../context/LanguageContext';
const CarouselBoostrap = lazy(() => import('../CarouselBoostrap/CarouselBoostrap'));
export default function InfoMovie() {
    const location = useLocation();
    const { movie: movie1 }: { movie: Movie } = location.state;
    const { language } = useLanguage()
    const { movie } = useFetchMovieDetails(movie1?.id, language);

    const renderCastMembers = (movie: Movie) => {
        return movie.credits.cast.map((castM) => {
            if (castM.profile_path) {
                return <Card key={castM.id} castMember={castM} />;
            }
            return null;
        });
    };

    const renderCrewMembers = (movie: Movie) => {
        return movie.credits.crew.map((crewM) => {
            if (crewM.profile_path) {
                return <Card key={crewM.id} castMember={crewM} isCrew={true} />;
            }
            return null;
        });
    };


    const CarouselCredits = ({ renderCredits, title }: { renderCredits: React.ReactNode, title: string }) => {
        return <div className="detallesReparto">
            <h2>{title}</h2>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsiveInfo}
                ssr={true}
                infinite={true}
                keyBoardControl={false}
                className="carousel-cast"
            >
                {renderCredits}
            </Carousel>
        </div>
    }


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!movie) {
        return <div className="w-screen h-screen bg-black"></div>;
    }

    return (
        <div className="contenedorPrincipalMovie">
            <Banner movie={movie} logoBuscar={true} isShort={false} isDetail={true} />
            {(movie.credits?.cast?.length > 0 || movie.credits?.crew?.length > 0) && (
                <div className="infoMovieContainer">
                    <div className="detallesInfo">
                        {movie.credits.cast?.length > 0 && (
                            <>
                                <CarouselCredits renderCredits={renderCastMembers(movie)} title='CAST' />
                            </>
                        )}
                        {movie.credits.crew?.length > 0 && (
                            <>
                                <CarouselCredits renderCredits={renderCrewMembers(movie)} title='CREW' />
                            </>
                        )}
                    </div>
                    <div className='contenedor-imagenes'>
                        <div className='flex flex-col backdropss'>
                            <h2>Backdrops</h2>
                            <Suspense
                                fallback={
                                    <div
                                        style={{
                                            textAlign: 'center',
                                            padding: '2rem',
                                            fontSize: '1.2rem',
                                        }}
                                    >
                                        Cargando...
                                    </div>
                                }
                            >
                                <CarouselBoostrap movie={movie}/>
                            </Suspense>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
