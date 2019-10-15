import React from "react";
import {Helmet} from "react-helmet";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./utils/theme"
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "./components/layout";
import Header from "./components/header";
import FormMain from "./components/formMain";

const App = () => {
  return (
    <>
    <Helmet>
      <title>HTML Wrapper</title>
    </Helmet>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout header={<Header />} footer={null}>
        <FormMain />
      </Layout>
    </ThemeProvider>
    </>
  );
};

export default App;