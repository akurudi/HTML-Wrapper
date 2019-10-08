import React from "react";
import { TextField, FormControl, FormHelperText } from "@material-ui/core";
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
    props.handleInputChange(name, value);
  };
  return (
    <FormControl
      variant="filled"
      className={classes.formControl}
      fullWidth={true}
      required
    >
      <TextField
        id="form-input"
        label="Input"
        multiline
        rows="10"
        className={classes.textField}
        required
        variant="outlined"
        name="input"
        value={props.value}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
      />
      <FormHelperText>
        Unformatted input string that will be split using delimiter selected
        above and wrapped using HTML tag selected above.
      </FormHelperText>
    </FormControl>
  );
};
