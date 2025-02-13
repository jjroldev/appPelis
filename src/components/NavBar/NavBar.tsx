import './NavBar.css';
import { useLocation } from "react-router-dom";

import { lazy } from 'react';
import { useScroll } from '../../hooks/useScroll';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import MenuDesplegable from '../MenuDesplegable/MenuDesplegable';
import MenuOptions from './MenuOptions';
import Logo from '../Logo/Logo';
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

    const scrolled = useScroll();
    const width = useWindowWidth()

    return (
        <>
            {width < 900 ? <MenuDesplegable mostrarDesplegable={mostrarDesplegable} />
                : (
                    <div
                        className={`navbar 
                         ${scrolled ? "scrolled" : ""}
                         ${width < 900 ? "visibleBar" : ""}`}
                    >
                        <div className="navOpciones">
                            <Logo logoGrande={logoGrande} />
                            {menu && (
                                <MenuOptions />
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
                )}
        </>
    );
}
