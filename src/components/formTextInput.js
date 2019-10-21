import React from "react";
import PropTypes from 'prop-types';
import { TextField, FormControl, FormHelperText } from "@material-ui/core";

let FormTextInput = props => {
  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    props.handleInputChange(name, value);
  };
  return (
    <FormControl
      variant="filled"
      fullWidth={true}
      required
    >
      <TextField
        id="form-input"
        label="Input"
        multiline
        rows="10"
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


FormTextInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
}

export default FormTextInput;
