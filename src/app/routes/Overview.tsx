import Card from "@components/ui/Card";

import style from "@styles/Overview.module.css";

// TODO: extract structure from here and create specialized components

const Overview = () => {
  return (
    <div className={style.container}>
      <Card>
        <h2>Views</h2>
        <span>2500</span>
      </Card>
      <Card className={`${style["metric"]}`}>
        <h2>Visits</h2>
        <span>3280</span>
      </Card>
      <Card className={`${style["metric"]}`}>
        <h2>New Users</h2>
        <span>189</span>
      </Card>
      <Card>
        <h2>Active Users</h2>
        <span>999</span>
      </Card>

      <Card className={`${style["chart-xs"]}`}>
        <span>Total Users</span>
        <span>Total Products</span>
        <span>Total Sales</span>
      </Card>

      <Card className={`${style["chart-sm"]}`}>
        <span>Traffic by Website</span>
      </Card>

      <div className={`${style["chart-md"]}`}>
        <Card>
          <span>Traffic by Device</span>
        </Card>

        <Card>
          <span>Traffic by Location</span>
        </Card>
      </div>
    </div>
  );
};

export default Overview;
