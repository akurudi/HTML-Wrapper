import React from "react";
import { Container } from "@material-ui/core";
import PageTitle from "./pageTitle"

export default props => {
  return (
    <Container>
      <PageTitle title="HTML Wrapper" />
      <header>{props.header}</header>
      {props.children}
      <footer>{props.footer}</footer>
    </Container>
  );
};
