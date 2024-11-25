import React, { Suspense } from "react";
import { useTabs } from "../../designComponent/tabs/Tabs";
import { HEADER_TABS } from "../../utils/constant";
import "./style.css";

const ServersComparison = React.lazy(() => import("./layouts/ServersComparison"));
const ServerMetricEach = React.lazy(() => import("./layouts/ServerMetricEach"));

function ServerMetrics() {
  const { activeTab } = useTabs();
  return (
    <div className="w-full p-10">
      <Suspense fallback={<div>Loading...</div>}>
        {activeTab === HEADER_TABS.SERVER_COMPARISON && <ServersComparison />}
        {activeTab === HEADER_TABS.SERVER_METRICS && <ServerMetricEach />}
      </Suspense>
    </div>
  );
}

export default ServerMetrics;
