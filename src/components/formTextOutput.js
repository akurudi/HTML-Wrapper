import React from "react";
import { Box, FormControl, FormHelperText } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import selectAllText from "../utils/selectAllText"

export default props => {
  const useStyles = makeStyles({
    root: {
      background: "#303030db"
    }
  });
  const classes = new useStyles();
  return (
    <FormControl
      variant="filled"
      fullWidth={true}
      label="Output"
      required
    >
      <pre className={classes.root} onClick={selectAllText}>
        <Box minHeight={200} p={1}>
          {props.value}
        </Box>
      </pre>
      <FormHelperText>
        Formatted output string wrapped using HTML tag selected above.
      </FormHelperText>
    </FormControl>
  );
};
