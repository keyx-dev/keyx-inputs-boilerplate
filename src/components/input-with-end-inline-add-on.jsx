import clsx from "clsx";
import "./input-with-end-inline-add-on.scss";

export default function InputWithEndInlineAddOn(props) {
  const { endText = ".com", className, ...rest } = props;

  const Element = props.as || "div";

  return (
    <Element className={clsx("inputWith_15_161", className)}>
      <input {...rest} className="input_14_148"></input>

      <div className="inlineAddOn_14_146">
        {endText && <div className="com_14_147">{endText}</div>}
      </div>
    </Element>
  );
}
