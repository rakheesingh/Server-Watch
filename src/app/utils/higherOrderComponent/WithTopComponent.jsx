import React from "react";

function WithTopComponent(WrappedComponent) {
  const ComponentWithTop = ({ children, ...props }) => {
    return (
      <div className="relative">
        {children}
        <WrappedComponent {...props} />
      </div>
    );
  };

  // Set the display name for easier debugging
  ComponentWithTop.displayName = `WithTop(${getDisplayName(WrappedComponent)})`;

  return ComponentWithTop;
}

// Helper function to get the display name of the wrapped component
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default WithTopComponent;
