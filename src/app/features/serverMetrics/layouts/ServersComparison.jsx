import React from "react";
import { servers } from "../../../utils/apis/ServerComparison";
import BarChartComponent from "../../../designComponent/charts/BarChart";
import PieChartComponent from "../../../designComponent/charts/PieChart";
import { MetricsChartMapping } from "../../../utils/constant";
import { TextSM, TextXL } from "../../../designComponent/typography/Typography";
import { MerticComaprisionLegendMapping } from "../Constant";

const CHART_COMPONENT_MAP = {
  BAR: BarChartComponent,
  PIE: PieChartComponent,
};

function ServersComparison() {
  const serversData = servers;

  return (
    <div className="w-full md:w-3/4 flex flex-col gap-3">
      <div>
        <TextXL>Server Performance Comparison</TextXL>
        <TextSM textColor={"text-slate-500"}>
          Analyze real-time metrics and compare server performance across key
          parameters.
        </TextSM>
      </div>

      <div className="relative server-metrics-container p-6 border border-slate-200 flex flex-wrap gap-4 rounded">
        {MetricsChartMapping.map((metricsWithChart, index) => {
          const ChartToRender = CHART_COMPONENT_MAP[metricsWithChart.chart];
          const metricName = metricsWithChart.metric;
          const metricDataToSend = serversData.map((data) => ({
            name: data.name,
            [metricName]: data[metricName],
          }));
          return (
            <div key={index} className="py-4 pr-4 bg-slate-50 rounded-lg shadow">
              <ChartToRender
                metricsData={metricDataToSend}
                Xaxis="name"
                Yaxis={metricName}
              />
              <TextSM textColor={"text-brand-blue-1"} className ="text-center">{MerticComaprisionLegendMapping[metricName]}</TextSM>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServersComparison;
