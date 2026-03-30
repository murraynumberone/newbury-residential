import type { ComponentProps, ReactNode } from "react";
import { clsx } from "clsx/lite";
import { Container } from "../elements/container";
import { Heading } from "../elements/heading";
import { Text } from "../elements/text";

export function PageHero({
  image,
  heading,
  subheading,
  body,
  cta,
  className,
  ...props
}: {
  image?: ReactNode;
  heading: ReactNode;
  subheading?: ReactNode;
  body?: ReactNode;
  cta?: ReactNode;
} & ComponentProps<"section">) {
  return (
    <section className={clsx("pb-16", className)} {...props}>
      {image != null ? (
        <div className="relative aspect-16/5 w-full overflow-hidden">
          {image}
        </div>
      ) : null}
      <Container
        className={clsx(
          "flex flex-col gap-6 sm:gap-8",
          image != null ? "mt-8" : "pt-24",
        )}
      >
        <Heading className="lg:text-center">{heading}</Heading>
        {subheading != null ? (
          <h2 className="text-foreground text-xl font-semibold lg:text-center">
            {subheading}
          </h2>
        ) : null}
        {body != null ? (
          <Text size="lg" className="flex flex-col gap-4">
            {body}
          </Text>
        ) : null}
        {cta != null ? <div className="lg:self-center">{cta}</div> : null}
      </Container>
    </section>
  );
}
