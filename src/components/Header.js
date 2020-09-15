import React, {useContext} from 'react';
import { GlobalThemeContext } from '../context/ThemesContext';
import styled, { ThemeProvider } from 'styled-components';
import Switch from 'react-switch';
import { FaRegSun, FaMoon } from 'react-icons/fa';

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

const Header = () => {
  const { changeTheme, hello, setTheme, theme } = useContext(GlobalThemeContext);
  return (
    <Container>
      {hello}
      
      <Switch 
        onChange={changeTheme}
        checked={theme.title === 'light'}
        checkedIcon={<FaRegSun style={{ verticalAlign: 'middle'}} size={15}/>}
        uncheckedIcon={<FaMoon style={{ verticalAlign: 'middle', alignSelf: 'center'}} size={15}/>}
        height={20}
        width={50}
        handleDiameter={10}
        onColor={theme.colors.secundary}
      />
    </Container>
  )
}

export default Header;
