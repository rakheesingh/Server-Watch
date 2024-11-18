import React from "react";

function WithTopComponent(WrappedComponenet) {
  return function ({ children, ...props }) {
    return (
      <div className="relative">
        {children}
        <WrappedComponenet {...props} />
      </div>
    );
  };
}

export default WithTopComponent;
