import { tags, delimiters } from "../appConfig";

export default values => {
  let tag = tags[values.tag];
  let delimiter =
    values.delimiter === "Special Character"
      ? values.special
      : new RegExp(delimiters[values.delimiter]);
  let inputStrArr = values.input.split(delimiter).filter(elem => elem !== "");
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
