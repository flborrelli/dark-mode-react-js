import React, { useContext } from 'react'

import darkTheme from '../../styles/themes/dark';

import { Container, Paragraph } from './styles';
import { GlobalThemeContext } from '../../context/ThemesContext';

const Card = () => {
  const { theme } = useContext(GlobalThemeContext);
  return (
    <Container>
      <h1>
        Hello World!
        {theme === darkTheme  ? (
          <span role="img" aria-label="ovelha">
            {" "}
            🌚
          </span>
        ) : (
          <span role="img" aria-label="ovelha">
            {" "}
            🌝
          </span>
        )}
      </h1>

      <Paragraph>
      Dark mode makes web pages easier for me to read and helps my eyes feel more relaxed. Many websites, including YouTube and Twitter, have implemented it already, and we’re starting to see it trickle onto many other sites as well. 
      <hr/>
      This React app was built with <strong>Styled Components</strong>, <strong>React Hooks</strong> and <strong>Context API</strong>.
      </Paragraph>
    </Container>
  )
}

export default Card
