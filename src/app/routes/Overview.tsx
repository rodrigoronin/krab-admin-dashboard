import MetricChart from "@components/charts/MetricChart";
import SplineChart from "@components/charts/SplineChart";
import Card from "@components/ui/Card";

import style from "@styles/Overview.module.css";

const Overview = () => {
  return (
    <div className={style.container}>
      <MetricChart title="Views" value="2505" />
      <MetricChart title="Visits" value="3435" />
      <MetricChart title="New Users" value="231" />
      <MetricChart title="Active Users" value="1102" />

      <SplineChart className={`${style["chart-xs"]}`} />

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
