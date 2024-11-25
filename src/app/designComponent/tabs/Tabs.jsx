// Tabs.js
import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { HEADER_TABS } from "../../utils/constant";

const TabsContext = createContext();
export const useTabs = () => useContext(TabsContext);

export const TabContext = ({ children }) => {
  const [activeTab, setActiveTab] = useState(HEADER_TABS.SERVER_COMPARISON);

  const switchTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <TabsContext.Provider value={{ activeTab, switchTab }}>
      {children}
    </TabsContext.Provider>
  );
};

const Tabs = ({ tabs }) => {
  return (
    <div className="flex flex-col">
      <TabList>
        {Object.values(tabs).map((tab) => (
          <Tab key={tab}>{tab}</Tab>
        ))}
      </TabList>
    </div>
  );
};

const TabList = ({ children }) => {
  return <div className="flex ">{children}</div>;
};

const Tab = ({ children }) => {
  const { activeTab, switchTab } = useTabs();

  return (
    <button 
      className={`px-4 py-2 text-large font-medium ${
        activeTab === children
          ? "text-brand-blue-1 border-brand-blue-1"
          : "text-gray-600 border-transparent"
      } outline-none border-b-2 transition-all ease-in-out duration-300 cursor-pointer`}
      onClick={() => switchTab(children)}
    >
      {children}
    </button>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.object.isRequired,
};

TabContext.prototype = {
  children: PropTypes.element
}

export default Tabs;
