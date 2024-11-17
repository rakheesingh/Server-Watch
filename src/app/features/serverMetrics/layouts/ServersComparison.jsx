import React from "react";
import { servers } from "../../../utils/apis/ServerComparison";
import BarChartComponent from "../../../designComponent/charts/BarChart";
import PieChartComponent from "../../../designComponent/charts/PieChart";
import { MetricsChartMapping } from "../../../utils/constant";

const CHART_COMPONENT_MAP = {
  BAR: BarChartComponent,
  PIE: PieChartComponent,
};

function ServersComparison() {
  const serversData = servers;

  return (
    <>
      {MetricsChartMapping.map((metricsWithChart, index) => {
        const ChartToRender = CHART_COMPONENT_MAP[metricsWithChart.chart];
        const metricName = metricsWithChart.metric;
        const metricDataToSend = serversData.map((data) => ({
          name: data.name,
          [metricName]: data[metricName],
        }));
        return (

          <div key={index} className="p-4 bg-slate-50 rounded-lg shadow-lg">
            <ChartToRender metricsData={metricDataToSend} Xaxis="name" Yaxis={metricName} />
          </div>
        );
      })}
      </>
  );
}

export default ServersComparison;
