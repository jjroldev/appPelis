import { useRef, useEffect } from "react";
import { memo } from "react";
import "./Lupa.css";
import { useSearch } from "../../context/SearchContext";

interface LupaProps {
    placeholder: string;
}

const Lupa = memo(({ placeholder }: LupaProps) => {
    const { searchTerm, setSearchTerm } = useSearch();
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <form id="busqueda" onSubmit={(e) => e.preventDefault()}>
            <div className="contenedorLupa">
                <input
                    ref={inputRef}
                    id="busqueda-input"
                    type="text"
                    className="lupaMovile"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <i className="fa-solid fa-magnifying-glass lupaIcono"></i>
                <button type="submit" style={{ display: 'none' }} />
            </div>
        </form>
    );
});

export default Lupa;
