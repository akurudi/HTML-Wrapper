import React from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormHelperText
} from "@material-ui/core";

export default props => {
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    props.handleTagChange(name, value);
  };
  return (
    <FormControl variant="outlined" fullWidth={true} required>
      <InputLabel ref={inputLabel} htmlFor="form-tag">
        HTML Tag
      </InputLabel>
      <Select
        value={props.value}
        inputProps={{
          name: "tag",
          id: "form-tag"
        }}
        onChange={handleChange}
        labelWidth={labelWidth}
      >
        {Object.keys(props.options).map(option => (
          <MenuItem value={option} key={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>Tag used to wrap your input string.</FormHelperText>
    </FormControl>
  );
};
