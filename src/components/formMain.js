import React from "react";
import { Grid, Slide } from "@material-ui/core";
import PaperCustom from "./paperCustom";
import FormSelectTag from "./formSelectTag";
import FormSelectDelimiter from "./formSelectDelimiter";
import FormTextClass from "./formTextClass";
import FormTextInput from "./formTextInput";
import FormTextOutput from "./formTextOutput";
import getHTML from "../utils/getHTML";

export default () => {
  const [values, setValues] = React.useState({
    tag: "UL/LI",
    delimiter: "Newline",
    special: "",
    class: "",
    input: ""
  });

  const [results, setResults] = React.useState("");

  const handleChange = (name, value) => {
    setValues(oldValues => ({
      ...oldValues,
      [name]: value
    }));
  };

  React.useEffect(() => {
    if (values.input !== "") {
      let html = getHTML(values);
      setResults(html);
    } else {
      setResults("");
    }
  }, [values, results]);

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <PaperCustom background="main" paperElevation={20}>
          <form autoComplete="off">
            <PaperCustom background="dark" paperElevation={10}>
              <FormSelectTag
                value={values.tag}
                handleTagChange={handleChange}
              />
            </PaperCustom>
            <PaperCustom background="dark" paperElevation={10}>
              <FormSelectDelimiter
                value={values.delimiter}
                handleDelimiterChange={handleChange}
              />
            </PaperCustom>
            <PaperCustom background="dark" paperElevation={10}>
              <FormTextClass
                value={values.class}
                handleClassChange={handleChange}
              />
            </PaperCustom>
            <PaperCustom background="dark" paperElevation={10}>
              <FormTextInput
                value={values.input}
                handleInputChange={handleChange}
              />
            </PaperCustom>
            <Slide
              in={results === "" ? false : true}
              direction="up"
              timeout={{ enter: 500 }}
              mountOnEnter
              unmountOnExit
            >
              <PaperCustom ref={React.createRef()} background="dark" paperElevation={10}>
                <FormTextOutput value={results} />
              </PaperCustom>
            </Slide>
          </form>
        </PaperCustom>
      </Grid>
    </Grid>
  );
};
