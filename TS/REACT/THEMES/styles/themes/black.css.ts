import { createTheme } from "@mui/material/styles";

export const dark_theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00ffc3ff",
    },
    secondary: {
      main: "#00aa50ff",
    },
    background: {
      default: "#121212",
      paper: "#202020",
    },
  },
});
