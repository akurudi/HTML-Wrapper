import React from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

export default (props) => {
  const classes = useStyles();
  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    props.handleTagChange(name, value);
  };
  return (
    <FormControl
      variant="outlined"
      className={classes.formControl}
      fullWidth={true}
      required
    >
      <InputLabel htmlFor="form-tag">HTML Tag</InputLabel>
      <Select
        value={props.value}
        inputProps={{
          name: "tag",
          id: "form-tag"
        }}
        onChange={handleChange}
      >
        <MenuItem value="UL/LI">UL/LI</MenuItem>
        <MenuItem value="SPAN">SPAN</MenuItem>
        <MenuItem value="P">P</MenuItem>
      </Select>
      <FormHelperText>Tag used to wrap your input string.</FormHelperText>
    </FormControl>
  );
};
