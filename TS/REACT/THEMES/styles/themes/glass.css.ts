import { createTheme } from "@mui/material/styles";

export const glass_theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00ffddd2",
      light: "#00ffea93",
    },
    secondary: {
      main: "#0099ffc7",
      light: "#00aaff6c",
    },
    background: {
      default: "#00241eff",
      paper: "#223a3aff",
    },
    text: {
      primary: "#ffffffff",
      secondary: "#cfffe9ff",
      disabled: "#4e4e4eff",
    }
  },
});
