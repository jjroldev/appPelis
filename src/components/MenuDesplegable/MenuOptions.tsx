import { Link } from "react-router"
import { Suspense } from "react"
import PerfilDrop from "../PerfilDrop/PerfilDrop"
import { useAuth } from "../../context/AuthContext"
export default function MenuOptions() {
    const {currentPerfil}= useAuth()
    return (
        <div className="hamburguer-menu">
            <div className="cMenuHOpciones">
                <Link className="opcionMH" to="/home">HOME</Link>
                <Link to="/miLista" className="opcionMH">MI LISTA</Link>
                <Link className="opcionMH" to="/buscar">BUSCAR</Link>
                <Link className="opcionMH" to="/movies">MOVIES</Link>
                <Link className="opcionMH" to="/series">SERIES</Link>
                <Link className="opcionMH" to="/actors">ACTORS</Link>
                <div className="opcionMH c-perfil-HB">
                    <Link to="/miLista">{currentPerfil?.name.toUpperCase()}</Link>
                    <Suspense fallback={<></>}>
                        <PerfilDrop />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}