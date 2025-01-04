interface LupaProps {
    placeholder: string;
    onSubmit: (value: string) => void;
}
import { useState } from "react";
export function Lupa({ placeholder, onSubmit }: LupaProps) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(inputValue);
    };

    return (
        <form id="busqueda" className="flex items-center w-full" onSubmit={handleSubmit}>
            <div className="relative w-full item">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white">
                    <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                <input
                    id="busqueda-input"
                    type="text"
                    className="bg-black border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                    type="submit"
                    style={{ display: 'none' }}
                />
            </div>
        </form>
    );
}
