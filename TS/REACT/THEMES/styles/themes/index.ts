import { dark_theme } from "./black.css";
import { light_theme } from "./light.css";
import { glass_theme } from "./glass.css";
import type { Theme } from "@emotion/react";

export type AppThemes = "light" | "dark" | "glass";

// Mocking
export const themesMap: Record<AppThemes, Theme> = {
  dark: dark_theme,
  light: light_theme,
  glass: glass_theme,
};
