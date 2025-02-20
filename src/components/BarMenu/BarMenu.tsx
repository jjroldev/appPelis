import { lazy } from "react"
import { useWindowWidth } from "../../hooks/useWindowWidth"
const NavBar = lazy(() => import('../NavBar/NavBar'))
const MenuDesplegable = lazy(() => import("../MenuDesplegable/MenuDesplegable"))
export default function BarMenu() {
    const width = useWindowWidth()
    return (
        width >= 900 ? (
            <NavBar />
        ) : (

            <MenuDesplegable />
        )
    )
}