import React from "react";
import PropTypes from 'prop-types';
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: ({ background }) => {
    const themePalette = theme.palette.primary[background];
    return {
      backgroundColor: themePalette,
      margin: theme.spacing(2),
      padding: theme.spacing(2)
    };
  }
}));

let PaperCustom = React.forwardRef(
  (props, ref) => {
    const classes = useStyles(props);
    return <Paper className={classes.root} ref={ref} elevation={props.paperElevation}>{props.children}</Paper>;
  }
)


PaperCustom.propTypes = {
  background :PropTypes.string,
  paperElevation: PropTypes.number,
  children: PropTypes.element
}

export default PaperCustom;