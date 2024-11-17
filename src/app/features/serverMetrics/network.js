import serverMetricsData from "../../utils/apis/ServerMetricData";

export function fetchServerMetrics(serverId) {
  return serverMetricsData[serverId];
}
