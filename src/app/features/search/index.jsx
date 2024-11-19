import React, { useState } from "react";
import { CloseIcon, SearchIcon } from "../../assets/icons";

function SearchComponent({ debounce, placeholder }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSearchValue(value);
    if(debounce) debounce(value);
  };

  const clearInput = (e) =>{
   e.stopPropagation();
   setSearchValue("");
   debounce("");
  }

  return (
    <>
      <div className="py-1 px-2 flex items-center gap-1 border border-slate-300 rounded-md">
        <SearchIcon />
        <input
          type="text"
          placeholder={placeholder}
          value={searchValue}
          className="outline-none border-none w-full h-8"
          onChange={handleSearch}
        />
        <CloseIcon className="w-4 h-4 cursor-pointer hover:animate-pulse" onClick={clearInput}/>
      </div>
    </>
  );
}

export default SearchComponent;
