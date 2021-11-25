import React from "react";
import { Container } from "./Header.styled";
import contactLogo from "../../../assets/images/contacts-icon-png.jpg";
import loginIcon from "../../../assets/images/login.png";
import lightThemeIcon from "../../../assets/images/brightness.png";
import darkThemeIcon from "../../../assets/images/night-mode.png";

const Header = ({ onThemeToggle, mode }) => {
  return (
    <Container>
      <div className="welcome">
        <img src={contactLogo} alt="Contact logo" />
        <span>Welcome to contacts app</span>
      </div>
      <div className="icons">
        <img src={loginIcon} alt="Login" className="login" />
        <img
          src={mode === "light" ? darkThemeIcon : lightThemeIcon}
          onClick={onThemeToggle}
          alt="Mode"
          className="mode"
        />
      </div>
    </Container>
  );
};

export default Header;
