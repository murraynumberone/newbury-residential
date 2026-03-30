import type { ComponentProps, ReactNode } from "react";
import { clsx } from "clsx/lite";
import { Container } from "./container";
import { Heading } from "./heading";
import { Text } from "./text";

export function TextSection({
  heading,
  subheading,
  body,
  cta,
  className,
  ...props
}: {
  heading: ReactNode;
  subheading?: ReactNode;
  body: ReactNode;
  cta?: ReactNode;
} & ComponentProps<"section">) {
  return (
    <section className={clsx("py-16", className)} {...props}>
      <Container className="flex flex-col gap-6 sm:gap-8">
        <Heading level={2} className="lg:text-center">
          {heading}
        </Heading>
        {subheading != null ? (
          <p className="text-foreground text-xl font-semibold lg:text-center">
            {subheading}
          </p>
        ) : null}
        <Text size="lg" className="flex flex-col gap-4">
          {body}
        </Text>
        {cta != null ? <div className="lg:self-center">{cta}</div> : null}
      </Container>
    </section>
  );
}
