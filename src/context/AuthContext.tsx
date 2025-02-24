import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { User } from "../interface/User";
import { Perfil } from "../interface/Perfil";
import { auth, db } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

interface AuthContextProps {
  currentUser: User | null;
  isLoggedIn: boolean;
  loading: boolean;
  loginAuth: (user: User) => void;
  logout: () => void;
  currentPerfil: Perfil | null;
  setCurrentPerfil: (perfil: Perfil | null) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentPerfil, setCurrentPerfil] = useState<Perfil | null>(() => {
    const storedPerfil = sessionStorage.getItem("currentPerfil");
    return storedPerfil ? JSON.parse(storedPerfil) : null;
  });  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data() as User;
          setCurrentUser({ ...userData, id: user.uid });
          setIsLoggedIn(true);
        } else {
          logout();
        }
      } else {
        setCurrentUser(null);
        setCurrentPerfil(null);
        setIsLoggedIn(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (currentPerfil) {
      sessionStorage.setItem("currentPerfil", JSON.stringify(currentPerfil));
    } else {
      sessionStorage.removeItem("currentPerfil");
    }
  }, [currentPerfil]);

  const loginAuth = (user: User) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
  };

  const logout = () => {
    signOut(auth);
    setCurrentUser(null);
    setCurrentPerfil(null);
    setIsLoggedIn(false);
    sessionStorage.removeItem("currentPerfil");
    sessionStorage.removeItem("searchTerm")
  };

  return (
    <AuthContext.Provider value={{ currentUser, isLoggedIn, loading, loginAuth, logout, currentPerfil, setCurrentPerfil }}>
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
