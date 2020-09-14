import React, { useContext } from 'react';
import { ThemeManager } from './context/ThemesContext';
import Test from './components/Test';


function App() {

  return (
      <ThemeManager>
        <Test/>
      </ThemeManager>
  );
}

export default App;
