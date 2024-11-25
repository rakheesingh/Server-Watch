import { TabContext } from "./app/designComponent/tabs/Tabs";
import Header from "./app/Header";
import Dashboard from "./app/pages/Dashboard";

function App() {
  return (
    <TabContext>
      <Header />
      <Dashboard />
    </TabContext>
  );
}

export default App;
