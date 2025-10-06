import type { app_paths } from "../../../types/routes.types";
import type { MuiIconComponent } from "../../../types/global";
import { CloseBtn, Nav, NavLink } from "./navigation.css";
import { useEffect, useRef } from "react";
export interface INavigationProps {
  nav_itens: {
    path: app_paths;
    text: string;
    icon: MuiIconComponent;
  }[];
  isNavOpen: boolean;
  setIsNavOpen: (state: boolean) => void;
}

export function Navigation_({ nav_itens, isNavOpen = false, setIsNavOpen }: INavigationProps) {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsNavOpen]);

  return (
    <Nav ref={navRef} isNavOpen={isNavOpen}>
      {nav_itens.map((item) => {
        return (
          <NavLink to={item.path} key={item.path} onClick={() => setIsNavOpen(false)}>
            {<item.icon />}
            <span>{item.text}</span>
          </NavLink>
        );
      })}
      <CloseBtn
        onClick={() => {
          setIsNavOpen(!isNavOpen);
        }}
      >
        X
      </CloseBtn>
    </Nav>
  );
}
