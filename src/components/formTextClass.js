import React from "react";
import PropTypes from 'prop-types';
import {
  TextField,
  FormControl,
  FormHelperText
} from "@material-ui/core";

let FormTextClass = props => {
  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value.trim();
    props.handleClassChange(name, value);
  };
  return (
    <FormControl
      variant="filled"
      fullWidth={true}
      required
    >
      <TextField
        label="Class Value"
        variant="outlined"
        name="class"
        id="form-class-value"
        value={props.value}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
      />
      <FormHelperText>
        Optional value if present, will be added as a class attribute to the
        tag.
      </FormHelperText>
    </FormControl>
  );
};

FormTextClass.propTypes = {
  value: PropTypes.string.isRequired,
  handleClassChange: PropTypes.func.isRequired
}

export default FormTextClass;