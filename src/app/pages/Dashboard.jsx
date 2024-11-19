import React from "react";
import ServerDataContext from "../store/ServerDataContext";
import ServerMetrics from "../features/serverMetrics";

function DashboardWithContext() {
  return (
    //Sending server metrics data to dashbaord selected by users
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
