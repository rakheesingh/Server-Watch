import React from "react";
import ServerData from "../store/ServerData";
import ServerMetrics from "../features/serverMetrics";

function DashboardWithContext() {
  return (
    <ServerData>
      <Dashboard />
    </ServerData>
  );
}

function Dashboard() {
 
  return (
   <ServerMetrics/>
  );
}

export default DashboardWithContext;
