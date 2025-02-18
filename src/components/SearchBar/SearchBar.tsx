import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";
import { useSearch } from "../../context/SearchContext";

interface SearchBarProps {
    desdeHome?: boolean;
}

export default function SearchBar({ desdeHome }: SearchBarProps) {
    const [lupaActive, setLupaActive] = useState(desdeHome || false);
    const lupaContainerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const { searchTerm, setSearchTerm } = useSearch();

    useEffect(() => {
        if (lupaActive && inputRef.current) {
            inputRef.current.focus();
        }
    }, [lupaActive]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            const navbar = document.querySelector(".navbar");
            if (
                lupaActive && 
                lupaContainerRef.current && 
                !lupaContainerRef.current.contains(target) && 
                (!navbar || !navbar.contains(target))
            ) {
                setLupaActive(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [lupaActive]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
    
        if (value) {
            setSearchTerm(value);
            navigate("/buscar");
        } else {
            setSearchTerm("");
        }
    };
    
    return (
        <div className="search-bar">
            {!lupaActive && (
                <i 
                    className="fa-solid fa-magnifying-glass lupa" 
                    onClick={() => setLupaActive(true)}
                ></i>
            )}

            {lupaActive && (
                <div className="contenedorLupaExpanded active" ref={lupaContainerRef}>
                    <input
                        type="text"
                        className="lupaExpanded"
                        placeholder="Search movies, series, tv series..."
                        ref={inputRef}
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <i 
                        className="fa-solid fa-magnifying-glass lupaExpandedIcon" 
                        onClick={() => {
                            setLupaActive(false);
                        }}
                    ></i>
                    {
                        searchTerm && (
                            <i 
                                onClick={() => setSearchTerm("")} 
                                className={"fa-solid fa-x lupaExDelete"}
                            ></i>
                        )
                    }
                </div>
            )}
        </div>
    );
}
