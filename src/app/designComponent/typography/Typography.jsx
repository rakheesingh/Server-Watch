import classNames from "classnames";
import PropTypes from "prop-types";

function Typography({
  type = "primary",
  className,
  textColor,
  inline = false,
  children,
  ...props
}) {
  return (
    <div
      className={classNames(
        "wm-typography",
        textColor,
        {
          "inline-block": inline,
        },
        {
          "text-xs  font-medium": type === "xs",
        },
        {
          "text-sm  font-medium": type === "sm",
        },
        {
          "text-base   font-medium ": type === "base",
        },
        {
          "text-large   font-medium ": type === "large",
        },
        {
          "text-xl  font-medium ": type === "xl",
        },
        {
          "text-2xl  font-medium ": type === "2xl",
        },
        {
          "text-3xl  font-medium ": type === "3xl",
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

Typography.propTypes = {
  type: PropTypes.oneOf(["xs", "sm", "base", "large", "xl", "2xl", "3xl"]),

  /**
   * Tailwind text-color-variant class
   * */
  textColor: PropTypes.string,
};

/**
 * Used for extra smaller text
 */
const TextXS = (props) => {
  return <Typography type='xs' {...props}></Typography>;
};

TextXS.propTypes = {
  /**
   * Tailwind text-color-variant class
   * */
  textColor: PropTypes.string,
  /**
   * Pass text as children
   * */
  children: PropTypes.any,
};
TextXS.defaultProps = {
  textColor: "text-coolGray-500",
};

/**
 * Used for smaller text
 */
const TextSM = (props) => {
  return <Typography type='sm' {...props}></Typography>;
};

TextSM.propTypes = {
  /**
   * Tailwind text-color-variant class
   * */
  textColor: PropTypes.string,
  /**
   * Pass text as children
   * */
  children: PropTypes.any,
};
TextSM.defaultProps = {
  textColor: "text-coolGray-500",
};

/**
 * Use for all information
 */
const TextBase = (props) => {
  return <Typography type='base' {...props}></Typography>;
};

TextBase.propTypes = {
  /**
   * Tailwind text-color-variant class
   * */
  textColor: PropTypes.string,
  /**
   * Pass text as children
   * */
  children: PropTypes.any,
};
TextBase.defaultProps = {
  textColor: "text-coolGray-900",
};

/**
 * Use for subheaders etc
 */
const TextLarge = (props) => {
  return <Typography type='large' {...props} />;
};
TextLarge.propTypes = {
  /**
   * Tailwind text-color-variant class
   * */
  textColor: PropTypes.string,
  /**
   * Pass text as children
   * */
  children: PropTypes.any,
};

TextLarge.defaultProps = {
  textColor: "text-coolGray-900",
};

/**
 * Use for subheaders etc
 */
const TextXL = (props) => {
  return <Typography type='xl' {...props} />;
};
TextXL.propTypes = {
  /**
   * Tailwind text-color-variant class
   * */
  textColor: PropTypes.string,
  /**
   * Pass text as children
   * */
  children: PropTypes.any,
};

TextXL.defaultProps = {
  textColor: "text-coolGray-900",
};
/**
 * Used Highest visual heirarcy ,like page headings
 */
const Text2XL = (props) => {
  return <Typography type='2xl' {...props} />;
};
Text2XL.propTypes = {
  /**
   * Tailwind text-color-variant class
   * */
  textColor: PropTypes.string,
  /**
   * Pass text as children
   * */
  children: PropTypes.any,
};

Text2XL.defaultProps = {
  textColor: "text-coolGray-900",
};

/**
 * Used Highest visual heirarcy ,like page headings
 */
const Text3XL = (props) => {
  return <Typography type='3xl' {...props} />;
};
Text3XL.propTypes = {
  /**
   * Tailwind text-color-variant class
   * */
  textColor: PropTypes.string,
  /**
   * Pass text as children
   * */
  children: PropTypes.any,
};

Text3XL.defaultProps = {
  textColor: "text-coolGray-900",
};

export { TextXS, TextSM, TextBase, TextLarge, Text2XL, TextXL, Text3XL };
