import classNames from "classnames";
import PropTypes from "prop-types";
import { CircularProgress } from "@mui/material";
/**
 * Component to use for most user interactions
 */
export default function Button({
  className,
  variant,
  children,
  loading,
  startIcon,
  endIcon,
  onClick,
  disabled,
  ...props
}) {
    
  const handleClick = (e) => {
    const isDisabled = disabled || loading;
    if (isDisabled) {
      return null;
    }
    onClick(e);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled || loading}
      className={classNames(
        //   common for all variants
        "px-2.5 py-3 text-base items-center justify-center flex rounded disabled:opacity-30 disabled:cursor-not-allowed",
        {
          "bg-brand-blue-1 text-white font-medium hover:bg-brand-blue-2 active:bg-brand-blue-3 ":
            variant === "primary",
        },
        {
          "bg-white border-secondary border-medium-gray  text-coolGray-500 font-medium hover:text-brand-blue-2 hover:border-brand-blue-2  active:text-brand-blue-3 active:border-brand-blue-3":
            variant === "secondary",
        },
        {
          "bg-transparent text-gray-700 font-medium hover:text-brand-blue-1 active:text-brand-blue-3 ":
            variant === "tertiary",
        },
        className,
      )}
      {...props}
    >
      {loading && <CircularProgress color='inherit' size={15} className='mr-5' />}
      {startIcon && <div className='ml-1 mr-2'>{startIcon}</div>}
      {children}
      {endIcon && <div className='ml-2 mr-1'>{endIcon}</div>}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
  startIcon: PropTypes.element,
  endIcon: PropTypes.element,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: "primary",
  loading: false,
  disabled: false,
  onClick: () => null,
};
