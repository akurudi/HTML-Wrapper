import React from "react";
import { Grid, Slide } from "@material-ui/core";
import FormSelectTag from "./formSelectTag";
import FormSelectDelimiter from "./formSelectDelimiter";
import FormTextClass from "./formTextClass";
import FormTextInput from "./formTextInput";
import FormTextOutput from "./formTextOutput";
import PaperCustom from "./paperCustom";
import config from "./appConfig";

const { tags, delimiters } = config;

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
    let getHTML = () => {
      let tag = tags[values.tag];
      let delimiter =
        values.delimiter === "Special Character"
          ? values.special
          : new RegExp(delimiters[values.delimiter]);
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
  }, [values, results]);

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <PaperCustom background="main" paperElevation={20}>
          <form autoComplete="off">
            <PaperCustom background="dark" paperElevation={10}>
              <FormSelectTag
                options={tags}
                value={values.tag}
                handleTagChange={handleChange}
              />
            </PaperCustom>
            <PaperCustom background="dark" paperElevation={10}>
              <FormSelectDelimiter
                options={delimiters}
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
