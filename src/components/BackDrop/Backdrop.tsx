import { URL_IMAGE_BANNER } from '../../utils/endPoints'
import './Backdrop.css'
function Backdrop({backdrop_path}:{backdrop_path:string}){
    return(
        <>
        <div className="wrapperBackdrop">
            <img src={URL_IMAGE_BANNER+backdrop_path} className="backdropInfo"/>
        </div>
        </>
    )
}

export default Backdrop