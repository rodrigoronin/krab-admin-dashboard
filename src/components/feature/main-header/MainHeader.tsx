import {
  FaBarsStaggered,
  FaBell,
  FaMagnifyingGlass,
  FaMoon,
  FaRegBookmark,
  FaSun,
} from "react-icons/fa6";
import style from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={style.header}>
      <div className={style.breadcrumbs}>
        <button className={style["icon-button"]} type="button" aria-label="Toggle sidebar">
          <FaBarsStaggered size={14} />
        </button>
        <button className={style["icon-button"]} type="button" aria-label="Save">
          <FaRegBookmark size={14} />
        </button>
        <span className={style.crumb}>Dashboards</span>
        <span className={style.separator}>/</span>
        <span className={style["crumb-current"]}>Default</span>
      </div>

      <div className={style.actions}>
        <label className={style.search}>
          <FaMagnifyingGlass size={14} />
          <input type="search" placeholder="Search" />
          <span className={style["search-shortcut"]}>/</span>
        </label>

        <div className={style["toolbar-icons"]}>
          <button className={style["icon-button"]} type="button" aria-label="Theme">
            <FaSun size={14} />
          </button>
          <button className={style["icon-button"]} type="button" aria-label="Dark mode">
            <FaMoon size={14} />
          </button>
          <button className={style["icon-button"]} type="button" aria-label="Notifications">
            <FaBell size={14} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
