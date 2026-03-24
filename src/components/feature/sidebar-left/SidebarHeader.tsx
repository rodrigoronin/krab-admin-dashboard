import style from "@styles/SidebarHeader.module.css";
import logo from "../../../assets/krabby.png";

const SidebarHeader = () => {
  return (
    <div className={style["header"]}>
      <img className={style["header-logo"]} src={logo} alt="Logo" />

      <span>Kraby Admin Dashboard</span>
    </div>
  );
};

export default SidebarHeader;
