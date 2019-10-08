import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import MainForm from "./form";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainForm />
    </ThemeProvider>
  );
};

export default App;