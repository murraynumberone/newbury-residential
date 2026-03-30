"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Community } from "@/lib/types";

type ResidentsDialogProps = {
  communities: Community[];
} & (
  | { trigger: React.ReactNode; open?: never; onOpenChange?: never }
  | { trigger?: never; open: boolean; onOpenChange: (open: boolean) => void }
);

export function ResidentsDialog({
  trigger,
  open,
  onOpenChange,
  communities,
}: ResidentsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger != null ? (
        <DialogTrigger asChild>{trigger}</DialogTrigger>
      ) : null}
      <DialogContent className="bg-brand flex max-h-[85vh] max-w-3xl flex-col sm:max-w-3xl">
        <DialogHeader className="shrink-0">
          <DialogTitle className="text-brand-foreground">
            Select Your Community
          </DialogTitle>
        </DialogHeader>
        <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 overflow-y-auto py-4 sm:grid-cols-2">
          {communities.map((c) => (
            <div
              key={c.slug}
              className="border-border bg-background focus-within:ring-ring hover:border-border/60 hover:bg-muted/90 relative flex items-center gap-4 rounded-lg border px-4 py-3 shadow-xs transition-colors focus-within:ring-2"
            >
              <div className="relative size-24 shrink-0 overflow-hidden rounded-md">
                <Image
                  src={c.img}
                  alt={c.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <a
                  href={c.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:outline-none"
                >
                  <span aria-hidden="true" className="absolute inset-0" />
                  <p className="text-foreground truncate text-sm font-medium">
                    {c.name}
                  </p>
                  <p className="text-muted-foreground truncate text-sm">
                    {c.city}, {c.state.toUpperCase()}
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
