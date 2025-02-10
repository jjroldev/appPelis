import { useRef, useEffect, useState } from "react";
import { memo } from "react";
import "./Lupa.css";
import { useSearch } from "../../context/SearchContext";

interface LupaProps {
    placeholder: string;
    onSubmit: (value: string) => void;
}

const Lupa = memo(({ placeholder, onSubmit }: LupaProps) => {
    const { searchTerm, setSearchTerm } = useSearch();
    const inputRef = useRef<HTMLInputElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            if (searchTerm !== localSearchTerm) {
                setSearchTerm(localSearchTerm);
                onSubmit(localSearchTerm);
            }
        }, 1000);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [localSearchTerm]);

    return (
        <form id="busqueda" onSubmit={(e) => e.preventDefault()}>
            <div className="contenedorLupa">
                <input
                    ref={inputRef}
                    id="busqueda-input"
                    type="text"
                    className="lupaMovile"
                    placeholder={placeholder}
                    value={localSearchTerm}
                    onChange={(e) => setLocalSearchTerm(e.target.value)}
                />
                <i className="fa-solid fa-magnifying-glass lupaIcono"></i>
                <button type="submit" style={{ display: 'none' }} />
            </div>
        </form>
    );
});

export default Lupa;
