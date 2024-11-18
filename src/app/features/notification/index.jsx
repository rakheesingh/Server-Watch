import React, { useState } from "react";
import { BellIcon } from "../../assets/icons";
import "./style.css";
import useSimulateNotification from "./hook/useSimulateNotification";
import NotificationModal from "./layouts/NotificationModal";

function NotificationIconWithNumber() {
  const [openNotification, setOpenNotification] = useState(false);
  const { totalNewNotification, updateNotifications, notifications } =
    useSimulateNotification(openNotification);

  const updateNotifiactionSeen = () => {
    updateNotifications((notifications) =>
      notifications.map((notification) => ({
        ...notification,
        seen: true,
      }))
    );
  };
  return (
    <div
      className="relative p-2 flex w-10 h-full cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setOpenNotification(true);
        updateNotifiactionSeen();
      }}
    >
      {totalNewNotification !== 0 && !openNotification && (
        <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center absolute -top-2 -right-2 text-xs font-bold border border-white shadow-lg custom-bounce">
          {totalNewNotification}
        </div>
      )}
      <BellIcon className="text-gray-700 w-6 h-6" />
      {openNotification && (
        <NotificationModal
          isOpen={openNotification}
          notifications={notifications}
          closeModal={() => {
            setOpenNotification(false);
          }}
        />
      )}
    </div>
  );
}

export default NotificationIconWithNumber;
