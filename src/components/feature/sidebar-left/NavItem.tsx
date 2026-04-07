import { NavLink } from "react-router";
import type { NavItemType } from "./sidebar.types";

import style from "@styles/NavItem.module.css";

type NavItemProps = {
  item: NavItemType;
};

const NavItem = ({ item }: NavItemProps) => {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      end={item.path === "/"}
      className={({ isActive }) =>
        `${style["link-title"]} ${item.indent ? style["link-title_indent"] : ""} ${
          isActive ? style["link-title_active"] : ""
        }`
      }
    >
      <div className={style.link}>
        {Icon && <Icon size={18} className={style["link-icon"]} />}
        {item.label}
      </div>
    </NavLink>
  );
};

export default NavItem;
