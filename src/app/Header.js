import React from "react";
//import { Logo } from "./assets/icons";
import Tabs from "./designComponent/tabs/Tabs";
import NotificationIconWithNumber from "./features/notification";
import { HEADER_TABS } from "./utils/constant";

function Header() {
  return (
    <div className="flex flex-row px-6 pt-2 justify-between border-b border-slate-200" >
      <div className="flex gap-2">
        <Tabs tabs={HEADER_TABS} />
      </div>
      <NotificationIconWithNumber />
    </div>
  );
}

export default Header;
