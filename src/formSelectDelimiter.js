import React from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormHelperText,
  Box,
  Collapse
} from "@material-ui/core";
import FormTextSpecial from "./formTextSpecial";

export default props => {
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
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
        fullWidth={true}
        required
      >
        <InputLabel ref={inputLabel} htmlFor="form-delimiter">
          Delimiter
        </InputLabel>
        <Select
          value={props.value}
          inputProps={{
            name: "delimiter",
            id: "form-delimiter"
          }}
          onChange={handleChange}
          labelWidth={labelWidth}
        >
          <MenuItem value="Newline">Newline</MenuItem>
          <MenuItem value="Space">Space</MenuItem>
          <MenuItem value="Special Character">Special Character</MenuItem>
        </Select>
        <FormHelperText>
          Token used to split your input string before wrapping it with tags.
        </FormHelperText>
      </FormControl>
      <Collapse in={showField}>
        <Box p={2} m={1} color="secondary.main">
          <FormTextSpecial
            handleSpecialFieldChange={props.handleDelimiterChange}
          />
        </Box>
      </Collapse>
    </>
  );
};
