import React, { useState, createContext, useContext } from 'react';

const ThemeContext = createContext();


const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('Puny');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }} >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return {
    theme,
    setTheme
  };
};
