import type { ComponentProps, ReactNode } from "react";
import { clsx } from "clsx/lite";
import { Container } from "./container";
import { Text } from "./text";

export function Section({
  eyebrow,
  headline,
  subheadline,
  cta,
  className,
  children,
  ...props
}: {
  eyebrow?: ReactNode;
  headline?: ReactNode;
  subheadline?: ReactNode;
  cta?: ReactNode;
} & ComponentProps<"section">) {
  return (
    <section className={clsx("py-16", className)} {...props}>
      <Container className="flex flex-col gap-10 sm:gap-16">
        {headline != null ? (
          <div className="flex max-w-2xl flex-col gap-6">
            {eyebrow != null ? (
              <Text className="text-sm font-semibold uppercase tracking-wide">
                {eyebrow}
              </Text>
            ) : null}
            <Text className="text-3xl font-bold tracking-tight">
              {headline}
            </Text>
            {subheadline != null ? (
              <Text className="text-pretty">{subheadline}</Text>
            ) : null}
            {cta}
          </div>
        ) : null}
        <div>{children}</div>
      </Container>
    </section>
  );
}
