import React from "react";
import PropTypes from 'prop-types';
import {
  TextField,
  FormControl,
  FormHelperText
} from "@material-ui/core";

let FormTextSpecial = props => {
  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    props.handleSpecialFieldChange(name, value);
  };
  return (
      <FormControl
        variant="filled"
        fullWidth={true}
        required
      >
        <TextField
          label="Special Character Delimiter"
          variant="outlined"
          name="special"
          id="form-class-value"
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          required
        />
        <FormHelperText>
          Special character delimiter used to split your input string before
          wrapping it with tags.
        </FormHelperText>
      </FormControl>
  );
};

FormTextSpecial.propTypes = {
  handleSpecialFieldChange: PropTypes.func.isRequired
}

export default FormTextSpecial;
