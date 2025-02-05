import './NavBar.css';
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState, useRef, lazy } from 'react';
const SearchBar = lazy(()=>import('../SearchBar/SearchBar'));
const PerfilDrop = lazy(()=>import('../PerfilDrop/PerfilDrop'))
interface NavBarProps {
    logoBuscar: boolean;
    menu?: boolean;
    perfil?: boolean;
    logoGrande?: boolean;
    condicionExpanded?: boolean,
}

export function NavBar({ logoBuscar, menu = false, perfil = false, logoGrande = false, condicionExpanded }: NavBarProps) {
    const location = useLocation();

    const [scrolled, setScrolled] = useState(false);
    const navbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`navbar ${scrolled ? "scrolled" : ""}`} ref={navbarRef}>
            <div className='navOpciones'>
                <img
                    src="/appPelis/JUSTFLIX.svg"
                    alt="Logo"
                    className={`${logoGrande ? "logoGrande" : ""}`}
                />
                {menu && (
                    <>
                        <Link className={`textInicio ${location.pathname === "/home" ? "bold" : ""}`} to="/home">
                            Home
                        </Link>
                        <Link className={`textInicio ${location.pathname === "/miLista" ? "bold" : ""}`} to="/miLista">
                            Favorites
                        </Link>
                    </>
                )}
            </div>

            <div className='perfilYLupaContenedor'>
                {logoBuscar && <SearchBar condicionExpanded={condicionExpanded} desdeHome={location.state?.fromBuscar || false} />}
                {perfil  && <PerfilDrop />}
            </div>
        </div>
    );
}
