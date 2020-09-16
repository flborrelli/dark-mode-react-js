import React, {useContext} from 'react';
import { GlobalThemeContext } from '../../context/ThemesContext';
import styled, { ThemeProvider } from 'styled-components';
import Switch from 'react-switch';
import { FaRegSun, FaMoon } from 'react-icons/fa';
import { Container, Title } from './styles';
import ToggleButton from '../ToggleButton/ToggleButton';


const Header = () => {
  const { changeTheme, setTheme, theme } = useContext(GlobalThemeContext);
  return (
    <Container>
      <Title>Theme Switcher</Title>
      <button onClick={changeTheme}></button>
      <ToggleButton theme={theme}/>
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
