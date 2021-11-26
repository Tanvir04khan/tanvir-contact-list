import { useState } from "react";
import { ThemeProvider } from "styled-components";
import HomeScreen from "./components/Home/HomeScreen";
import Login from "./components/Login/Login";
import { lightTheme, darkTheme } from "./Common/Theme";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

const App = () => {
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <Switch>
        <Route path="/login" exact>
          <Login onThemeToggle={toggleTheme} mode={mode} />
        </Route>
        <Route path="/home">
          <div className={mode === "light" ? mode : mode + " dark"}>
            <HomeScreen onThemeToggle={toggleTheme} mode={mode} />
          </div>
        </Route>
        <Redirect to="/login" />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
