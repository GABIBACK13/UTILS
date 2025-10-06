import { createTheme } from "@mui/material/styles";

export const light_theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00ffaaff",
      dark: "#00c6aaff",
      light: "#66fff2ff",
    },
    secondary: {
      main: "#02ad74ff",
      dark: "#027a4dff",
      light: "#5ee2a9ff",
    },
    background: {
      default: "#f0f0f0ff",
      paper: "#ebebebff",
    },
    text: {
      primary: "#000000ff",
      secondary: "#333333ff",
      disabled: "#777777ff",
    },
    divider: "#ccccccff",
    error: {
      main: "#ff0033ff",
      light: "#ff9e9eff",
      dark: "#5c0011ff",
    },
    success: {
      main: "#00cc66ff",
      light: "#66ffb3ff",
    },
    info: {
      main: "#3399ffff",
      light: "#66ccffff",
    },
    warning: {
      main: "#ff9900ff",
      light: "#ffcc66ff",
    },
  },
  cssVariables: {},
  typography: {
    fontSize: 15,
    fontFamily: "'Winky Rough', sans-serif",
    fontWeightBold: 700,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
  },
});

// HTML HEAD FONT REQUIREMENTS
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Winky+Rough:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
