import './Poster.css'
import { URL_IMAGE_POSTER } from '../../utils/endPoints'
function Poster({poster_path}:{poster_path:string}) {
    return (
        <div className="wrapperPoster">
            <img src={URL_IMAGE_POSTER + poster_path} className="backdropPoster" />
        </div>
    )
}

export default Poster