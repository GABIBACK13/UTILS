import styled from "@emotion/styled";
import { MenuRounded } from "@mui/icons-material";

export const MenuBtn = styled(MenuRounded)(({ theme }) => ({
  fontSize: "2rem",
  color: theme.palette.text.primary,
  cursor: "pointer",
  transition: "all 0.2s",
  "&:hover": {
    color: theme.palette.primary.main,
  },
  "&:focus": {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: "2px",
  },
}));
