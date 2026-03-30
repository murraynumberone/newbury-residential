import type { ComponentProps } from "react";
import { clsx } from "clsx/lite";

export function Text({
  children,
  className,
  size = "md",
  ...props
}: ComponentProps<"div"> & { size?: "md" | "lg" }) {
  return (
    <div
      className={clsx(
        size === "md" && "text-base/7",
        size === "lg" && "text-2xl/10",
        "text-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
