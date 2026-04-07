import style from "@styles/SidebarHeader.module.css";
import logo from "../../../assets/krabby.png";

const SidebarHeader = () => {
  return (
    <div className={style["header"]}>
      <img className={style["header-logo"]} src={logo} alt="Logo" />

      <div className={style["header-text"]}>
        <span className={style["header-text_title"]}>Kraby</span>
        <span className={style["header-text_subtitle"]}>Admin Dashboard</span>
      </div>
    </div>
  );
};

export default SidebarHeader;
