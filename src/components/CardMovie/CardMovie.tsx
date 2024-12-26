import "./CardMovie.css"
import { Movie } from "../../interface/Movie"
import { URL_IMAGE } from "../../App"
export function CardMovie({ movie }: { movie: Movie }) {

    return (
        <div className="contenedor-poster">
            <div className="cardContainerImage">
                <img src={`${URL_IMAGE}${movie.poster_path}`}
                    alt={movie.title} />
            </div>
        </div>
    )
}