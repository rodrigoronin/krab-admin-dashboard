import type { NavItemType } from "./sidebar.types";

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

export default NavItem;
