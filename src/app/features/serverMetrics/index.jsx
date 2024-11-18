import React from "react";
import { useTabs } from "../../designComponent/tabs/Tabs";
import ServersComparison from "./layouts/ServersComparison";
import ServerMetricEach from "./layouts/ServerMetricEach";
import { HEADER_TABS } from "../../utils/constant";

function ServerMetrics() {
  const { activeTab } = useTabs();
  return (
    <div className="server-metrics-container mt-10 ml-5 p-6 mr-20 border border-slate-200 flex flex-wrap gap-4">
      {activeTab === HEADER_TABS.SERVER_COMPARISON && <ServersComparison />}
      {activeTab === HEADER_TABS.SERVER_METRICS && <ServerMetricEach />}
    </div>
  );
}

export default ServerMetrics;
