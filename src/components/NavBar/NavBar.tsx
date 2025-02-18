import './NavBar.css';
import { useLocation } from "react-router-dom";

import { lazy, Suspense } from 'react';
import { useScroll } from '../../hooks/useScroll';
import Logo from '../Logo/Logo';
const SearchBar = lazy(() => import('../SearchBar/SearchBar'));
const PerfilDrop = lazy(() => import('../PerfilDrop/PerfilDrop'));
const MenuOptions = lazy(() => import('./MenuOptions'))

export default function NavBar() {

    const location = useLocation();

    const scrolled = useScroll();

    return (
        <div
            className={`navbar  ${scrolled ? "scrolled" : ""}`}>
            <div className="navOpciones">
                <Logo logoGrande={false} />
                <Suspense fallback={<></>}>
                    <MenuOptions />
                </Suspense>
            </div>
            <div className="perfilYLupaContenedor">
                <Suspense fallback={<></>}>
                    <SearchBar
                        desdeHome={location.pathname=="/buscar" || location.pathname=="/home" 
                            || location.pathname=="/movies"
                            || location.pathname=="/series"
                            || location.pathname=="/miLista"
                            || false}
                    />
                    <PerfilDrop />
                </Suspense>
            </div>
        </div>
    );
}
