import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
import MainForm from "./form";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainForm />
    </ThemeProvider>
  );
};

export default App;