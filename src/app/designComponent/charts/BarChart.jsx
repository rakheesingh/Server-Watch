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

function BarChartComponent({metricsData}) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={metricsData.barData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="memoryUsage" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChartComponent;
