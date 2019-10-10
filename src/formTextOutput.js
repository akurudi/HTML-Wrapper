import React from "react";
import { TextField, FormControl, FormHelperText } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const CssTextField = withStyles({
  root: {
    background: "#303030db",
    "& label.MuiFormLabel-root": {
      color: "white"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
        borderWidth: "2px"
      },
      "&:hover fieldset": {
        borderColor: "white",
        borderWidth: "4px"
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
        borderWidth: "4px"
      }
    }
  }
})(TextField);

export default props => {
  return (
    <FormControl
      variant="filled"
      fullWidth={true}
      required
    >
      <CssTextField
        id="form-results"
        label="Output"
        multiline
        rows="10"
        variant="outlined"
        name="results"
        value={props.value}
        InputProps={{
          readOnly: true,
        }}
        InputLabelProps={{ shrink: true }}
      />
      <FormHelperText>
        Formatted output string wrapped using HTML tag selected above.
      </FormHelperText>
    </FormControl>
  );
};
