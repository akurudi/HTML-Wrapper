import React from 'react';
import { Helmet } from "react-helmet";

export default (props) => (
  <Helmet>
    <title>{props.title}</title>
  </Helmet>
);
