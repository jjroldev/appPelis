import '../NavBar/NavBar.css'
import { useScroll } from '../../hooks/useScroll';
import Logo from '../Logo/Logo';
export default function NavBarBasic() {

    const scrolled = useScroll();

    return (
        <div
            className={`navbar  ${scrolled ? "scrolled" : ""}`}>
            <div className="navOpciones">
                <Logo  logoGrande={true} />
            </div>
        </div>
    );
}
