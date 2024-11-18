
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


----------------------------------------------------------Implemntation brief----------------------------------------------
Documentation
Overview
The application consists of three primary features:

1. Server Metrics
2. Available Server Comparison
3. Notification Alerts

-------------------------
1. Server Metrics
### Purpose ----
The Server Metrics feature allows users to view and analyze real-time server performance metrics. The data is presented through interactive charts, where users can select different servers and observe their performance metrics.

** Key Features **

Real-time data: Displays the most recent metrics from the selected server.
Metrics visualization: Metrics are shown using charts (e.g., line charts) with thresholds for warning indicators.
Server selection: Users can select different servers to view their metrics.
Components

ServerMetricEach.js: Displays the server metrics with real-time data and charts.

LinearChartWithCaption.js: Renders line charts to visualize each server metric.

WarningIndicator.js: Displays a warning when a metric exceeds a defined threshold.

ReactSelect: Dropdown component used for selecting the server.
Flow

The component fetches server metrics based on the selected server ID.
The metrics are visualized using charts.
If a metric exceeds its threshold, a warning indicator is shown.

-------------------

2. Available Server Comparison
## Purpose ----
The Available Server Comparison feature enables users to compare the performance of different servers across various metrics.

** Key Features **

Real-time comparison: View and compare real-time data for multiple servers.
Chart options: Allows visualization of data using bar and pie charts.
Metrics comparison: Displays various server performance metrics side by side for comparison.
Components
ServersComparison.js: Displays the server comparison charts and descriptions.
BarChartComponent: Renders bar charts for comparing metrics.
PieChartComponent: Renders pie charts for visual comparison.
TextSM, TextXL: Typography components for text display.
Flow
The component maps server data and sends it to the chart components.
It renders bar and pie charts to compare the performance of servers based on the selected metrics.
Legends are provided to help users interpret the data on the charts.

----------------------------------

3. Notification Alerts
## Purpose ---
The Notification Alerts feature alerts users of important Info or any critical warning in server. This is used for monitoring real-time changes in the system and providing timely alerts to users.

** Key Features **

Real-time notifications: Users are notified of important info or critical warnings.
Notification count: Displays the total number of unread notifications.
Modal for notifications: A modal window displays detailed notifications when clicked.
Components

NotificationIconWithNumber.js: Displays the notification bell icon with a badge indicating the number of unread notifications.
useSimulateNotification.js: Custom hook to simulate and manage notifications.
NotificationModal.js: Modal component displaying the full list of notifications.
BellIcon: Icon component used for the notification bell.
Flow
The notification icon displays the number of new notifications.
When clicked, the notification modal opens, showing the details of all notifications.
Users can mark notifications as seen, which updates the state.
General Notes
State Management
React Context: ServerContext is used to manage and share the selected server's ID across components.
Custom Hooks
useSimulateNotification: Custom hook for simulating and managing the state of notifications (e.g., fetching, dismissing, updating notification counts).
Future Enhancements
