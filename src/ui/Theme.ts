import { createMuiTheme, Theme } from "@material-ui/core/styles";

const orange = "#f86a28";
const gray = "#5d6d84";

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: `${orange}`
    },
    secondary: {
      main: `${gray}`
    }
  },
  typography: {
    //fontFamily: "Open Sans, Helvetica",
    h4: { fontSize: "35px" },
    subtitle1: {}
  }
});

export default theme;
