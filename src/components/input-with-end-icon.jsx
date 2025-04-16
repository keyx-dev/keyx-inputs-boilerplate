import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import "./input-with-end-icon.scss";

export default function InputWithEndIcon(props) {
  const { icon, className, ...rest } = props;

  const Element = props.as || "div";

  return (
    <Element className={clsx("inputWith_10_90", className)}>
      <input {...rest} className="input_10_88"></input>

      <div className="icon_10_86">
        <Slot className="lucideMail_11_110">{icon}</Slot>
      </div>
    </Element>
  );
}
