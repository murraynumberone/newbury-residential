"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { LocationOption } from "@/lib/types";
import { Heading } from "../elements/heading";

export function Hero({
  imageSrc,
  states,
  citiesByState,
}: {
  imageSrc: string;
  states: LocationOption[];
  citiesByState: Record<string, LocationOption[]>;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const cities = selectedState ? (citiesByState[selectedState] ?? []) : [];

  function handleStateChange(state: string) {
    setSelectedState(state);
    setSelectedCity("");
  }

  function handleSearch() {
    startTransition(() => {
      if (selectedState && selectedCity) {
        router.push(`/apartments/${selectedState}/${selectedCity}`);
      } else if (selectedState) {
        router.push(`/apartments/${selectedState}`);
      } else {
        router.push("/apartments");
      }
    });
  }

  return (
    <section
      className="relative flex min-h-svh items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <Card className="bg-foreground/80 relative z-10 mx-4 w-full max-w-xl border-0 backdrop-blur-sm">
        <CardContent className="flex justify-center py-14">
          <div className="flex w-full max-w-md flex-col gap-6">
            <Heading light className="text-center">
              Find Your Next Home
            </Heading>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="state-select" className="sr-only">
                State
              </label>
              <Select
                size="lg"
                value={selectedState}
                onValueChange={handleStateChange}
                disabled={isPending}
              >
                <SelectTrigger
                  id="state-select"
                  className="bg-background text-foreground w-full"
                >
                  <SelectValue placeholder="Choose a state" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((s) => (
                    <SelectItem key={s.value} value={s.value}>
                      {s.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="city-select" className="sr-only">
                City
              </label>
              <Select
                size="lg"
                value={selectedCity}
                onValueChange={setSelectedCity}
                disabled={!selectedState || isPending}
              >
                <SelectTrigger
                  id="city-select"
                  className="bg-background text-foreground w-full"
                >
                  <SelectValue placeholder="Choose a city" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((c) => (
                    <SelectItem key={c.value} value={c.value}>
                      {c.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button
              variant="cta"
              size="lg"
              className="w-full"
              onClick={handleSearch}
              disabled={isPending}
            >
              {isPending ? "Searching…" : "Search"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
