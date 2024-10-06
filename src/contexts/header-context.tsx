"use client";

import { createContext, useContext, useEffect } from "react";

import { idScroll } from "@/utils/contants";
import { useScrollToSection } from "@/hooks/useScrollToSection";

interface HeaderProviderProps {
  children: React.ReactNode;
}

const AppContext = createContext({
  isActive: "",
  setIsActive: (sectionId: string) => {},
  handleScrollToSection: (sectionId: string) => {},
});

export const useHeaderContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useHeaderContext must be used within an HeaderProvider");
  }
  return context;
};

export default function HeaderProvider({ children }: HeaderProviderProps) {
  const { handleScrollToSection, isActive, setIsActive } = useScrollToSection();

  useEffect(() => {
    if (!isActive) {
      setIsActive(idScroll.HOME);
    }
  }, []);
  return (
    <AppContext.Provider
      value={{ isActive, setIsActive, handleScrollToSection }}
    >
      {children}
    </AppContext.Provider>
  );
}
