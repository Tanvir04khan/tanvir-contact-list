import React from "react";
import NavBar from "./NavBar/NavBar";

const HomeScreen = ({ onThemeToggle, theme }) => {
  return <NavBar onThemeToggle={onThemeToggle} theme={theme} />;
};

export default HomeScreen;
