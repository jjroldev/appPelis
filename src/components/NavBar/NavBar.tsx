import './NavBar.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
export function NavBar({ logoBuscar}: { logoBuscar: boolean}) {
    const { language } = useLanguage();
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
                <Link className="textInicio" to="/favoritos">{language === 'es' ? "Favoritas" : "Favorites"}</Link>
            </div>
            {logoBuscar && (<i
                className="fa-solid fa-magnifying-glass lupa"
                onClick={handleSearchClick} ></i>)}
        </div>
    );
}
