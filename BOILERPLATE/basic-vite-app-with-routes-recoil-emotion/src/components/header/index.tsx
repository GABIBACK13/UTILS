import { BusinessCenterRounded, HomeRounded, SettingsRounded } from "@mui/icons-material";
import { Navigation_ } from "./Navigation";
import { MenuBtn } from "./header.css";
import { useEffect, useState } from "react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header>
      <MenuBtn
        onClick={() => {
          setIsNavOpen(!isNavOpen);;
        }}
      />
      <Navigation_
        nav_itens={[
          { path: "/", text: "home", icon: HomeRounded },
          { path: "/portfolio", text: "Portfolio", icon: BusinessCenterRounded },
          { path: "/config", text: "Configurações", icon: SettingsRounded },
        ]}
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
      />
    </header>
  );
}
