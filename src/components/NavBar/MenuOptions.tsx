import { Link, useLocation } from "react-router-dom"

const MenuOptions = () => {
    const location = useLocation()

    return(
        <>
        <Link
            className={`textInicio ${location.pathname === "/home" ? "!text-yellow-600 font-bold" : ""}`}
            to="/home"
        >
            Home
        </Link>
        <Link
            className={`textInicio ${location.pathname === "/miLista" ? "!text-yellow-600 font-bold" : ""}`}
            to="/miLista"
        >
            Mi Lista
        </Link>

        <Link
            className={`textInicio ${location.pathname === "/movies" ? "!text-yellow-600 font-bold" : ""}`}
            to="/movies"
        >
            Movies
        </Link>

        <Link
            className={`textInicio ${location.pathname === "/series" ? "!text-yellow-600 font-bold" : ""}`}
            to="/series"
        >
            Series
        </Link>

        <Link
            className={`textInicio ${location.pathname === "/actors" ? "!text-yellow-600 font-bold" : ""}`}
            to="/actors"
        >
            Actors
        </Link>
    </>
    )
}

export default MenuOptions