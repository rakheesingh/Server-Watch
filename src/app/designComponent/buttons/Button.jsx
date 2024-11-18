import classNames from "classnames";
import PropTypes from "prop-types";
/**
 * Component to use for most user interactions
 */
export default function Button({
  className,
  variant,
  children,
  loading,
  startIcon,
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
        "text-base items-center justify-center flex rounded disabled:opacity-30 disabled:cursor-not-allowed",
        {
          "px-2.5 py-3 bg-brand-blue-1 text-white font-medium hover:bg-brand-blue-2 active:bg-brand-blue-3 ":
            variant === "primary",
        },
        {
          "px-2.5 py-3 bg-white border-secondary border-medium-gray  text-gray-500 font-medium hover:text-brand-blue-2 hover:border-brand-blue-2  active:text-brand-blue-3 active:border-brand-blue-3":
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
      {startIcon && <div className='ml-1 mr-2'>{startIcon}</div>}
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
  startIcon: PropTypes.element,
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
