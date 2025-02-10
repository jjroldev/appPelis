import './NavBar.css';
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState, useRef, lazy } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useMenu } from '../../context/MenuContext';

const SearchBar = lazy(() => import('../SearchBar/SearchBar'));
const PerfilDrop = lazy(() => import('../PerfilDrop/PerfilDrop'));

interface NavBarProps {
    logoBuscar: boolean;
    menu?: boolean;
    perfil?: boolean;
    logoGrande?: boolean;
    condicionExpanded?: boolean;
    mostrarDesplegable?: boolean;
}

export function NavBar({
    logoBuscar,
    menu = false,
    perfil = false,
    logoGrande = false,
    condicionExpanded,
    mostrarDesplegable = true
}: NavBarProps) {

    const location = useLocation();
    const { currentPerfil } = useAuth();
    const { openMenu, setOpenMenu } = useMenu();

    const navbarRef = useRef<HTMLDivElement>(null);
    const [scrolled, setScrolled] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function MenuDesplegable() {
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
                            <div className="w-full opcionMH c-perfil-HB">
                                <Link to="/miLista">{currentPerfil?.name.toUpperCase()}</Link>
                                <PerfilDrop />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={`navbar ${scrolled ? "scrolled" : ""}`} ref={navbarRef}>
                        <img
                            src="/appPelis/JUSTFLIX.svg"
                            alt="Logo"
                            className={`${logoGrande ? "logoGrande" : ""}`}
                        />
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

    return (
        <>
            <div
                className={`navbar ${scrolled ? "scrolled" : ""} ${width < 900 ? "visibleBar" : ""}`}
                ref={navbarRef}
            >
                <div className="navOpciones">
                    <img
                        src="/appPelis/JUSTFLIX.svg"
                        alt="Logo"
                        className={`${logoGrande ? "logoGrande" : ""}`}
                    />
                    {menu && (
                        <>
                            <Link
                                className={`textInicio ${location.pathname === "/home" ? "bold" : ""}`}
                                to="/home"
                            >
                                Home
                            </Link>
                            <Link
                                className={`textInicio ${location.pathname === "/miLista" ? "bold" : ""}`}
                                to="/miLista"
                            >
                                Favorites
                            </Link>
                        </>
                    )}
                </div>

                <div className="perfilYLupaContenedor">
                    {logoBuscar && (
                        <SearchBar
                            condicionExpanded={condicionExpanded}
                            desdeHome={location.state?.fromBuscar || false}
                        />
                    )}
                    {perfil && <PerfilDrop />}
                </div>
            </div>

            {width < 900 && <MenuDesplegable />}
        </>
    );
}
