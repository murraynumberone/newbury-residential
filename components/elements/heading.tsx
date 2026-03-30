import type { ComponentProps } from "react";
import { clsx } from "clsx/lite";

const sizeByLevel = {
  1: "text-5xl/12",
  2: "text-4xl/10",
  3: "text-3xl/9",
  4: "text-2xl/8",
  5: "text-xl/7",
  6: "text-lg/7",
} as const;

export function Heading({
  children,
  level = 1,
  light = false,
  className,
  ...props
}: {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  light?: boolean;
} & ComponentProps<"h1">) {
  const Tag = `h${level}` as "h1";
  return (
    <Tag
      className={clsx(
        "font-display tracking-tight text-balance",
        sizeByLevel[level],
        light ? "text-white" : "text-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
