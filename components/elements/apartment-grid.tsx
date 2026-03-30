import type { ComponentProps, ReactNode } from "react";
import {
  ArrowTopRightOnSquareIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { clsx } from "clsx/lite";
import { Button } from "@/components/ui/button";

export function ApartmentCard({
  img,
  name,
  phone,
  address,
  website,
  className,
  ...props
}: {
  img: ReactNode;
  name: ReactNode;
  phone: string;
  address: string;
  website: string;
} & ComponentProps<"li">) {
  const mapsHref = `https://maps.google.com/?q=${encodeURIComponent(address)}`;

  return (
    <li
      className={clsx(
        "group bg-brand relative rounded-lg p-2 transition-opacity hover:opacity-90",
        className,
      )}
      {...props}
    >
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm shadow *:size-full *:object-cover">
        {img}
      </div>
      <div className="flex flex-col gap-6 p-4">
        <div>
          <h3 className="text-background text-xl font-medium">
            <a href={website} target="_blank" rel="noopener noreferrer">
              <span className="absolute inset-0" />
              {name}
            </a>
          </h3>
          <div className="text-background mt-2 flex flex-col gap-2">
            <a
              href={`tel:${phone.replace(/\D/g, "")}`}
              className="relative flex items-center gap-1.5 hover:underline"
            >
              <PhoneIcon className="size-4 shrink-0" />
              {phone}
            </a>
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-1.5 hover:underline"
            >
              <MapPinIcon className="size-4 shrink-0" />
              {address}
            </a>
          </div>
        </div>
        <Button variant="secondary" className="relative w-full" asChild>
          <a href={website} target="_blank" rel="noopener noreferrer">
            Explore Community
            <ArrowTopRightOnSquareIcon className="size-4" />
          </a>
        </Button>
      </div>
    </li>
  );
}

export function ApartmentGrid({
  children,
  className,
  ...props
}: ComponentProps<"ul">) {
  return (
    <ul
      role="list"
      className={clsx(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
      {...props}
    >
      {children}
    </ul>
  );
}
