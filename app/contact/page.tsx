import type { Metadata } from "next";
import { Main } from "@/components/elements/main";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Newbury Residential for inquiries about our apartment communities.",
};

export default function ContactPage() {
  return (
    <Main>
      <PageHero heading="Contact Us" />
    </Main>
  );
}
