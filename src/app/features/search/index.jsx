import React, { useState } from "react";
import { SearchIcon } from "../../assets/icons";

function SearchComponent({ debounce }) {
    const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSearchValue(value);
    if(debounce) debounce(value);
  };

  return (
    <>
      <div className="py-1 px-2 flex items-center gap-1 border border-slate-300 rounded-md">
        <SearchIcon />
        <input
          type="text"
          value={searchValue}
          className="outline-none border-none w-full h-8"
          onChange={handleSearch}
        />
      </div>
    </>
  );
}

export default SearchComponent;
