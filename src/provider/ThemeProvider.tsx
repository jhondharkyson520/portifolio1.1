import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface ThemeContextType {
  themeMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  themeMode: false,
  toggleTheme: () => {},
});


export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    
  const [themeMode, setThemeMode] = useState(() => {
    
    const storedThemeMode = localStorage.getItem('themeMode');

    return storedThemeMode ? JSON.parse(storedThemeMode) : false;

  });  

  const toggleTheme = () => {
    setThemeMode(!themeMode);
  };

  useEffect(() => {
  
    localStorage.setItem('themeMode', JSON.stringify(themeMode));
    
  }, [themeMode]);


  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
