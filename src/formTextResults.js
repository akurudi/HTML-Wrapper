import React from "react";
import { TextField, FormControl, FormHelperText } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  formControl: {
    //padding: theme.spacing(1)
  }
}));


const CssTextField = withStyles({
  root: {
    "& label.MuiFormLabel-root": {
      color: "green"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "green",
        borderWidth: "2px"
      },
      "&:hover fieldset": {
        borderColor: "green",
        borderWidth: "4px"
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
        borderWidth: "4px"
      }
    }
  }
})(TextField);

export default props => {
  const classes = useStyles();
  return (
    <FormControl
      variant="filled"
      className={classes.formControl}
      fullWidth={true}
      required
    >
      <CssTextField
        id="form-results"
        className={classes.margin}
        label="Results"
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
