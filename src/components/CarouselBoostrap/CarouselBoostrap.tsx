import Carousel from 'react-bootstrap/Carousel';
import { Movie } from '../../interface/Movie';
import { lazy } from 'react';
const Backdrop = lazy(() => import('../BackDrop/Backdrop'));
import { Suspense } from 'react';
import { Skeleton } from '@mui/material';
const Poster = lazy(() => import('../Poster/Poster'));
import useFetchMovieDetails from '../../hooks/useFecthMovieWithDetail';
import './CarouselBoostrap.css'
function CarouselBoostrap({ movie, isPoster }: { movie: Movie, isPoster?: boolean }) {
    const { movie: movieWithImages } = useFetchMovieDetails(movie.id)
    return (
        <div className={`carousel-bootstrap ${isPoster ? "c-b-poster" : ""}`}>
            <Carousel fade interval={3000} pause="hover">
                {
                    !isPoster ? (
                        movieWithImages?.images.backdrops.map((backdrop, index) => (
                            <Carousel.Item key={index}>
                                <Suspense fallback={
                                    <div className="wrapperBackdrop">
                                        <Skeleton width={"100%"} height={"100%"} variant="rectangular" sx={{ bgcolor: 'grey.900' }} />
                                    </div>
                                }>
                                    <Backdrop backdrop_path={backdrop.file_path} />
                                </Suspense>
                            </Carousel.Item>
                        ))
                    ) : (
                        movieWithImages?.images.posters.map((poster, index) => (
                            <Carousel.Item className='item-poster' key={index}>
                                <Suspense fallback={
                                    <div className="wrapperPoster">
                                        <Skeleton width={"100%"} height={"100%"} variant="rectangular" sx={{ bgcolor: 'grey.900' }} />
                                    </div>
                                }>
                                    <Poster poster_path={poster.file_path} />
                                </Suspense>
                            </Carousel.Item>
                        ))
                    )
                }
            </Carousel>
        </div>
    );
}

export default CarouselBoostrap;