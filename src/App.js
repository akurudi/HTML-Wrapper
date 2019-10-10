import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import cyan from "@material-ui/core/colors/cyan";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "./layout";
import MainForm from "./form";

const cyanMain = cyan[800]

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: cyanMain,
    }
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout header={null} footer={null}>
        <MainForm />
      </Layout>
    </ThemeProvider>
  );
};

export default App;