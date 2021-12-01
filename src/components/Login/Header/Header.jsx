import React, { useEffect } from "react";
import { Container } from "./Header.styled";
import contactLogo from "../../../assets/images/contacts-icon-png.jpg";
import loginIcon from "../../../assets/images/login.png";
import lightThemeIcon from "../../../assets/images/brightness.png";
import darkThemeIcon from "../../../assets/images/night-mode.png";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/action/auth.action";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Header = ({ onThemeToggle, mode }) => {
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(login());
  };

  const accessToken = useSelector((state) => state.auth.accessToken);

  const history = useHistory();

  useEffect(() => {
    if (accessToken) {
      history.push("/home");
    }
  }, [accessToken, history]);

  return (
    <Container>
      <div className="welcome">
        <img src={contactLogo} alt="Contact logo" />
        <span>Welcome to contacts app</span>
      </div>
      <div className="icons">
        <img
          src={loginIcon}
          alt="Login"
          className="login"
          onClick={loginHandler}
        />
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
