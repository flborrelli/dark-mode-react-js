import React, { useContext, useState } from 'react';
import { GlobalThemeContext, ThemeManager } from './context/ThemesContext';
import Header from './components/Header';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';

function App() {

  const {theme} = useContext(GlobalThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header/>
    </ThemeProvider>
    
  );
}

export default App;
