import { useMenu } from "../../context/MenuContext";
import { Link } from "react-router-dom";
import PerfilDrop from "../PerfilDrop/PerfilDrop";
import { useAuth } from "../../context/AuthContext";
import { useScroll } from "../../hooks/useScroll";
import Logo from "../Logo/Logo"
import Hamburger from 'hamburger-react';
import './MenuDesplegable.css'
export default function MenuDesplegable({ mostrarDesplegable = true }: { mostrarDesplegable: boolean }) {

    const { openMenu, setOpenMenu } = useMenu()

    const { currentPerfil } = useAuth()
    const scrolled = useScroll()

    return (
        <>
            <div className={`navbar ${scrolled ? "scrolled" : ""} ${openMenu && "activoNavbar"}`}>
                <Logo />
                {mostrarDesplegable && (
                    <Hamburger
                        color="white"
                        onToggle={() => setOpenMenu(!openMenu)}
                        size={26}
                    />
                )}
            </div>
            {openMenu && (
                <div className="hamburguer-menu">
                    <div className="cMenuHOpciones">
                        <Link className="opcionMH" to="/home">HOME</Link>
                        <Link to="/miLista" className="opcionMH">MI LISTA</Link>
                        <Link className="opcionMH" to="/buscar">BUSCAR</Link>
                        <Link className="opcionMH" to="/movies">MOVIES</Link>
                        <Link className="opcionMH" to="/series">SERIES</Link>
                        <div className="opcionMH c-perfil-HB">
                            <Link to="/miLista">{currentPerfil?.name.toUpperCase()}</Link>
                            <PerfilDrop />
                        </div>
                    </div>
                </div>
            )
            }
        </>
    );
}