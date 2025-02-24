import { createContext, useContext, useState, ReactNode,useEffect } from "react";

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState<string>(() => {
    const storedSearchTerm = sessionStorage.getItem("searchTerm");
    return storedSearchTerm || "";
  });


  useEffect(() => {
    if (searchTerm) {
      sessionStorage.setItem("searchTerm", searchTerm);
    } else {
      sessionStorage.removeItem("searchTerm");
    }
  }, [searchTerm]);

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch debe usarse dentro de un SearchProvider");
  }
  return context;
}
