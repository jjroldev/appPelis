import Carousel from 'react-bootstrap/Carousel';
import { Movie } from '../../interface/Movie';
import { Backdrop } from '../BackDrop/Backdrop';
import { Poster } from '../Poster/Poster';
import useFetchMovieDetails from '../../hooks/useFecthMovieWithDetail';
import './CarouselBoostrap.css'
function CarouselBoostrap({ movie, isPoster }: { movie: Movie, isPoster?: boolean }) {
    const { movie: movieWithImages } = useFetchMovieDetails(movie.id)
    return (
        <div className={`carousel-bootstrap ${isPoster?"c-b-poster":""}`}>
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