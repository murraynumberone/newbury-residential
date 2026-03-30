import type { ComponentProps } from "react";
import { clsx } from "clsx/lite";

export function Main({
  children,
  className,
  ...props
}: ComponentProps<"main">) {
  return (
    <main
      id="main-content"
      className={clsx("isolate overflow-clip", className)}
      {...props}
    >
      {children}
    </main>
  );
}
