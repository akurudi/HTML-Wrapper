import React from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormHelperText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import FormTextSpecial from "./formTextSpecial";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

export default props => {
  const classes = useStyles();
  const [showField, setField] = React.useState(false);
  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    if (value === "Special Character") {
      setField(true);
    } else {
      setField(false);
    }
    props.handleDelimiterChange(name, value);
  };

  return (
    <>
      <FormControl
        variant="outlined"
        className={classes.formControl}
        fullWidth={true}
        required
      >
        <InputLabel htmlFor="form-delimiter">Delimiter</InputLabel>
        <Select
          value={props.value}
          inputProps={{
            name: "delimiter",
            id: "form-delimiter"
          }}
          onChange={handleChange}
        >
          <MenuItem value="Newline">Newline</MenuItem>
          <MenuItem value="Space">Space</MenuItem>
          <MenuItem value="Special Character">Special Character</MenuItem>
        </Select>
        <FormHelperText>
          Token used to split your input string before wrapping it with tags.
        </FormHelperText>
      </FormControl>
      <FormTextSpecial
        showSpecialField={showField}
        handleSpecialFieldChange={props.handleDelimiterChange}
      />
    </>
  );
};
