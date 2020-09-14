import React, {useContext} from 'react';
import { GlobalThemeContext } from '../context/ThemesContext';

const Test = () => {
  const context = useContext(GlobalThemeContext);
  return (
    <div>
      {context.hello}
    </div>
  )
}

export default Test
