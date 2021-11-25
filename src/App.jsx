import { useState } from "react";
import { ThemeProvider } from "styled-components";
import HomeScreen from "./components/Home/HomeScreen";
import { lightTheme, darkTheme } from "./Common/Theme";

import "./App.css";

const App = () => {
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <div className={mode === "light" ? mode : mode + " dark"}>
        <HomeScreen onThemeToggle={toggleTheme} mode={mode} />
      </div>
    </ThemeProvider>
  );
};

export default App;
