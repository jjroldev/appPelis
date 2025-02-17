import Loader from '../Loader/Loader'
import './Spinner.css'

export default function Spinner() {
    return (
        <div className={`cargandoSpinner`}>
            <Loader />
        </div>
    )
}