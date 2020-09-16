import styled from "styled-components";

export const Container = styled.div`
  margin: 0 100px;
  padding: 40px;
  background: ${(props) => props.theme.colors.background_secundary};
  border-radius: 10px;
  h1 {
    margin-bottom: 15px;
    color: ${(props) => props.theme.colors.header}
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.colors.text};
    hr {
      margin: 10px 0;
    }
`