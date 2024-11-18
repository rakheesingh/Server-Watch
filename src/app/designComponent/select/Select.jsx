import React, { useState } from "react";
import Select from "react-select";
import { TextBase } from "../typography/Typography";

const ReactSelect = ({
  options,
  label,
  placeholder,
  onChange,
  initialSelected,
}) => {
  const [selectedOption, setSelectedOption] = useState({label: initialSelected, value: initialSelected});

  const handleChange = (selected) => {
    setSelectedOption(selected);
    if (onChange) onChange(selected.value);
  };

  return (
    <div>
      <TextBase>{label}</TextBase>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        placeholder={placeholder}
      />
    </div>
  );
};

export default ReactSelect;
