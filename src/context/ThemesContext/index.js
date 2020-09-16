import React, { createContext, useState } from 'react';
import lightTheme from '../../styles/themes/light';
import darkTheme from '../../styles/themes/dark';

export const GlobalThemeContext = createContext();

export const ThemeManager = ({ children }) => {

  const [theme, setTheme] = useState(lightTheme);

  const changeTheme = () => {
    theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme)
  }

  return (
    <GlobalThemeContext.Provider value={{ theme, setTheme, changeTheme }}>
      {children}
    </GlobalThemeContext.Provider>
  );
};
