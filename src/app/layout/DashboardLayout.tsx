import SidebarLeft from "@components/ui/SidebarLeft";
import Header from "@components/ui/Header";
import SidebarRight from "@components/ui/SidebarRight";

import style from "@styles/App.module.css";

interface IProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: IProps) => {
  return (
    <>
      <SidebarLeft />

      <div className={style["content-area"]}>
        <Header />

        <main>{children}</main>
      </div>

      <SidebarRight />
    </>
  );
};

export default DashboardLayout;
