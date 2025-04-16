import clsx from "clsx";
import "./input-with-start-inline-add-on.scss";

export default function InputWithStartInlineAddOn(props) {
  const { startText = "https://", className, ...rest } = props;

  const Element = props.as || "div";

  return (
    <Element className={clsx("inputWith_11_138", className)}>
      <div className="inlineAddOn_11_134">
        {startText && <div className="https_11_140">{startText}</div>}
      </div>

      <input {...rest} className="input_11_136"></input>
    </Element>
  );
}
