import React from "react";
import Dialog from "../../../designComponent/modal/Modal";

function NotificationModal({ isOpen, closeModal, notifications }) {
  return (
    <Dialog
      isOpen={isOpen}
      onClose={() => closeModal()}
      title="Sever Alert Notification"
    >
      <div className="p-2 space-y-2 max-h-96 overflow-y-scroll ">
        {notifications.length === 0 ? (
          <div className="text-gray-500 text-center">
            No notifications available
          </div>
        ) : (
            notifications.map((notification, index) => (
              <div key={index} className={`p-2 border-l-4 ${getTypeColor(notification.type)} bg-gray-50 rounded-lg shadow-sm`}>
                <div className="flex items-center justify-between">
                  <div className="font-bold text-gray-700">{notification.type}</div>
                  <div className="text-sm text-gray-500">{new Date(notification.timestamp).toLocaleString()}</div>
                </div>
                <div className="mt-1 text-gray-600">{notification.message}</div>
              </div>
            ))
        )}
      </div>
    </Dialog>
  );
}

function getTypeColor(type) {
  switch (type) {
    case "Critical":
      return "border-red-500";
    case "Warning":
      return "border-yellow-500";
    case "Info":
      return "border-blue-500";
    default:
      return "border-gray-500";
  }
}

export default NotificationModal;
