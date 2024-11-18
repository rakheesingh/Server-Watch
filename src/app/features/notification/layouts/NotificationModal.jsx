import React, { useState } from "react";
import Dialog from "../../../designComponent/modal/Modal";
import { getTypeColor } from "../utils";
import NotificationSearch from "./NotificationSearch";
import AlertNotifier from "../../../designComponent/alert/AlertNotifier";

function NotificationModal({ isOpen, closeModal, notifications, dismissNotification }) {
  const [filteredNotifications, setFilteredNotification] = useState({});
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
            <div className="overflow-y-scroll max-h-96 flex flex-col gap-3 pt-3">
              {notificationToRender?.map((notification) => (
                <AlertNotifier
                  key={notification.timestamp}
                  timestamp={notification.timestamp}
                  type={notification.type}
                  message={notification.message}
                  getTypeColor={getTypeColor}
                  dismissNotification={dismissNotification}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </Dialog>
  );
}

export default NotificationModal;
