import React, { useState } from "react";
import Select from "react-select";
import { TextBase } from "../typography/Typography";
import PropTypes from "prop-types";

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

ReactSelect.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array
};


export default ReactSelect;
