import style from "@styles/SidebarLeft.module.css";

type NavItemType = {
  label: string;
  path: string;
};

type NavSection = {
  id: string;
  title?: string;
  items: NavItemType[];
};

const sections: NavSection[] = [
  {
    id: "0",
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

type NavItemProps = {
  item: NavItemType;
};

const NavItem = ({ item }: NavItemProps) => {
  return (
    <>
      <a>{item.label}</a>
    </>
  );
};

const SidebarLeft = () => {
  return (
    <aside className={style.sidebar}>
      <nav>
        {sections.map((section, i) => (
          <div key={i} className={style.section}>
            {section.title && <span className={style.sectionTitle}>{section.title}</span>}

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
