import { useRef, useEffect, useState } from "react";
import { memo } from "react";
import "./Lupa.css";
import { useSearch } from "../../context/SearchContext";

interface LupaProps {
    placeholder: string;
}

const Lupa = memo(({ placeholder }: LupaProps) => {
    const { searchTerm, setSearchTerm } = useSearch();
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = useState(searchTerm);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    useEffect(() => {
        const handler = setTimeout(() => {
            setSearchTerm(inputValue);
        }, 1000);

        return () => clearTimeout(handler);
    }, [inputValue, setSearchTerm]);

    return (
        <form id="busqueda" onSubmit={(e) => e.preventDefault()}>
            <div className="contenedorLupa">
                <input
                    ref={inputRef}
                    id="busqueda-input"
                    type="text"
                    className="lupaMovile"
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <i className="fa-solid fa-magnifying-glass lupaIcono"></i>
                <button type="submit" style={{ display: 'none' }} />
            </div>
        </form>
    );
});

export default Lupa;
