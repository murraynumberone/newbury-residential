import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ApartmentCard,
  ApartmentGrid,
} from "@/components/elements/apartment-grid";
import { Container } from "@/components/elements/container";
import { Main } from "@/components/elements/main";
import { Text } from "@/components/elements/text";
import { TextSection } from "@/components/elements/text-section";
import { CityFilter } from "@/components/sections/city-filter";
import { PageHero } from "@/components/sections/page-hero";
import { getCommunities } from "@/lib/apartments";
import { getAreaInfo } from "@/lib/areas";
import { getCitiesByState, getLocations } from "@/lib/locations";

export const dynamicParams = false;

export async function generateStaticParams() {
  const { states } = await getLocations();
  return states.map((s) => ({ state: s.value }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;
  const areaInfo = await getAreaInfo(state);
  if (!areaInfo) return {};
  return {
    title: areaInfo.pageHeading,
    description: areaInfo.description[0],
  };
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;

  const [communities, areaInfo, cities] = await Promise.all([
    getCommunities({ state }),
    getAreaInfo(state),
    getCitiesByState(state),
  ]);

  if (!areaInfo) notFound();

  return (
    <Main>
      <PageHero
        image={
          areaInfo.image ? (
            <Image
              src={areaInfo.image}
              alt={areaInfo.heading}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          ) : undefined
        }
        heading={areaInfo.pageHeading}
        cta={<CityFilter state={state} cities={cities} />}
      />
      <Container className="py-16">
        <ApartmentGrid>
          {communities.map((c) => (
            <ApartmentCard
              key={c.slug}
              img={
                <Image
                  src={c.img}
                  alt={c.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              }
              name={c.name}
              phone={c.phone}
              address={c.address}
              website={c.website}
            />
          ))}
        </ApartmentGrid>
        {communities.length === 0 ? (
          <Text className="py-16 text-center">
            No communities found in this state.
          </Text>
        ) : null}
      </Container>
      {areaInfo.description.length > 0 ? (
        <TextSection
          heading={areaInfo.heading}
          body={areaInfo.description.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        />
      ) : null}
    </Main>
  );
}
