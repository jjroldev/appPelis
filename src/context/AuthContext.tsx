import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { User } from "../interface/User";
import { Perfil } from "../interface/Perfil";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
interface AuthContextProps {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  isLoggedIn: boolean;
  loginAuth: (user: User) => void;
  logout: () => void;
  currentPerfil:Perfil|null;
  setCurrentPerfil:(perfil:Perfil|null)=>void
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const storedUser = sessionStorage.getItem("currentUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [currentPerfil, setCurrentPerfil] = useState<Perfil | null>(
    () => {
      const storedUser = sessionStorage.getItem("currentPerfil");
      return storedUser ? JSON.parse(storedUser) : null;
    }
  )
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    const storedStatus = sessionStorage.getItem("isLoggedIn");
    return storedStatus === "true";
  });

  useEffect(() => {
    sessionStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
    sessionStorage.setItem("currentPerfil", JSON.stringify(currentPerfil));
  }, [isLoggedIn, currentUser,currentPerfil]);

  const loginAuth = (user: User) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
  };

  const logout = () => {
    signOut(auth)
    setCurrentUser(null);
    setCurrentPerfil(null)
    setIsLoggedIn(false);
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("currentUser");
    sessionStorage.removeItem("currentPerfil");
  };

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, isLoggedIn, loginAuth, logout,currentPerfil,setCurrentPerfil }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};
