import React from "react";
import { Paper, Grid, Container, Slide } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import FormSelectTag from "./formSelectTag";
import FormSelectDelimiter from "./formSelectDelimiter";
import FormTextClass from "./formTextClass";
import FormTextInput from "./formTextInput";
import FormTextOutput from "./formTextOutput";

const PaperContainer = withStyles(theme => ({
  root: {
    background: theme.palette.primary.main,
    margin: theme.spacing(2),
    padding: theme.spacing(2)
  }
}))(Paper);

const PaperForm = withStyles(theme => ({
  root: {
    background: theme.palette.primary.dark,
    margin: theme.spacing(2),
    padding: theme.spacing(2)
  }
}))(Paper);

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
          <PaperContainer elevation={20}>
            <form autoComplete="off">
              <PaperForm elevation={5}>
                <FormSelectTag
                  value={values.tag}
                  handleTagChange={handleChange}
                />
              </PaperForm>
              <PaperForm elevation={5}>
                <FormSelectDelimiter
                  value={values.delimiter}
                  handleDelimiterChange={handleChange}
                />
              </PaperForm>
              <PaperForm elevation={5}>
                <FormTextClass
                  value={values.class}
                  handleClassChange={handleChange}
                />
              </PaperForm>
              <PaperForm elevation={5}>
                <FormTextInput
                  value={values.input}
                  handleInputChange={handleChange}
                />
              </PaperForm>
              <Slide
                in={results === "" ? false : true}
                direction="up"
                timeout={{ enter: 500 }}
                mountOnEnter
                unmountOnExit
              >
                <PaperForm elevation={5}>
                  <FormTextOutput value={results} />
                </PaperForm>
              </Slide>
            </form>
          </PaperContainer>
        </Grid>
      </Grid>
    </Container>
  );
};
