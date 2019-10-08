import React from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormHelperText,
  Paper
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
  }
}));

export default props => {
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
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
        <InputLabel ref={inputLabel} htmlFor="form-tag">HTML Tag</InputLabel>
        <Select
          value={props.value}
          inputProps={{
            name: "tag",
            id: "form-tag"
          }}
          onChange={handleChange}
          fullWidth={true}
          labelWidth={labelWidth}
        >
          <MenuItem value="UL/LI">UL/LI</MenuItem>
          <MenuItem value="SPAN">SPAN</MenuItem>
          <MenuItem value="P">P</MenuItem>
        </Select>
        <FormHelperText>Tag used to wrap your input string.</FormHelperText>
    </FormControl>
  );
};
