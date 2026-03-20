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
    items: [{ label: "Overview", path: "/" }],
  },
  {
    id: "1",
    title: "Dashboards",
    items: [
      { label: "Overview", path: "/" },
      { label: "Posts", path: "/posts" },
    ],
  },
  {
    id: "2",
    title: "Pages",
    items: [
      { label: "User Profile", path: "/profile" },
      { label: "Account", path: "/account" },
    ],
  },
];

const SidebarLeft = () => {
  return (
    <aside className={style.sidebar}>
      {/* SIDEBAR HEADER COMPONENT HERE */}

      <nav>
        {sections.map((section, i) => (
          <div key={i} className={style.section}>
            {section.title && <span className={style["section-title"]}>{section.title}</span>}

            {section.items.map((item) => (
              <NavItem key={item.path} item={item} />
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default SidebarLeft;
