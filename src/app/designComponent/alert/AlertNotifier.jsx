import React, { memo } from "react";
import { CloseIcon } from "../../assets/icons";
import PropTypes from "prop-types";

function AlertNotifier({
  getTypeColor,
  type,
  timestamp,
  message,
  dismissNotification,
}) {
  const notificationDismiss = (e) => {
   e.stopPropagation();
   dismissNotification(timestamp);
  }
  return (
    <div
      className={`p-2 border-l-4 mx-4 relative ${getTypeColor(
        type
      )} bg-gray-50 rounded-lg shadow-sm`}
    >
      <div className="flex items-center justify-between">
        <div className="font-bold text-gray-700">{type}</div>
        <div className="text-sm text-gray-500">
          {new Date(timestamp).toLocaleString()}
        </div>
      </div>
      <div className="mt-1 text-gray-600">{message}</div>
      <div className="absolute -top-2 -right-2 cursor-pointer hover:scale-110" onClick={notificationDismiss}>
        <CloseIcon className="w-4 h-4"/>
      </div>
    </div>
  );
}

AlertNotifier.propTypes = {
  getTypeColor: PropTypes.func,
  type: PropTypes.string,
  timestamp: PropTypes.any,
  message: PropTypes.string,
  dismissNotification: PropTypes.func,
  disabled: PropTypes.bool,
};

export default memo(AlertNotifier);
