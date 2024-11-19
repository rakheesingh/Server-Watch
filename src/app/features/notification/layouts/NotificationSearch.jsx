import React from "react";
import SearchComponent from "../../search";
import useDebounce from "../../../utils/hooks/useDebounce";

const FIELDS_SERACH = ["type", "serverName", "location"];

function NotificationSearch({
  setFilteredNotification,
  notifications = [],
}) {
  const handleSearch = (searchValue) => {
    // eslint-disable-next-line eqeqeq
    if (searchValue?.trim() == "") {
      setFilteredNotification((prev) => ({ ...prev, isSearching: false }));
      return;
    }
    const newNotifications = notifications.filter((notification) =>
      FIELDS_SERACH.some((field) =>
        notification[field]?.toLowerCase()?.includes(searchValue)
      )
    );
    setFilteredNotification(() => ({ notifications: newNotifications, isSearching: true }));
  };
  const debounce = useDebounce(handleSearch, 100);
  return <SearchComponent debounce={debounce} placeholder={"Search by server name, region or alert type"} />;
}

export default NotificationSearch;
