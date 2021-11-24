import { useState } from "react";
import { ThemeProvider } from "styled-components";
import HomeScreen from "./Home/HomeScreen";
import { lightTheme, darkTheme, GlobalStyles } from "./Common/Theme";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <HomeScreen onThemeToggle={toggleTheme} theme={theme} />
    </ThemeProvider>
  );
};

export default App;
