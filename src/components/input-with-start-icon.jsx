import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import "./input-with-start-icon.scss";

export default function InputWithStartIcon(props) {
  const { icon, className, ...rest } = props;

  const Element = props.as || "div";

  return (
    <Element className={clsx("inputWith_6_22", className)}>
      <div className="icon_6_12">
        <Slot className="lucideAtSign_6_20">{icon}</Slot>
      </div>

      <input {...rest} className="input_8_79"></input>
    </Element>
  );
}
