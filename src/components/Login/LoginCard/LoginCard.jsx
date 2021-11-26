import React from "react";
import contactLogo from "../../../assets/images/contacts-icon-png.jpg";
import googleLogo from "../../../assets/svg/google.svg";
import { Button, Main } from "./LoginCard.styled";

const LoginCard = ({ mode, theme }) => {
  return (
    <div className={mode === "light" ? "wrapper" : "darkmode"}>
      <Main theme={theme}>
        <div className="main">
          <h1>Contact app</h1>
          <img src={contactLogo} alt="Contact" />
        </div>
        <Button>
          <img src={googleLogo} alt="Google logo" />
          <p>Login with Google</p>
        </Button>
      </Main>
    </div>
  );
};

export default LoginCard;
