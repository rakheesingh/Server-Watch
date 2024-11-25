import PropTypes from "prop-types";
import React from "react";
import {
  BarChart,
  Bar,
  Tooltip,
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
        <CartesianGrid stroke="#E2E8F0" strokeDasharray="5 5" />{" "}
        <XAxis
          dataKey={Xaxis}
          tick={{ fill: "#94A3B8", fontSize: 12 }}
          stroke="#E2E8F0"
        />
        <YAxis tick={{ fill: "#94A3B8", fontSize: 12 }} stroke="#F5F5F5" />
        <Tooltip
          contentStyle={{ backgroundColor: "#f5f5f5", border: "none" }}
          cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
        />
        <Bar dataKey={Yaxis} fill="#0280FF" barSize={25} style={{opacity:0.8}}/>
      </BarChart>
    </ResponsiveContainer>
  );
}

BarChartComponent.propTypes = {
  metricsData: PropTypes.array.isRequired,
  Xaxis: PropTypes.string,
  Yaxis: PropTypes.string
};

export default BarChartComponent;
