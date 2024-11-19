import React from "react";
import {
  Tooltip,
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Line,
  CartesianGrid,
} from "recharts";
import PropTypes from "prop-types";

function LineChartComponent({ metricsData, xAxis, yAxis }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={metricsData}>
        <CartesianGrid stroke="#E2E8F0" strokeDasharray="5 5" />
        <XAxis
          dataKey={xAxis}
          tick={{ fill: "#94A3B8", fontSize: 12 }}
          stroke="#E2E8F0"
        />
        <YAxis tick={{ fill: "#94A3B8", fontSize: 12 }} stroke="#F5F5F5" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey={yAxis}
          stroke="#0280FF"
          style={{ opacity: 0.4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

LineChartComponent.propTypes = {
  metricsData: PropTypes.array.isRequired,
  xAxis: PropTypes.string,
  yAxis: PropTypes.string
};

export default LineChartComponent;
