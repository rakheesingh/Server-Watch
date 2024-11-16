import React from "react";
import {
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";

function PieChartComponent({metricsData}) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
          <Tooltip />
          <Legend />
          <Pie data={metricsData.pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" />
        </PieChart>
    </ResponsiveContainer>
  );
}

export default PieChartComponent;
