import Card from "@components/ui/Card";
import style from "@styles/MetricChart.module.css";

interface MetricChartProps {
  title: string;
  value: string;
  delta: string;
  tone?: "lavender" | "blue";
  className?: string;
}

const MetricChart = ({ title, value, delta, tone = "lavender", className }: MetricChartProps) => {
  return (
    <Card className={`${style.card} ${style[tone]} ${className ?? ""}`}>
      <span className={style.title}>{title}</span>
      <div className={style.row}>
        <strong className={style.value}>{value}</strong>
        <span className={style.delta}>{delta}</span>
      </div>
    </Card>
  );
};

export default MetricChart;
