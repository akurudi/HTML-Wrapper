import React from "react";
import {
  TextField,
  FormControl,
  FormHelperText,
  Collapse
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  formControl: {
    //padding: theme.spacing(1)
  }
}));

export default props => {
  const classes = useStyles();
  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    props.handleSpecialFieldChange(name, value);
  };
  return (
    <Collapse in={props.showSpecialField}>
      <FormControl
        variant="filled"
        className={classes.formControl}
        fullWidth={true}
        required
      >
        <TextField
          label="Special Character Delimiter"
          className={classes.textField}
          variant="outlined"
          name="special"
          id="form-class-value"
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
        />
        <FormHelperText>
          Special character delimiter used to split your input string before
          wrapping it with tags.
        </FormHelperText>
      </FormControl>
    </Collapse>
  );
};
