import { createMuiTheme, Theme } from "@material-ui/core/styles";

// const blue = "#6580be";
// const green = "#1bc690";

const theme: Theme = createMuiTheme({
  palette: {
    // primary: {
    //   main: `${blue}`
    // },
    // secondary: {
    //   main: `${green}`
    // }
  },
  typography: {
    //fontFamily: "Open Sans, Helvetica",
    h4: { fontSize: "35px" },
    subtitle1: {}
  }
});

export default theme;
