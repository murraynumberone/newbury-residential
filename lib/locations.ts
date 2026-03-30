import type { LocationOption } from "./types";

export type { LocationOption };

export type Locations = {
  states: LocationOption[];
  cities: LocationOption[];
};

const citiesByState: Record<string, LocationOption[]> = {
  mi: [
    { value: "lansing", label: "Lansing" },
    { value: "jackson", label: "Jackson" },
  ],
  al: [{ value: "robertsdale", label: "Robertsdale" }],
  tn: [
    { value: "ashland-city", label: "Ashland City" },
    { value: "columbia", label: "Columbia" },
    { value: "johnson-city", label: "Johnson City" },
    { value: "lebanon", label: "Lebanon" },
    { value: "kingsport", label: "Kingsport" },
  ],
  ar: [{ value: "hot-springs", label: "Hot Springs" }],
  in: [{ value: "plainfield", label: "Plainfield" }],
};

export async function getLocations(): Promise<Locations> {
  return {
    states: [
      { value: "mi", label: "Michigan" },
      { value: "al", label: "Alabama" },
      { value: "tn", label: "Tennessee" },
      { value: "ar", label: "Arkansas" },
      { value: "in", label: "Indiana" },
    ],
    cities: Object.values(citiesByState).flat(),
  };
}

export async function getCitiesByStateMap(): Promise<
  Record<string, LocationOption[]>
> {
  return citiesByState;
}

export async function getCitiesByState(
  state: string,
): Promise<LocationOption[]> {
  return citiesByState[state] ?? [];
}
