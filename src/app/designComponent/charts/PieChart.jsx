import React from "react";
import { Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

function PieChartComponent({ metricsData, Xaxis, Yaxis }) {

  const COLORS = ['#2680EB', '#0280FF', '#1E66BC', '#9CA3AF']; // Define your color palette

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
      <ResponsiveContainer width="100%" height="100%" >
        <PieChart>
          <Tooltip />
          <Legend />
          <Pie
            data={metricsData}
            dataKey={Yaxis}
            nameKey={Xaxis}
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {metricsData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PieChartComponent;
