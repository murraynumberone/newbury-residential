import type { Metadata } from "next";
import { Main } from "@/components/elements/main";
import { TextSection } from "@/components/elements/text-section";
import { Footer, FooterLink } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { getCitiesByStateMap, getLocations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Find Your Next Home",
  description:
    "Browse apartment communities by Newbury Residential across Michigan, Alabama, Tennessee, Arkansas, and Indiana.",
};

export default async function Home() {
  const { states } = await getLocations();
  const citiesByState = await getCitiesByStateMap();

  return (
    <div className="bg-background font-sans">
      <Main>
        <Hero
          imageSrc="/photos/page-home-hero.webp"
          states={states}
          citiesByState={citiesByState}
        />
        <TextSection
          heading="Who We Are"
          body={
            <p>
              Newbury Residential is a property management company with over a
              decade of experience in the multifamily housing industry. We
              specialize in providing amazing homes to our residents and provide
              full service apartment experiences. You will absolutely love
              living at one of our communities. Every day, Newbury Residential
              strives to provide the best possible resident experiences and we
              are committed to providing the highest quality homes and services
              to our residents. We are a company that cares about our residents
              and we are always looking for ways to improve our communities and
              the lives of our residents.
            </p>
          }
        />
      </Main>
      <Footer
        id="footer"
        links={
          <>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/apartments">Apartments</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/careers">Careers</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </>
        }
        fineprint={"© 2026 Newbury Residential - Equal Housing Opportunity"}
      />
    </div>
  );
}
