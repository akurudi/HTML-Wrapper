import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./utils/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "./components/layout";
import Header from "./components/header";
import FormMain from "./components/formMain";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout header={<Header />}>
        <FormMain />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
