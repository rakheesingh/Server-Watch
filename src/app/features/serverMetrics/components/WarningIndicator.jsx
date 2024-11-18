import React from "react";
import { Tooltip } from "react-tooltip"; 

function WarningIndicator({toolTipLabel}) {
  return (
    <div>
      <div
        className="absolute -top-1 -left-1 w-3 h-3 bg-red-500 rounded-full animate-pulse duration-75"
        data-tooltip-id={toolTipLabel} 
      ></div>
      <Tooltip
        place="top"
        type="dark"
        effect="solid"
        id={toolTipLabel}
        content={toolTipLabel}
      />
    </div>
  );
}

export default WarningIndicator;
