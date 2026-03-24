import type { IconType } from "react-icons";
import { NavLink } from "react-router";
import type { NavItemType } from "./sidebar.types";

import style from "@styles/NavItem.module.css";

type NavItemProps = {
  item: NavItemType;
};

const NavItem = ({ item }: NavItemProps) => {
  const Icon: IconType = item.icon;

  return (
    <div className={style.link}>
      {item.icon && <Icon size={18} className={style["link-icon"]} />}

      <NavLink
        to={item.path}
        className={({ isActive }) => `${isActive ? "active" : ""} ${style["link-title"]}`}
      >
        {item.label}
      </NavLink>
    </div>
  );
};

export default NavItem;
