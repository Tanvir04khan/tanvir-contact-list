import React from "react";
import Contact from "./Contact/Contact";
import NavBar from "./NavBar/NavBar";
import addIcon from "../../assets/images/add.png";
import { Container, Wrapper } from "./HomeScreen.styled";

const HomeScreen = ({ onThemeToggle, theme, mode }) => {
  return (
    <Wrapper>
      <NavBar onThemeToggle={onThemeToggle} mode={mode} />
      <Container theme={theme}>
        {[...new Array(20)].map((contact, ind) => (
          <Contact theme={theme} key={ind} />
        ))}
      </Container>
      <img src={addIcon} alt="Add" className="add" />
    </Wrapper>
  );
};

export default HomeScreen;
