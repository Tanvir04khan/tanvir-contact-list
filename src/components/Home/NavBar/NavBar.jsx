import React from "react";
import { Nav, Logo } from "./NavBar.styled";
import contactListLogo from "../../../assets/images/contacts-icon-png.jpg";
import darkModeIcon from "../../../assets/images/night-mode.png";
import brightModeIcon from "../../../assets/images/brightness.png";
import logOutIcon from "../../../assets/images/logout.png";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/action/auth.action";
import { CONTACT_LIST_NULL } from "../../../redux/actionTypes";

const NavBar = ({ onThemeToggle, mode }) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    dispatch({
      type: CONTACT_LIST_NULL,
      payload: [],
    });
  };

  return (
    <Nav>
      <Logo>
        <img src={contactListLogo} alt="Contact list logo" />
        <h1>Contacts</h1>
      </Logo>
      <div>
        <img
          src={mode === "dark" ? brightModeIcon : darkModeIcon}
          alt="Dark mode logo"
          className="theme"
          onClick={onThemeToggle}
        />
        <div className="logout">
          <img src={logOutIcon} alt="Log Out" onClick={logoutHandler} />
        </div>
      </div>
    </Nav>
  );
};

export default NavBar;
