import { useEffect, useState } from "react";
import { generateRandomnumber } from "../../../utils/helper";
import { alertsNotification } from "../network/api";

function useSimulateNotification() {
  const [notifications, setNotifications] = useState([]);
  const intervalDiff = 5 * 1000;

  useEffect(() => {
    let timerid = setInterval(() => {
      const index = generateRandomnumber(0, alertsNotification.length - 1);
      setNotifications((prev) => [
        { ...alertsNotification[index], seen: false },
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
