import clsx from "clsx";
import "./textarea.scss";

export default function Textarea(props) {
  const { className, ...rest } = props;

  const Element = props.as || "textarea";

  return (
    <Element {...rest} className={clsx("textarea_18_211", className)}></Element>
  );
}
