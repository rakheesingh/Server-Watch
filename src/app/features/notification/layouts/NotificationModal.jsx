import React, { useState } from "react";
import Dialog from "../../../designComponent/modal/Modal";
import { getTypeColor } from "../utils";
import NotificationSearch from "./NotificationSearch";

function NotificationModal({ isOpen, closeModal, notifications }) {
  const [filteredNotifications, setFilteredNotification] = useState({});
  console.log("filteredNotifications", filteredNotifications);
  const notificationToRender = filteredNotifications.isSearching
    ? filteredNotifications?.notifications
    : notifications;
  return (
    <Dialog
      isOpen={isOpen}
      onClose={() => closeModal()}
      title="Sever Alert Notification"
    >
      <div className="py-2 border-b overflow-hidden ">
        {notifications.length === 0 ? (
          <div className="text-gray-500 text-center">
            No notifications available
          </div>
        ) : (
          <div className="space-y-6">
            <NotificationSearch
              filteredNotifications={filteredNotifications}
              notifications={notifications}
              setFilteredNotification={setFilteredNotification}
            />
            <div className="overflow-y-scroll max-h-96 space-y-4">
              {notificationToRender?.map((notification, index) => (
                <div
                  key={index}
                  className={`p-2 border-l-4 mx-4 ${getTypeColor(
                    notification.type
                  )} bg-gray-50 rounded-lg shadow-sm`}
                >
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-gray-700">
                      {notification.type}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(notification.timestamp).toLocaleString()}
                    </div>
                  </div>
                  <div className="mt-1 text-gray-600">
                    {notification.message}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Dialog>
  );
}

export default NotificationModal;
