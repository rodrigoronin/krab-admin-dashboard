import SidebarLeft from "@components/feature/SidebarLeft";
import Header from "@components/ui/Header";
import SidebarRight from "@components/feature/SidebarRight";

import style from "@styles/DashboardLayout.module.css";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className={style["container"]}>
      <SidebarLeft />

      <div className={style["content"]}>
        <Header />

        <main>
          <Outlet />
        </main>
      </div>

      <SidebarRight />
    </div>
  );
};

export default DashboardLayout;
