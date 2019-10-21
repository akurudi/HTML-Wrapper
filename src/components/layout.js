import React from "react";
import PropTypes from 'prop-types';
import { Container } from "@material-ui/core";
import PageTitle from "./pageTitle"

let Layout = props => {
  return (
    <Container>
      <PageTitle title="HTML Wrapper" />
      <header>{props.header}</header>
      {props.children}
    </Container>
  );
};

Layout.propTypes = {
  header: PropTypes.element.isRequired,
  children: PropTypes.element
};

export default Layout;