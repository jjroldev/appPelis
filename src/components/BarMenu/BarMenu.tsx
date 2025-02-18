import { lazy, Suspense } from "react"
import { useWindowWidth } from "../../hooks/useWindowWidth"
const NavBar = lazy(() => import('../NavBar/NavBar'))
const MenuDesplegable = lazy(() => import("../MenuDesplegable/MenuDesplegable"))
export default function BarMenu() {
    const width = useWindowWidth()
    return (
        <Suspense fallback={<></>}>
            {
                width >= 900 ? (
                    // <Suspense fallback={<></>}></Suspense>
                    <NavBar/>
                ) : (

                    <MenuDesplegable />
                )
            }
        </Suspense>
    )
}