import React from "react";
import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

function PieChartComponent({ metricsData, Xaxis, Yaxis }) {

  const COLORS = [0.6, 0.7, 0.8, 0.9]; // Define your color palette

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
      <ResponsiveContainer width="100%" height="100%" >
        <PieChart>
          <Tooltip />        
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
              <Cell key={`cell-${index}`} fill={"#0280FF"} style={{opacity: COLORS[index]}} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PieChartComponent;
