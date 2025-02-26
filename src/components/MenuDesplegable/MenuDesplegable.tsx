import { useMenu } from "../../context/MenuContext";
import { useScroll } from "../../hooks/useScroll";
import Logo from "../Logo/Logo"
import Hamburger from 'hamburger-react';
import './MenuDesplegable.css'
import '../NavBar/NavBar.css'
import { lazy, Suspense } from "react";
import { useWindowWidth } from "../../hooks/useWindowWidth";
const MenuOptions = lazy(() => import('./MenuOptions'))
export default function MenuDesplegable() {

    const { openMenu, setOpenMenu } = useMenu()
    const width=useWindowWidth()

    const scrolled = useScroll()

    return (
        <>
            <div className={`navbar ${scrolled ? "scrolled" : ""} ${openMenu && "activoNavbar"}`}>
                <Logo />
                <Hamburger
                    color="white"
                    onToggle={() => setOpenMenu(!openMenu)}
                    size={width>600 ? 26:24}
                />
            </div>
            {openMenu && (
                <Suspense fallback={<></>}>
                    <MenuOptions />
                </Suspense>
            )
            }
        </>
    );
}