import { createMuiTheme } from "@material-ui/core/styles";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#375A7F",
    },
    secondary: {
      main: "#444444",
    },
    error: {
      main: "#e74c3c",
    },
    warning: {
      main: "#f39c12",
    },
    info: {
      main: "#3498db",
    },
    success: {
      main: "#00bc8c",
    },
    background: {
      default: "#222222",
      paper: "#303030",
    },
  },
});

export default darkTheme;
