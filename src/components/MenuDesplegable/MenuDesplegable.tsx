import { useMenu } from "../../context/MenuContext";
import { Link } from "react-router-dom";
import PerfilDrop from "../PerfilDrop/PerfilDrop";
import { useAuth } from "../../context/AuthContext";
import { useScroll } from "../../hooks/useScroll";
import Logo from "../Logo/Logo";
import './MenuDesplegable.css'
export default function MenuDesplegable({ mostrarDesplegable = true}: {mostrarDesplegable:boolean}) {

    const { openMenu, setOpenMenu } = useMenu()

    const { currentPerfil } = useAuth()
    const scrolled = useScroll()

    return (
        <>
            {openMenu ? (
                <div className="hamburguer-menu">
                    <div className="contenedorXMenuH">
                        <i
                            className="fa-solid fa-x x-menuH"
                            onClick={() => setOpenMenu(!openMenu)}
                        ></i>
                    </div>
                    <div className="w-full h-full cMenuHOpciones">
                        <Link className="w-full opcionMH" to="/home">HOME</Link>
                        <Link to="/miLista" className="w-full opcionMH">MI LISTA</Link>
                        <Link className="w-full opcionMH" to="/buscar">BUSCAR</Link>
                        <Link className="w-full opcionMH" to="/movies">MOVIES</Link>
                        <Link className="w-full opcionMH" to="/series">SERIES</Link>
                        <div className="w-full opcionMH c-perfil-HB">
                            <Link to="/miLista">{currentPerfil?.name.toUpperCase()}</Link>
                            <PerfilDrop />
                        </div>
                    </div>
                </div>
            ) : (
                <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
                    <Logo />
                    {mostrarDesplegable && (
                        <i
                            className="menu-bar fa-solid fa-bars text-white"
                            onClick={() => setOpenMenu(!openMenu)}
                        ></i>
                    )}
                </div>
            )}
        </>
    );
}