import clsx from "clsx";
import "./lucide-mail.scss";

export default function LucideMail(props) {
  const { className, ...rest } = props;

  const Element = props.as || "div";

  return (
    <Element {...rest} className={clsx("lucideMail_10_96", className)}>
      <svg
        viewBox="0 0 16 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="vector_10_95"
      >
        <path
          d="M14.6667 2.66666L8.68668 6.46666C8.48086 6.59561 8.24289 6.664 8.00001 6.664C7.75713 6.664 7.51916 6.59561 7.31334 6.46666L1.33334 2.66666M2.66668 0.666656H13.3333C14.0697 0.666656 14.6667 1.26361 14.6667 1.99999V9.99999C14.6667 10.7364 14.0697 11.3333 13.3333 11.3333H2.66668C1.9303 11.3333 1.33334 10.7364 1.33334 9.99999V1.99999C1.33334 1.26361 1.9303 0.666656 2.66668 0.666656Z"
          stroke="black"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Element>
  );
}
