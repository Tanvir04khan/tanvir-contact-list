import React from "react";
import Header from "./Header/Header";
import LoginCard from "./LoginCard/LoginCard";

const Login = ({ onThemeToggle, mode, theme }) => {
  return (
    <>
      <Header onThemeToggle={onThemeToggle} mode={mode} />
      <LoginCard mode={mode} theme={theme} />
    </>
  );
};

export default Login;
