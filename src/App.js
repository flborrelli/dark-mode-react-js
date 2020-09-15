import React, { useContext, useState } from 'react';
import { GlobalThemeContext, ThemeManager } from './context/ThemesContext';
import Test from './components/Test';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';

function App() {

  const {theme} = useContext(GlobalThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Test/>
    </ThemeProvider>
    
  );
}

export default App;
