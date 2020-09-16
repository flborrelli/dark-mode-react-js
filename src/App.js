import React, { useContext, useState } from 'react';
import { GlobalThemeContext, ThemeManager } from './context/ThemesContext';
import Header from './components/Header/Header';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import Card from './components/Card/Card';

function App() {

  const {theme} = useContext(GlobalThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header/>
      <Card/>
    </ThemeProvider>
    
  );
}

export default App;
