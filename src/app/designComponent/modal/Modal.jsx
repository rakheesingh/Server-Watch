import React, { useEffect, useRef } from "react";
import Button from "../buttons/Button";
import { CloseIcon } from "../../assets/icons";

const Dialog = ({ isOpen = false, onClose, title, children }) => {
  const ref = useRef(null);

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    if (isOpen && ref.current) {
      ref.current.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      tabIndex={-1}
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 p-0"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div className="bg-white rounded-lg shadow-lg w-1/2 min-w-max p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <div className="w-6 h-6">
            <Button
              variant={"tertiary"}
              className="text-gray-700 text-2xl leading-none hover:text-gray-900 cursor-pointer w-full p-0"
              onClick={handleClose}
            >
              <CloseIcon className="w-full h-full" />
            </Button>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Dialog;
