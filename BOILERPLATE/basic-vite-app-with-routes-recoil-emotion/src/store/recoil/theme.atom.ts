import { atom } from "recoil";
import type { AppThemes } from "../../styles/themes";
import { KEYS } from "../KEYS";

function getInitialTheme(): AppThemes {
  const savedTheme = localStorage.getItem(KEYS.THEME_TOKEN) as AppThemes | null;
  if (savedTheme) return savedTheme;

  if (window.matchMedia("(prefers-color-scheme:  dark)").matches) {
    return "dark";
  }

  return "light";
}

export const themeAtom = atom<AppThemes>({
  key: KEYS.THEME_TOKEN,
  default: getInitialTheme(),
  effects: [
    ({ onSet, setSelf }) => {
      const savedTheme = localStorage.getItem(KEYS.THEME_TOKEN) as AppThemes | null;
      if (savedTheme) setSelf(savedTheme);

      onSet((newTheme) => {
        localStorage.setItem(KEYS.THEME_TOKEN, newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
      });
    },
  ],
});
