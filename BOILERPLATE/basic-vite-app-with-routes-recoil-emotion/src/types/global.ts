import { type OverridableComponent } from "@mui/material/OverridableComponent";
import { type SvgIconTypeMap } from "@mui/material/SvgIcon";
import "@mui/material/styles";

export type MuiIconComponent = OverridableComponent<SvgIconTypeMap<{}, "svg">>;
