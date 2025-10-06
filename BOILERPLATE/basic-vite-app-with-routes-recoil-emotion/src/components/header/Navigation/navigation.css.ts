import styled from "@emotion/styled";
import { NavLink as RouterNavLink } from "react-router-dom";

import { app_dimensions } from "../../../styles/index.css";

interface NavProps {
  isNavOpen?: boolean;
}

export const Nav = styled("nav")<NavProps>(({ theme, isNavOpen }) => ({
  position: "absolute",
  top: 0,
  left: isNavOpen ? "0" : "-75%",
  width: "75%",
  height: "100%",
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  flexFlow: "column nowrap",
  ".active": {},
  transition: "all 0.3s ease-in-out",
  zIndex: 1000,
}));

export const NavLink = styled(RouterNavLink)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  color: theme.palette.text.primary,
  textDecoration: "none",
  padding: "0.5rem 1rem",
  borderRadius: "4px",
  transition: "all 0.2s",

  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    color: theme.palette.primary.main,
  },

  "&:focus": {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: "2px",
  },

  "&.active": {
    fontWeight: 700,
    color: theme.palette.secondary.main,
  },
}));

export const CloseBtn = styled("button")(({ theme }) => ({
  position: "absolute",
  top: "1rem",
  right: "1rem",
  background: "none",
  border: "none",
  fontSize: "1.5rem",
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
