import clsx from "clsx";
import "./input.scss";

export default function Input(props) {
  const { className, ...rest } = props;

  const Element = props.as || "input";

  return <Element {...rest} className={clsx("input_6_3", className)}></Element>;
}
