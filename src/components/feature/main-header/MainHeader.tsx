import style from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <div className={style.header}>
      <div>
        <span>Hide </span>
        <span>Favorite </span>
        <span>{`> Dashboards / Overview`}</span>
      </div>
      <div>Search</div>
      <div>Actions</div>
    </div>
  );
};

export default MainHeader;
