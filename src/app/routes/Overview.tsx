import style from "@styles/Overview.module.css";

// TODO: extract structure from here and create specialized components

const Overview = () => {
  return (
    <div className={style.container}>
      <div className={`${style["grid-item-1"]} ${style.card}`}>
        <h2>Views</h2>
        <span>2500</span>
      </div>
      <div className={`${style["grid-item-2"]} ${style.card}`}>
        <h2>Visits</h2>
        <span>3280</span>
      </div>
      <div className={`${style["grid-item-3"]} ${style.card}`}>
        <h2>New Users</h2>
        <span>189</span>
      </div>
      <div className={`${style["grid-item-4"]} ${style.card}`}>
        <h2>Active Users</h2>
        <span>999</span>
      </div>

      <div className={`${style["grid-item-5"]} ${style["spline-chart"]} ${style.card}`}>
        <span>Total Users</span>
        <span>Total Products</span>
        <span>Total Sales</span>
      </div>

      <div className={`${style["grid-item-6"]} ${style.card}`}>
        <span>Traffic by Website</span>
      </div>

      <div className={`${style["grid-item-7"]} ${style.card}`}>
        <span>Traffic by Device</span>
      </div>

      <div className={`${style["grid-item-8"]} ${style.card}`}>
        <span>Traffic by Location</span>
      </div>
    </div>
  );
};

export default Overview;
