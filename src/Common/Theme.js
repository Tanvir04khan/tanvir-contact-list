import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  text: "#363537",
  background: "#363537",
  color: "#0a66c2",
};

export const darkTheme = {
  body: "#363537",
  text: "#fafafa",
  background: "#999",
  bgColor: "#717a83",
};

export const GlobalStyles = createGlobalStyle`
body{
    background-color: ${(props) => props.theme.body};
}
`;
