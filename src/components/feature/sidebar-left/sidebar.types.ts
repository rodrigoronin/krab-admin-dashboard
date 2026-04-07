import type { IconType } from "react-icons";

export type NavItemType = {
  label: string;
  path: string;
  icon?: IconType;
  indent?: boolean;
};
