import React from "react";
import { Paper, Grid, Container, Box } from "@material-ui/core";
import FormSelectTag from "./formSelectTag";
import FormSelectDelimiter from "./formSelectDelimiter";
import FormTextClass from "./formTextClass";
import FormTextInput from "./formTextInput";
import FormTextResults from "./formTextResults";

export default () => {
  const config = {
    tag: {
      "UL/LI": "ul",
      P: "p",
      SPAN: "span"
    },
    delimiter: {
      Newline: "\\n",
      Space: "\\s",
      "Special Character": ":"
    }
  };

  const [values, setValues] = React.useState({
    tag: "UL/LI",
    delimiter: "Newline",
    special: "",
    class: "",
    input: ""
  });

  const handleChange = (name, value) => {
    setValues(oldValues => ({
      ...oldValues,
      [name]: value
    }));
  };

  const [results, setResults] = React.useState("");

  React.useEffect(() => {
    let getHTML = () => {
      let tag = config.tag[values.tag];
      let delimiter =
        values.delimiter === "Special Character"
          ? values.special
          : new RegExp(config.delimiter[values.delimiter]);
      let inputStrArr = values.input
        .split(delimiter)
        .filter(elem => elem !== "");
      if (tag === "ul") {
        let outputStrArr = inputStrArr.map(ip => {
          return `\n<li>${ip.trim()}</li>`;
        });
        return `<${tag}${
          values.class !== "" ? ' class="' + values.class + '"' : ""
        }> ${outputStrArr.join("")} \n</${tag}>`;
      } else {
        let outputStrArr = inputStrArr.map(ip => {
          return `<${tag}${
            values.class !== "" ? ' class="' + values.class + '"' : ""
          }>${ip.trim()}</${tag}>\n`;
        });
        return outputStrArr.join("");
      }
    };
    if (values.input !== "") {
      let html = getHTML();
      setResults(html);
    } else {
      setResults("");
    }
  }, [values, results, config]);
  return (
    <Container>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Paper elevation={10}>
            <Box p={2} m={2}>
              <form autoComplete="off">
                <Paper elevation={5}>
                  <Box p={2} m={1}>
                    <FormSelectTag
                      value={values.tag}
                      handleTagChange={handleChange}
                    />
                  </Box>
                </Paper>
                <Paper elevation={5}>
                  <Box p={2} m={1}>
                    <FormSelectDelimiter
                      value={values.delimiter}
                      handleDelimiterChange={handleChange}
                    />
                  </Box>
                </Paper>
                <Paper elevation={5}>
                  <Box p={2} m={1}>
                    <FormTextClass
                      value={values.class}
                      handleClassChange={handleChange}
                    />
                  </Box>
                </Paper>
                <Paper elevation={5}>
                  <Box p={2} m={1}>
                    <FormTextInput
                      value={values.input}
                      handleInputChange={handleChange}
                    />
                  </Box>
                </Paper>
                <Paper elevation={5}>
                  <Box p={2} m={1} color="secondary.main">
                    <FormTextResults value={results} />
                  </Box>
                </Paper>
              </form>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
