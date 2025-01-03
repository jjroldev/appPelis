import './NavBar.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
export function NavBar({ logoBuscar, language }: { logoBuscar: boolean, language: string }) {
    const navigate = useNavigate();

    const handleSearchClick = () => {
        navigate("/buscar");
    };

    const [scrolled, setScrolled] = useState(false);

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
        <div className={`navbar ${scrolled ? "scrolled" : ""}`}>

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
