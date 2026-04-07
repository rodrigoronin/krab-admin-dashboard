import {
  FaAngleRight,
  FaBagShopping,
  FaChartPie,
  FaFolder,
  FaRegBookmark,
  FaRegCircleUser,
  FaRegFileLines,
  FaRegHeart,
  FaRegMessage,
  FaRegNewspaper,
  FaSliders,
} from "react-icons/fa6";
import SidebarHeader from "./SidebarHeader";
import NavItem from "./NavItem";
import type { NavItemType } from "./sidebar.types";

import style from "@styles/SidebarLeft.module.css";

type NavSection = {
  id: string;
  title?: string;
  items: NavItemType[];
};

const sections: NavSection[] = [
  {
    id: "0",
    title: "Favorites",
    items: [
      { label: "Overview", path: "/" },
      { label: "Projects", path: "/posts" },
    ],
  },
  {
    id: "1",
    title: "Dashboards",
    items: [
      { label: "Overview", path: "/", icon: FaChartPie },
      { label: "eCommerce", path: "/posts", icon: FaBagShopping },
      { label: "Projects", path: "/posts", icon: FaFolder },
    ],
  },
  {
    id: "2",
    title: "Pages",
    items: [
      { label: "User Profile", path: "/posts", icon: FaRegCircleUser },
      { label: "Overview", path: "/posts", indent: true },
      { label: "Projects", path: "/posts", indent: true },
      { label: "Campaigns", path: "/posts", indent: true },
      { label: "Documents", path: "/posts", indent: true },
      { label: "Followers", path: "/posts", indent: true },
      { label: "Account", path: "/posts", icon: FaRegBookmark },
      { label: "Corporate", path: "/posts", icon: FaSliders },
      { label: "Blog", path: "/posts", icon: FaRegFileLines },
      { label: "Social", path: "/posts", icon: FaRegMessage },
    ],
  },
  {
    id: "3",
    items: [
      { label: "Recently", path: "/posts", icon: FaRegHeart },
      { label: "Newsroom", path: "/posts", icon: FaRegNewspaper },
      { label: "Quick Links", path: "/posts", icon: FaAngleRight },
    ],
  },
];

const SidebarLeft = () => {
  return (
    <aside className={style.sidebar}>
      <SidebarHeader />

      <nav className={style.nav}>
        {sections.map((section, i) => (
          <div key={i} className={style.section}>
            {section.title && <span className={style["section-title"]}>{section.title}</span>}

            {section.items.map((item) => (
              <NavItem key={item.path} item={item} />
            ))}
          </div>
        ))}
      </nav>

      <div className={style.brand}>snowUI</div>
    </aside>
  );
};

export default SidebarLeft;
