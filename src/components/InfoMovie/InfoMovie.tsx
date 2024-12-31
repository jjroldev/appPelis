import './InfoMovie.css'
import { useLocation } from 'react-router'
import { Banner } from '../Banner/Banner'
import { Movie } from '../../interface/Movie'
import Carousel from 'react-multi-carousel'
import { Card } from '../Card/Card'
import { useEffect } from 'react'
export default function InfoMovie() {
    const location = useLocation();
    const { movie, language }: { movie: Movie, language: string } = location.state;

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7,
            slidesToSlide: 6,
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
            slidesToSlide: 2,
        },
        mobile: {
            breakpoint: { max: 767, min: 464 },
            items: 2,
            slidesToSlide: 2,
        },
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='contenedorPrincipalMovie'>
            <Banner language={language} movie={movie} logoBuscar={true} isShort={false} isDetail={true} />
            <div className='infoMovieContainer'>
                {/* <h2>Más Información</h2> */}
                <div className='detallesInfo'>
                    {/* <h3>Overview</h3>
                    <p>{movie?.overview}</p>
                    <h3>Compañias</h3>
                    <div className='flex flex-row items-center justify-left'>
                        {movie?.production_companies.map((companie, index) => (companie.logo_path && <img className='logoCompanie' key={index} src={URL_IMAGE_lOGO + companie.logo_path}></img>))}
                    </div>
                    <h3>Votos</h3>
                    <p>{movie?.vote_count}</p>
                    <h3>Popularidad</h3>
                    <p>{movie?.popularity}</p>
                    <h3>Rated</h3>
                    <p>{movie?.vote_average.toFixed(1)}</p>
                    <h3>Cast</h3> */}
                    <div className='detallesReparto'>
                        <h2>Cast</h2>
                        <Carousel
                            swipeable={false}
                            draggable={false}
                            showDots={false}
                            responsive={responsive}
                            ssr={true}
                            infinite={true}
                            keyBoardControl={false}
                            containerClass="carousel-container"
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                            className="carousel-react"
                        >
                            {movie?.credits.cast.map((castM) => {
                                if (castM.profile_path) {
                                    return <Card key={castM.id} castMember={castM} />
                                }
                                return null
                            })}
                        </Carousel>
                    </div>
                    <div className='detallesReparto'>
                        <h2>Crew</h2>
                        <Carousel
                            swipeable={false}
                            draggable={false}
                            showDots={false}
                            responsive={responsive}
                            ssr={true}
                            infinite={true}
                            keyBoardControl={false}
                            containerClass="carousel-container"
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                            className="carousel-react"
                        >
                            {movie?.credits.crew.map((crewM) => {
                                if (crewM.profile_path) {
                                    return <Card key={crewM.id} castMember={crewM} isCrew={true}/>
                                }
                                return null
                            })}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}