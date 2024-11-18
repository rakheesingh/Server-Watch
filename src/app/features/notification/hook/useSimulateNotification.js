import { useEffect, useState } from "react";
import { generateRandomnumber } from "../../../utils/helper";
import { alertsNotification } from "../network";

function useSimulateNotification() {
  const [notifications, setNotifications] = useState([]);
  const intervalDiff = 2 * 1000;

  useEffect(() => {
    let timerid = setInterval(() => {
      const index = generateRandomnumber(0, alertsNotification.length - 1);
      setNotifications((prev) => [
        { ...alertsNotification[index], seen: false, timestamp: new Date() },
        ...prev,
      ]);
    }, intervalDiff);

    return () => {
      clearInterval(timerid);
    };
  }, []);

  return {
    notifications,
    updateNotifications: setNotifications,
    totalNewNotification: notifications.filter((notification) => !notification.seen)?.length,
  };
}

export default useSimulateNotification;
