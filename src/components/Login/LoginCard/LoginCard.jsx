import React, { useEffect } from "react";
import contactLogo from "../../../assets/images/contacts-icon-png.jpg";
import googleLogo from "../../../assets/svg/google.svg";
import { Button, Main } from "./LoginCard.styled";
import { login } from "../../../redux/action/auth.action";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const LoginCard = ({ mode, theme }) => {
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
    <div className={mode === "light" ? "wrapper" : "darkmode"}>
      <Main theme={theme}>
        <div className="main">
          <h1>Contact app</h1>
          <img src={contactLogo} alt="Contact" />
        </div>
        <Button onClick={loginHandler}>
          <img src={googleLogo} alt="Google logo" />
          <p>Login with Google</p>
        </Button>
      </Main>
    </div>
  );
};

export default LoginCard;
