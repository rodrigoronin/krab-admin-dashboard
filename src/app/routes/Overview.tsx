import MetricChart from "@components/charts/MetricChart";
import SplineChart from "@components/charts/SplineChart";
import Card from "@components/ui/Card";

import style from "@styles/Overview.module.css";

const websiteTraffic = [
  { label: "Google", value: 52 },
  { label: "YouTube", value: 31 },
  { label: "Instagram", value: 24 },
  { label: "Pinterest", value: 18 },
  { label: "Facebook", value: 14 },
  { label: "Twitter", value: 12 },
];

const deviceTraffic = [
  { label: "Linux", value: 58, tone: "blue" },
  { label: "Mac", value: 92, tone: "teal" },
  { label: "iOS", value: 68, tone: "dark" },
  { label: "Windows", value: 95, tone: "cyan" },
  { label: "Android", value: 44, tone: "violet" },
  { label: "Other", value: 80, tone: "green" },
];

const locationTraffic = [
  { label: "United States", value: "52.1%", color: "#262626" },
  { label: "Canada", value: "22.8%", color: "#7caaf2" },
  { label: "Mexico", value: "13.9%", color: "#8ddfb0" },
  { label: "Other", value: "11.2%", color: "#afc4e8" },
];

const Overview = () => {
  return (
    <div className={style.container}>
      <MetricChart title="Views" value="7,265" delta="+11.01%" />
      <MetricChart title="Visits" value="3,671" delta="-0.03%" tone="blue" />
      <MetricChart title="New Users" value="156" delta="+15.03%" />
      <MetricChart title="Active Users" value="2,318" delta="+6.08%" tone="blue" />

      <SplineChart className={`${style["chart-xs"]}`} />

      {/* TODO: add a real chart later */}
      <Card className={`${style["chart-sm"]}`}>
        <div className={style["card-title"]}>Traffic by Website</div>
        <div className={style["traffic-list"]}>
          {websiteTraffic.map((item) => (
            <div key={item.label} className={style["traffic-row"]}>
              <span>{item.label}</span>
              <div className={style["mini-bars"]}>
                <span style={{ width: `${item.value}%` }}></span>
                <span style={{ width: `${Math.max(item.value - 18, 12)}%` }}></span>
                <span style={{ width: `${Math.max(item.value - 30, 8)}%` }}></span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* TODO: add a real chart later */}
      <div className={`${style["chart-md"]}`}>
        <Card>
          <div className={style["card-title"]}>Traffic by Device</div>
          <div className={style["device-chart"]}>
            {deviceTraffic.map((item) => (
              <div key={item.label} className={style["device-item"]}>
                <div className={style["device-track"]}>
                  <span
                    className={`${style["device-bar"]} ${style[`tone-${item.tone}`]}`}
                    style={{ height: `${item.value}%` }}
                  ></span>
                </div>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* TODO: add a real chart later */}
        <Card>
          <div className={style["card-title"]}>Traffic by Location</div>
          <div className={style["location-card"]}>
            <div className={style.donut}></div>
            <div className={style["location-list"]}>
              {locationTraffic.map((item) => (
                <div key={item.label} className={style["location-row"]}>
                  <span className={style["location-label"]}>
                    <span className={style.dot} style={{ backgroundColor: item.color }}></span>
                    {item.label}
                  </span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <Card className={style.footerCard}>
        <div className={style["card-title"]}>Marketing & SEO</div>
      </Card>
    </div>
  );
};

export default Overview;
