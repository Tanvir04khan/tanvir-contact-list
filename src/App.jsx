import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import HomeScreen from "./components/Home/HomeScreen";
import Login from "./components/Login/Login";
import { lightTheme, darkTheme } from "./Common/Theme";
import { Switch, Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

import "./App.css";
import FormField from "./components/Form/FormField";
import { useSelector } from "react-redux";

const App = () => {
  const [mode, setMode] = useState("light");
  const [isInputModalVisible, setIsInputModalVisible] = useState(false);
  const [isPosting, setIsPosting] = useState(false);
  const [contactToBeEdited, setContactToBeEdited] = useState({});

  const { data } = useSelector((state) => state.contactList);

  const getContactId = (id) => {
    const contactToBeEdited = data.filter((contact) => contact.id === id);
    setContactToBeEdited(contactToBeEdited[0]);
  };

  const { accessToken } = useSelector((state) => state.auth);

  const history = useHistory();

  useEffect(() => {
    if (!accessToken) {
      history.push("/login");
    }
  }, [history, accessToken]);

  const toggleInputModal = () => {
    setIsInputModalVisible((prevVal) => !prevVal);
  };

  const toggleTheme = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };

  const toggleIsPosting = (value) => {
    setIsPosting(value);
  };

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <div className={isInputModalVisible ? "visible" : "invisible"}>
        <FormField
          onToggleInputModal={toggleInputModal}
          isPosting={isPosting}
          contactToBeEdited={contactToBeEdited}
        />
      </div>
      <Switch>
        <Route path="/login" exact>
          <Login onThemeToggle={toggleTheme} mode={mode} />
        </Route>
        <Route path="/home">
          <div className={mode}>
            <HomeScreen
              onThemeToggle={toggleTheme}
              mode={mode}
              onToggleInputModal={toggleInputModal}
              onToggleIsPosting={toggleIsPosting}
              getContactId={getContactId}
            />
          </div>
        </Route>

        <Redirect to="/home" />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
