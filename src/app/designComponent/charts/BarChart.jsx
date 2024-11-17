import React from "react";
import {
  BarChart,
  Bar,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function BarChartComponent({ metricsData, Xaxis, Yaxis }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={metricsData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={Xaxis} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={Yaxis} fill="#0280FF" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChartComponent;
