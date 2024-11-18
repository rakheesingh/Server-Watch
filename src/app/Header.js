import React from "react";
//import { Logo } from "./assets/icons";
import Tabs from "./designComponent/tabs/Tabs";
import NotificationIconWithNumber from "./features/notification";
import { HEADER_TABS } from "./utils/constant";
import { Logo } from "./assets/icons";


function Header() {
  return (
    <div className="flex flex-row items-center px-6 pt-4 justify-between border-b border-slate-200" >
      <div className="flex gap-2 items-center">
        <Logo className="w-8 h-8"/>
        <Tabs tabs={HEADER_TABS} />
      </div>
      <NotificationIconWithNumber />
    </div>
  );
}

export default Header;
