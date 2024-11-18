import React, { useContext, useEffect, useState } from "react";
import { ServerContext } from "../../../store/ServerDataContext";
import { fetchServerMetrics } from "../network";
import "../style.css";
import { TextSM, TextXL } from "../../../designComponent/typography/Typography";
import ReactSelect from "../../../designComponent/select/Select";
import { getAllServerName } from "../utils";
import { EachMetricsAndLegendMapping, ServerThresholds } from "../Constant";
import LinearChartWithCaption from "../components/LinearChartWithCaption";
import WarningIndicator from "../components/WarningIndicator";

function ServerMetricEach() {
  const [serverMetricsData, setServerMetricData] = useState([]);
  const { serverId, dispatch } = useContext(ServerContext);
  const serverOptions = getAllServerName();

  useEffect(() => {
    const data = fetchServerMetrics(serverId);
    setServerMetricData(data);
  }, [serverId]);

  if (serverMetricsData.length === 0) return null;
  return (
    <div className="w-full md:w-3/4 flex flex-col gap-3">
      <div className="flex justify-between items-center ">
        <div>
          <TextXL>Server Performance Metrics</TextXL>
          <TextSM textColor={"text-slate-500"}>
            Observe servers real time data
          </TextSM>
        </div>
        <ReactSelect
          placeholder={"Select Server"}
          initialSelected={serverOptions[0]}
          onChange={(value) => dispatch({ type: "SET_SERVER", payload: value })}
          options={serverOptions.map((server) => ({
            label: server,
            value: server,
          }))}
        />
      </div>
      <div className="relative server-metrics-container p-6 border border-slate-200 flex flex-wrap gap-4 rounded">
        {Object.entries(serverMetricsData).map(([key, serverData]) => (
          <LinearChartWithCaption
            key={key}
            label={EachMetricsAndLegendMapping[key]}
            serverData={serverData}
          >
            {serverData[serverData.length - 1].value >=
              ServerThresholds[key]?.value && (
              <WarningIndicator toolTipLabel={ServerThresholds[key].tooltip} />
            )}{" "}
          </LinearChartWithCaption>
        ))}
      </div>
    </div>
  );
}

export default ServerMetricEach;
