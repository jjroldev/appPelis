import { createContext, useContext, useState, ReactNode } from "react";

interface MenuContextType {
  openMenu: boolean;
  setOpenMenu: (open: boolean) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <MenuContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu debe usarse dentro de un MenuProvider");
  }
  return context;
}
