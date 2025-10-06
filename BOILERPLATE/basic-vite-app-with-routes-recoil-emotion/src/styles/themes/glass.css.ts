import { createTheme } from "@mui/material/styles";

export const glass_theme = createTheme({
  palette: {
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
    },
  },
  typography: {
    fontSize: 15,
    fontFamily: "'Winky Rough', sans-serif",
    fontWeightBold: 700,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
  },
});
