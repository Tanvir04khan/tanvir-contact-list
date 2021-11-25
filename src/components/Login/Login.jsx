import React from "react";
import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";

const Login = ({ onThemeToggle, mode, theme }) => {
  return (
    <>
      <Header onThemeToggle={onThemeToggle} mode={mode} />
      <MainContent mode={mode} theme={theme} />
    </>
  );
};

export default Login;
