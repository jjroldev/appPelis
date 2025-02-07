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
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setSearchTerm(localSearchTerm);
            onSubmit(localSearchTerm);
        }, 1000);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [localSearchTerm]); 

    return (
        <form id="busqueda" className="flex items-center w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="relative w-full item">
                <input
                    ref={inputRef}
                    id="busqueda-input"
                    type="text"
                    className="lupa bg-black border p-2 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={placeholder}
                    value={localSearchTerm}
                    onChange={(e) => setLocalSearchTerm(e.target.value)}
                />
                <button type="submit" style={{ display: 'none' }} />
            </div>
        </form>
    );
});

export default Lupa;
