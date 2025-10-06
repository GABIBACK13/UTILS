import Button from "@mui/material/Button";
import { useTheme } from "../../hooks/useTheme";

export default function ThemeSwitcher() {
  const { key, setTheme } = useTheme();

  return (
    <div style={{ padding: "1rem" }}>
      <p>Tema atual: {key}</p>
      <Button
        variant="contained"
        onClick={() => setTheme(key === "light" ? "dark" : key === "dark" ? "glass" : "light")}
      >
        Trocar Tema
      </Button>
    </div>
  );
}
