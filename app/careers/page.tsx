import type { Metadata } from "next";
import Image from "next/image";
import { Main } from "@/components/elements/main";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore career opportunities at Newbury Residential. Join our team working in construction, maintenance, and property management across the country.",
};

export default function CareersPage() {
  return (
    <Main>
      <PageHero
        image={
          <Image
            src="/photos/page-home-hero.webp"
            alt="Newbury Residential community"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        }
        heading="Explore Our Opportunities"
        subheading="Embark on a Rewarding Career Path with Us! We&rsquo;re eagerly seeking passionate individuals to grow with."
        body={
          <>
            <p>
              At Newbury Residential, we are more than just a real estate firm;
              we are a vibrant community of innovators shaping the future of
              multifamily living across the country. Specializing in the
              acquisition and transformation of apartment complexes, we offer a
              unique canvas for creativity and growth. Our expansive portfolio
              spans diverse regions, presenting endless opportunities to learn
              and excel in construction, maintenance, and management. As a part
              of our team, you&rsquo;ll play a crucial role in massive
              renovation projects, gaining invaluable insights into the
              intricate process of turning structures into thriving living
              spaces.
            </p>
            <p>
              We are committed to nurturing your professional development,
              offering a plethora of learning opportunities that cover the full
              spectrum of real estate management and construction. Whether
              you&rsquo;re passionate about the hands-on aspects of building
              renovation or keen on mastering the nuances of property
              management, Newbury Residential is the place where your skills
              will not only be valued but also cultivated. Join us, and be a
              part of a team that&rsquo;s redefining multifamily real estate,
              one property at a time. Here, your potential for growth is as
              boundless as our portfolio of transformative projects.
            </p>
          </>
        }
      />
    </Main>
  );
}
