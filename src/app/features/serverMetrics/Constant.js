export const EachMetricsAndLegendMapping = {
    cpuUsage: "Track CPU Utilization Over Time",
    memoryUsage: "Monitor Memory Consumption Trends",
    diskSpace: "Analyze Disk Space Usage",
    latency: "Monitor Server Response Time"
  };

  export const MerticComaprisionLegendMapping = {
    cpuUsage: "Monitor CPU usage for better performance of your server",
    memoryUsage: "Track memory usage to avoid bottlenecks",
    diskSpace: "Check disk space to prevent issues",
}

export const ServerThresholds = {
  cpuUsage: {
    value: 75, // threshold value for CPU usage
    tooltip: "CPU usage above 75% indicates high load, which could affect performance."
  },
  memoryUsage: {
    value: 80, // threshold value for Memory usage
    tooltip: "Memory usage above 80% means the server is running out of available memory."
  },
  diskSpace: {
    value: 90, // threshold value for Disk usage
    tooltip: "Disk space above 90% means the server is running out of storage space."
  },
  latency: {
    value: 200, // threshold value for Latency in ms
    tooltip: "Latency above 200ms could lead to delayed responses and degraded user experience."
  }
};
