import './NavBar.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
export function NavBar({ logoBuscar, language }: { logoBuscar: boolean, language: string }) {
    const navigate = useNavigate();

    const handleSearchClick = () => {
        navigate("/buscar");
    };
    return (
        <div className="navbar">

            <div className='navOpciones'>
                <img
                    src="/appPelis/JUSTFLIX.svg"
                    alt="Logo"
                />
                <Link className='textInicio' to="/">{language === 'es' ? "Inicio" : "Home"}</Link>
            </div>
            {logoBuscar && (<i
                className="fa-solid fa-magnifying-glass lupa"
                onClick={handleSearchClick} ></i>)}
        </div>
    );
}
