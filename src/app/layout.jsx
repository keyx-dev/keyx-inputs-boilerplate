import * as fonts from "@/app/fonts.js";
import "modern-normalize/modern-normalize.css";
import "@/app/global.css";

const fontVariableClasses = Object.values(fonts)
  .map((font) => font.variable)
  .join(" ");

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fontVariableClasses}`}>
      <body>{children}</body>
    </html>
  );
}
