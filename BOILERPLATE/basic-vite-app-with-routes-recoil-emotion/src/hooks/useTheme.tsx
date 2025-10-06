import { useRecoilState } from "recoil";
import { themeAtom } from "../store/recoil/theme.atom";
import { themesMap } from "../styles/themes";

export function useTheme() {
  const [themeKey, setTheme] = useRecoilState(themeAtom);

  const theme = themesMap[themeKey as keyof typeof themesMap];

  return { key: themeKey, theme, setTheme };
}
