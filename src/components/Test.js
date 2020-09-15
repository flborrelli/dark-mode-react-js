import React, {useContext} from 'react';
import { GlobalThemeContext } from '../context/ThemesContext';
import styled, { ThemeProvider } from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

const Test = () => {
  const { changeTheme, hello, setTheme, theme } = useContext(GlobalThemeContext);
  return (
    <Container>
      {hello}
      <button onClick={changeTheme}>Change theme</button>
    </Container>
  )
}

export default Test
