import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface LanguageContextType {
  languageMode: boolean;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  languageMode: false,
  toggleLanguage: () => {},
});


export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    
  const [languageMode, setLanguageMode] = useState(() => {
    
    const storedLanguageMode = localStorage.getItem('languageMode');

    return storedLanguageMode ? JSON.parse(storedLanguageMode) : false;

  }); 

  const toggleLanguage = () => {
    setLanguageMode(!languageMode);
  };

  useEffect(() => {
  
    localStorage.setItem('languageMode', JSON.stringify(languageMode));
    
  }, [languageMode]);
  
  return (
    <LanguageContext.Provider value={{ languageMode, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
