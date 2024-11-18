import React from "react";
import { useTabs } from "../../designComponent/tabs/Tabs";
import ServersComparison from "./layouts/ServersComparison";
import ServerMetricEach from "./layouts/ServerMetricEach";
import { HEADER_TABS } from "../../utils/constant";

function ServerMetrics() {
  const { activeTab } = useTabs();
  return (
   <div className="w-full p-10">
      {activeTab === HEADER_TABS.SERVER_COMPARISON && <ServersComparison />}
      {activeTab === HEADER_TABS.SERVER_METRICS && <ServerMetricEach />}
   </div>
  );
}

export default ServerMetrics;
