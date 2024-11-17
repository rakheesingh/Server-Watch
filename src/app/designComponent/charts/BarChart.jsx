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
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={metricsData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={Xaxis} />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: "#f5f5f5", border: "none" }}
            cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
          />
          <Legend
            wrapperStyle={{
              paddingTop: "10px",
            }}
          />
          <Bar dataKey={Yaxis} fill="#0280FF" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
  );
}

export default BarChartComponent;
