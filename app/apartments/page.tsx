import type { Metadata } from "next";
import Image from "next/image";
import {
  ApartmentCard,
  ApartmentGrid,
} from "@/components/elements/apartment-grid";
import { Container } from "@/components/elements/container";
import { Main } from "@/components/elements/main";
import { Text } from "@/components/elements/text";
import { PageHero } from "@/components/sections/page-hero";
import { getCommunities } from "@/lib/apartments";

export const metadata: Metadata = {
  title: "Apartments",
  description:
    "Browse all Newbury Residential apartment communities across Michigan, Alabama, Tennessee, Arkansas, and Indiana.",
};

export default async function ApartmentsPage() {
  const communities = await getCommunities();

  return (
    <Main>
      <PageHero
        image={
          <Image
            src="/photos/page-home-hero.webp"
            alt="Newbury Residential communities"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        }
        heading="Live at One of Our Communities Today!"
      />
      <Container className="pb-16">
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
          <Text className="py-16 text-center">No communities found.</Text>
        ) : null}
      </Container>
    </Main>
  );
}
