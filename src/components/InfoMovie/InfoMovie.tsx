import './InfoMovie.css';
import { useLocation } from 'react-router';
import { Banner } from '../Banner/Banner';
import 'react-multi-carousel/lib/styles.css';
import { Movie, MovieDetails } from '../../interface/Movie';
import Carousel from 'react-multi-carousel';
import { Card } from '../Card/Card';
import { useEffect } from 'react';
import { fetchData } from '../../utils/fetchData';
import { useQuery } from 'react-query';
import { getURLMovieDetails } from '../../utils/endPoints';
import { responsiveInfo } from '../../utils/ResponsiveCarrousel';
import CarouselBoostrap from '../CarouselBoostrap/CarouselBoostrap';
import { useSearch } from '../../context/SearchContext';
export default function InfoMovie() {
    const location = useLocation();
    const { movie: movie1 }: { movie: Movie } = location.state;
    const { data: movie, isLoading } = useQuery<MovieDetails>(`movieInfo-${movie1?.id}`,
        () => fetchData(getURLMovieDetails(movie1?.id).movieDetails
        ));

    const {setSearchTerm}=useSearch()    

    const renderCastMembers = (movie: MovieDetails) => {
        return movie.credits.cast.map((castM) => {
            if (castM.profile_path) {
                return <Card key={castM.id} castMember={castM} />;
            }
            return null;
        });
    };

    const renderCrewMembers = (movie: MovieDetails) => {
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
        window.scroll({ top: 0, left: 0, behavior: "instant" });
        setSearchTerm("")
    }, []);

    if (!movie || isLoading) {
        return <div className="w-screen h-screen cargandoInfo flex items-center justify-center">
            <div className="spinner"></div>
        </div>;
    }

    return (
        <div className="contenedorPrincipalMovie">
            <Banner movie={movie1} logoBuscar={true} isDetail={true} />
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
                            <CarouselBoostrap movie={movie} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}