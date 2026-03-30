import type { ComponentProps, ReactNode } from "react";
import { clsx } from "clsx/lite";
import { Container } from "../elements/container";

export function FooterLink({
  href,
  className,
  ...props
}: { href: string } & Omit<ComponentProps<"a">, "href">) {
  return (
    <li className={clsx("text-brand-foreground", className)}>
      <a href={href} {...props} />
    </li>
  );
}

export function Footer({
  links,
  fineprint,
  className,
  ...props
}: {
  links: ReactNode;
  socialLinks?: ReactNode;
  fineprint: ReactNode;
} & ComponentProps<"footer">) {
  return (
    <footer className={clsx("pt-16", className)} {...props}>
      <div className="bg-brand text-brand-foreground py-10">
        <Container className="flex flex-col gap-10 text-center text-sm/7">
          <div className="flex flex-col gap-6">
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
                {links}
              </ul>
            </nav>
          </div>
          <div className="text-brand-foreground">{fineprint}</div>
        </Container>
      </div>
    </footer>
  );
}
