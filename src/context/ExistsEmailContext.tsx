import { createContext, useContext, useState, ReactNode } from "react";
interface EmailContextProps {
  emailExists: boolean;
  setEmailExists: (value: boolean) => void;
}

const EmailContext = createContext<EmailContextProps | undefined>(undefined);

export const EmailProvider = ({ children }: { children: ReactNode }) => {
  const [emailExists, setEmailExists] = useState<boolean>(false);

  return (
    <EmailContext.Provider value={{ emailExists, setEmailExists }}>
      {children}
    </EmailContext.Provider>
  );
};

export const useEmail = (): EmailContextProps => {
  const context = useContext(EmailContext);
  if (!context) {
    throw new Error("useEmail debe ser usado dentro de EmailProvider");
  }
  return context;
};
