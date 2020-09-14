import React, { createContext, useState } from 'react';

export const GlobalThemeContext = createContext();

export const ThemeManager = ({ children }) => {

  const [hello, setHello] = useState('oi amigos');

  return (
    <GlobalThemeContext.Provider value={{ hello }}>
      {children}
    </GlobalThemeContext.Provider>
  );
};
