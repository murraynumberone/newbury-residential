import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Main } from "@/components/elements/main";
import { TextSection } from "@/components/elements/text-section";

export default function NotFound() {
  return (
    <Main>
      <TextSection
        heading="Page Not Found"
        body={<p>The page you&apos;re looking for doesn&apos;t exist.</p>}
        cta={
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        }
      />
    </Main>
  );
}
