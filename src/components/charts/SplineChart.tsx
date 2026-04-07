import { Area, AreaChart, Legend, Line, XAxis, YAxis } from "recharts";
import Card from "@components/ui/Card";

import style from "@styles/SplineChart.module.css";

interface SplineChartProps {
  className?: string;
}

// #region mock data
const data = [
  {
    month: "Jan",
    uv: 400,
    pv: 300,
  },
  {
    month: "Feb",
    uv: 300,
    pv: 220,
  },
  {
    month: "Mar",
    uv: 320,
    pv: 290,
  },
  {
    month: "Apr",
    uv: 200,
    pv: 170,
  },
  {
    month: "May",
    uv: 278,
    pv: 252,
  },
  {
    month: "Jun",
    uv: 359,
    pv: 130,
  },
  {
    month: "Jul",
    uv: 390,
    pv: 100,
  },
  {
    month: "Aug",
    uv: 320,
    pv: 345,
  },
  {
    month: "Sep",
    uv: 280,
    pv: 267,
  },
  {
    month: "Oct",
    uv: 280,
    pv: 232,
  },
  {
    month: "Nov",
    uv: 374,
    pv: 280,
  },
  {
    month: "Dec",
    uv: 493,
    pv: 300,
  },
];
// #endregion

const SplineChart = ({ className }: SplineChartProps) => {
  return (
    <Card className={`${className} ${style.card}`}>
      <div className={style.topbar}>
        <div className={style.tabs}>
          <span className={`${style.chart} ${style["chart-active"]}`}>Total Users</span>
          <span className={style.chart}>Total Projects</span>
          <span className={style.chart}>Operating Status</span>
        </div>
      </div>

      <AreaChart
        title="Total Users"
        style={{
          width: "100%",
          aspectRatio: 1.6,
        }}
        responsive
        data={data}
        margin={{
          top: 30,
          right: 7,
          bottom: 32,
          left: 0,
        }}
      >
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#111827" stopOpacity={0.15} />
            <stop offset="100%" stopColor="#111827" stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis
          dataKey="month"
          stroke="none"
          axisLine={false}
          tickCount={24}
          tickMargin={20}
          tick={{
            fill: "rgba(150,150,150,0.9)",
            fontSize: "0.75rem",
            letterSpacing: 1.1,
          }}
        />
        <YAxis
          width="auto"
          stroke="none"
          axisLine={false}
          tickCount={4}
          tickMargin={10}
          tick={{
            fill: "rgba(150,150,150,0.9)",
            fontSize: "0.75rem",
            letterSpacing: 1.1,
          }}
        />

        <Area
          type="natural"
          dataKey="uv"
          stroke="#000"
          name="This year"
          dot={false}
          activeDot={{ stroke: "rgba(0,0,0,1)", strokeWidth: 2, r: 2 }}
          fill="url(#areaGradient)"
        />
        <Line
          type="natural"
          dataKey="pv"
          stroke="rgba(150,150,250,0.5)"
          strokeWidth={2}
          name="Last Year"
          dot={false}
          activeDot={{ stroke: "rgba(0,0,0,1)", strokeWidth: 2, r: 2 }}
          strokeDasharray="4 4"
        />

        <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ top: 0 }} />
      </AreaChart>
    </Card>
  );
};

export default SplineChart;
