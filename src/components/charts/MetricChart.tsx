import Card from "@components/ui/Card";

interface MetricChartProps {
  title: string;
  value: string;
  style?: string;
}

const MetricChart = ({ title, value, style }: MetricChartProps) => {
  return (
    <Card className={style}>
      <h2>{title}</h2>
      <span>{value}</span>
    </Card>
  );
};

export default MetricChart;
