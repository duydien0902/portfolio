import { useCallback, useState } from "react";

export const useScrollToSection = () => {
  const [isActive, setIsActive] = useState<string>("");

  const handleScrollToSection = useCallback((sectionName: string) => {
    const element = document.getElementById(sectionName);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsActive(sectionName);
    }
  }, []);
  return { setIsActive, isActive, handleScrollToSection };
};
