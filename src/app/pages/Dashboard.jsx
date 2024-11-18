import React from "react";
import ServerDataContext from "../store/ServerDataContext";
import ServerMetrics from "../features/serverMetrics";

function DashboardWithContext() {
  return (
    <ServerDataContext>
      <Dashboard />
    </ServerDataContext>
  );
}

function Dashboard() {
 
  return (
   <ServerMetrics/>
  );
}

export default DashboardWithContext;
