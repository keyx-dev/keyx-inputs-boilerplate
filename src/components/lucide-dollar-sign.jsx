import clsx from "clsx";
import "./lucide-dollar-sign.scss";

export default function LucideDollarSign(props) {
  const { className, ...rest } = props;

  const Element = props.as || "div";

  return (
    <Element {...rest} className={clsx("lucideDollarSign_24_23", className)}>
      <svg
        width="10"
        height="16"
        viewBox="0 0 10 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="vector_24_22"
      >
        <path
          d="M5 1.33334V14.6667M8.33333 3.33334H3.33333C2.7145 3.33334 2.121 3.57918 1.68342 4.01676C1.24583 4.45435 1 5.04784 1 5.66668C1 6.28552 1.24583 6.87901 1.68342 7.31659C2.121 7.75418 2.7145 8.00001 3.33333 8.00001H6.66667C7.28551 8.00001 7.879 8.24584 8.31658 8.68343C8.75417 9.12101 9 9.71451 9 10.3333C9 10.9522 8.75417 11.5457 8.31658 11.9833C7.879 12.4208 7.28551 12.6667 6.66667 12.6667H1"
          stroke="black"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Element>
  );
}
