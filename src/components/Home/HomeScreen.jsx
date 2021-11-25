import React from "react";
import Contact from "./Contact/Contact";
import NavBar from "./NavBar/NavBar";
import { Container } from "./HomeScreen.styled";

const HomeScreen = ({ onThemeToggle, theme, mode }) => {
  return (
    <>
      <NavBar onThemeToggle={onThemeToggle} mode={mode} />
      <Container theme={theme}>
        {[...new Array(20)].map((contact, ind) => (
          <Contact theme={theme} key={ind} />
        ))}
      </Container>
    </>
  );
};

export default HomeScreen;
