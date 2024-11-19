import { useEffect, useState } from "react";
import { generateRandomnumber } from "../../../utils/helper";
import { alertsNotification } from "../network";

function useSimulateNotification() {
  const [notifications, setNotifications] = useState([]);
  const intervalDiff = 1 * 60 * 1000; //every 1 min notification simulation

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

  const dismissNotification = (timestamp) => {
    const newNotifications = notifications.filter(notification => {
      return new Date(notification.timestamp).getTime() !== new Date(timestamp).getTime();
    });
    setNotifications(newNotifications);
  }
  
  return {
    notifications,
    updateNotifications: setNotifications,
    totalNewNotification: notifications.filter((notification) => !notification.seen)?.length,
    dismissNotification,
  };
}

export default useSimulateNotification;
