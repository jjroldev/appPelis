import { useMenu } from "../../context/MenuContext";
import { useScroll } from "../../hooks/useScroll";
import Logo from "../Logo/Logo"
import Hamburger from 'hamburger-react';
import './MenuDesplegable.css'
import '../NavBar/NavBar.css'
import { lazy, Suspense } from "react";
const MenuOptions = lazy(() => import('./MenuOptions'))
export default function MenuDesplegable() {

    const { openMenu, setOpenMenu } = useMenu()

    const scrolled = useScroll()

    return (
        <>
            <div className={`navbar ${scrolled ? "scrolled" : ""} ${openMenu && "activoNavbar"}`}>
                <Logo />
                <Hamburger
                    color="white"
                    onToggle={() => setOpenMenu(!openMenu)}
                    size={26}
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