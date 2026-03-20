import style from "@styles/SidebarLeft.module.css";

// TODO: implement NavItem component
type NavSection = {
  title?: string;
  items: NavItem[];
};

const sections: NavSection[] = [
  {
    items: [{ label: "Overview", path: "/" }],
  },
  {
    title: "Dashboards",
    items: [
      { label: "Overview", path: "/" },
      { label: "Posts", path: "/posts" },
    ],
  },
  {
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
      {sections.map((section) => (
        <div key={section.title} className={style.section}>
          {section.title && <span className={section.title}>{section.title}</span>}

          {section.items.map((item) => (
            <NavItem key={item.path} item={item} />
          ))}
        </div>
      ))}
    </aside>
  );
};

export default SidebarLeft;
