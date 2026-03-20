import SidebarLeft from "@components/feature/sidebar/SidebarLeft";
import Header from "@components/ui/Header";
import SidebarRight from "@components/feature/sidebar/SidebarRight";
import { Outlet } from "react-router";

import style from "@styles/DashboardLayout.module.css";

const DashboardLayout = () => {
  return (
    <div className={style.container}>
      <SidebarLeft />

      <div className={style.content}>
        <Header />

        <main className={style.container__main}>
          <Outlet />
        </main>
      </div>

      <SidebarRight />
    </div>
  );
};

export default DashboardLayout;
