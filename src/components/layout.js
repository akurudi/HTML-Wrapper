import React from "react";
import { Container } from "@material-ui/core";

export default props => {
  return (
    <Container>
      <header>{props.header}</header>
      {props.children}
      <footer>{props.footer}</footer>
    </Container>
  );
};
