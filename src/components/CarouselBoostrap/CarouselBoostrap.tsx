import Carousel from 'react-bootstrap/Carousel';
import { MovieDetails } from '../../interface/Movie';
import { lazy } from 'react';
const Backdrop = lazy(() => import('../BackDrop/Backdrop'));
const Poster = lazy(() => import('../Poster/Poster'));
import './CarouselBoostrap.css'
import { useQuery } from 'react-query';
import { fetchData } from '../../utils/fetchData';
import { getURLMovieDetails } from '../../utils/endPoints';
function CarouselBoostrap({ movie, isPoster }: { movie: MovieDetails | null, isPoster?: boolean }) {
    const { data: movieWithImages } = useQuery<MovieDetails>(['movieIC',movie?.id],()=>fetchData(getURLMovieDetails(movie?.id).movieDetails))
    return (
        <div className={`carousel-bootstrap ${isPoster ? "c-b-poster" : ""}`}>
            <Carousel fade interval={3000} pause="hover">
                {
                    !isPoster ? (
                        movieWithImages?.images.backdrops.map((backdrop, index) => (
                            <Carousel.Item key={index}>
                                <Backdrop backdrop_path={backdrop.file_path} />
                            </Carousel.Item>
                        ))
                    ) : (
                        movieWithImages?.images.posters.map((poster, index) => (
                            <Carousel.Item className='item-poster' key={index}>
                                <Poster poster_path={poster.file_path} />
                            </Carousel.Item>
                        ))
                    )
                }
            </Carousel>
        </div>
    );
}

export default CarouselBoostrap;