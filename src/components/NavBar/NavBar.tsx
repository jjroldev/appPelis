import './NavBar.css';
import { useLocation } from "react-router-dom";

import { lazy, Suspense } from 'react';
import { useScroll } from '../../hooks/useScroll';
import Logo from '../Logo/Logo';
const SearchBar = lazy(() => import('../SearchBar/SearchBar'));
const PerfilDrop = lazy(() => import('../PerfilDrop/PerfilDrop'));
const MenuOptions = lazy(() => import('./MenuOptions'))
interface NavBarProps {
    condicionExpanded?: boolean;
}

export default function NavBar({
    condicionExpanded,
}: NavBarProps) {

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
                        condicionExpanded={condicionExpanded}
                        desdeHome={location.state?.fromBuscar || false}
                    />
                    <PerfilDrop />
                </Suspense>
            </div>
        </div>
    );
}
