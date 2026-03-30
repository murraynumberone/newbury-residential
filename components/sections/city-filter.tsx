"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { clsx } from "clsx/lite";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { LocationOption } from "@/lib/types";

export function CityFilter({
  state,
  cities,
  currentCity,
}: {
  state: string;
  cities: LocationOption[];
  currentCity?: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleChange(city: string) {
    startTransition(() => {
      if (city === "all") {
        router.replace(`/apartments/${state}`);
      } else {
        router.replace(`/apartments/${state}/${city}`);
      }
    });
  }

  return (
    <Select
      size="lg"
      value={currentCity ?? "all"}
      onValueChange={handleChange}
      disabled={isPending}
    >
      <SelectTrigger
        className={clsx(
          "w-full sm:w-56",
          isPending && "opacity-50 transition-opacity",
        )}
      >
        <SelectValue placeholder="All cities" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All cities</SelectItem>
        {cities.map((c) => (
          <SelectItem key={c.value} value={c.value}>
            {c.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
