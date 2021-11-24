import React from "react";
import { Nav, Logo } from "./NavBar.styled";
import contactListLogo from "../../assets/images/contacts-icon-png.jpg";
import darkModeIcon from "../../assets/images/night-mode.png";
import brightModeIcon from "../../assets/images/brightness.png";
import hamburgurMenu from "../../assets/images/hamburgur-menu.png";

const NavBar = ({ onThemeToggle, theme }) => {
  return (
    <Nav>
      <img src={hamburgurMenu} alt="Menu" className="menu" />
      <Logo>
        <img src={contactListLogo} alt="Contact list logo" />
        <h1>Contact List</h1>
      </Logo>
      <img
        src={theme === "dark" ? brightModeIcon : darkModeIcon}
        alt="Dark mode logo"
        onClick={onThemeToggle}
      />
    </Nav>
  );
};

export default NavBar;
