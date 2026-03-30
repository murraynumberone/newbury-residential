import type { Metadata } from "next";
import { Poiret_One, Roboto } from "next/font/google";
import { Navbar } from "@/components/sections/navbar";
import { getCommunities } from "@/lib/apartments";
import { cn } from "@/lib/utils";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "700"],
});

const poiretOne = Poiret_One({
  subsets: ["latin"],
  variable: "--font-logo",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Newbury Residential",
    template: "%s | Newbury Residential",
  },
  description:
    "Newbury Residential is a property management company specializing in multifamily apartment communities across the Southeast and Midwest.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const communities = await getCommunities();

  return (
    <html
      lang="en"
      style={{ colorScheme: "light" }}
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        roboto.variable,
        poiretOne.variable,
      )}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="focus:bg-background sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-md"
        >
          Skip to main content
        </a>
        <Navbar communities={communities} />
        {children}
      </body>
    </html>
  );
}
