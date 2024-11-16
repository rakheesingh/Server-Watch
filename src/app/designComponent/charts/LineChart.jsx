import React from "react";
import {
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Line,
  CartesianGrid,
} from "recharts";

function LineChartComponent({ metricsData , xAxis, yAxis}) {
 
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={metricsData} >
        <CartesianGrid strokeDasharray="3 3" /> 
        <XAxis dataKey={xAxis} spacing={0} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={yAxis}  stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineChartComponent;
