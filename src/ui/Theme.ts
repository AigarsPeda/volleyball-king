import { createMuiTheme, Theme } from "@material-ui/core/styles";

const orange = "#f86a28";
const red = "rgba(232,48,58,1)";

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: `${orange}`
    },
    secondary: {
      main: `${red}`
    }
  },
  typography: {
    //fontFamily: "Open Sans, Helvetica",
    h4: { fontSize: "35px" },
    subtitle1: {}
  }
});

export default theme;
