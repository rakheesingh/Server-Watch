import React, { useContext, useEffect, useState } from "react";
import { ServerContext } from "../../../store/ServerData";
import { fetchServerMetrics } from "../network";
import LineChartComponent from "../../../designComponent/charts/LineChart";
import "../style.css";

function ServerMetricEach() {
  const [serverMetricsData, setServerMetricData] = useState([]);
  const { serverId } = useContext(ServerContext);

  useEffect(() => {
    //this useeffect and state is actually not required, added here to show how real api will be handled
    const data = fetchServerMetrics(serverId);
    setServerMetricData(data);
  }, []);
  
  if (serverMetricsData.length === 0) return null;
  return (
    <>
      {Object.entries(serverMetricsData).map(([key, serverData]) => (
        <div className="bg-slate-50 shadow-md rounded-sm">
        <LineChartComponent
          key={key}
          metricsData={serverData}
          xAxis={"time"}
          yAxis={"value"}
        />
        </div>
      ))}
    </>
  );
}

export default ServerMetricEach;
