import { URL_IMAGE_BANNER } from "../../App";
import './Backdrop.css'
export function Backdrop({backdrop_path}:{backdrop_path:string}){
    return(
        <>
        <div className="wrapperBackdrop">
            <img src={URL_IMAGE_BANNER+backdrop_path} className="backdropInfo"/>
        </div>
        </>
    )
}