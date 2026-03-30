import type { Metadata } from "next";
import { Main } from "@/components/elements/main";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Newbury Residential's mission to create exceptional multifamily living spaces and our approach to property management.",
};

export default function AboutPage() {
  return (
    <Main>
      <PageHero
        heading="About Us"
        body={
          <>
            <p>
              The experience of our firm ranges across a wide variety of
              multifamily asset classes and geographical locations. While we
              have a specialization in the purchase of multifamily properties
              located predominantly in secondary and tertiary real estate
              markets, we are well-versed in the needs and workings of many
              multifamily investment types. Newbury Residential chooses
              investment opportunities that fit the company&apos;s proven
              acquisition criteria and has a unique ability to close
              transactions quickly and efficiently.
            </p>
            <p>
              We are experts in the areas of rebranding, repositioning, and
              transforming the assets within our portfolio through strategic
              interior and exterior renovations that speak to the particular
              needs of each investment. Our firm also provides the insight
              needed for management and operational functions to run at peak
              efficiency and effectiveness, having consistently exceeded
              national averages for over a decade
            </p>
          </>
        }
      />
    </Main>
  );
}
