import { createMuiTheme } from "@material-ui/core/styles";
import cyan from "@material-ui/core/colors/cyan";

const cyanMain = cyan[800]

export default createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: cyanMain,
    }
  }
});