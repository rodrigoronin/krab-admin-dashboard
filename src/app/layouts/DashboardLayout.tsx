import SidebarLeft from "@components/feature/sidebar-left/SidebarLeft";
import MainHeader from "@components/feature/main-header/MainHeader";
import SidebarRight from "@components/feature/sidebar-right/SidebarRight";
import { Outlet } from "react-router";

import style from "@styles/DashboardLayout.module.css";

const DashboardLayout = () => {
  return (
    <div className={style.container}>
      <SidebarLeft />

      <div className={style.content}>
        <MainHeader />

        <main className={style["container-main"]}>
          <Outlet />
        </main>
      </div>

      <SidebarRight />
    </div>
  );
};

export default DashboardLayout;
