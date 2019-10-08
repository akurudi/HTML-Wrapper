import React from "react";
import {
  TextField,
  FormControl,
  FormHelperText
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
    const value = event.target.value.trim();
    props.handleClassChange(name, value);
  };
  return (
    <FormControl
      variant="filled"
      className={classes.formControl}
      fullWidth={true}
      required
    >
      <TextField
        label="Class Value"
        className={classes.textField}
        variant="outlined"
        name="class"
        id="form-class-value"
        value={props.value}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
      />
      <FormHelperText>
        Optional value, if present will be added as a class attribute to the
        tag.
      </FormHelperText>
    </FormControl>
  );
};
