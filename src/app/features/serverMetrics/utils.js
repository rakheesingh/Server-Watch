import serverMetricsData from "../../utils/apis/ServerMetricData";

export const getAllServerName = () => {
    return Object.keys(serverMetricsData);
  }