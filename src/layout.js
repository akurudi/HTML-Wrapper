import React from "react";
import { Container } from "@material-ui/core";

export default (props) => {
  return (
    <>
      <header>{props.header}</header>
      <Container>{props.children}</Container>
      <footer>{props.footer}</footer>
    </>
  );
};
