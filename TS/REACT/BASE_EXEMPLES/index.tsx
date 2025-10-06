import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { useTheme } from "../hooks/useTheme";
import Header from "../components/header";
import { useEffect } from "react";
import { AppRoutes } from "../routes";

export default function App() {
  const { key, theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme(key);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />

      <AppRoutes />
    </ThemeProvider>
  );
}
