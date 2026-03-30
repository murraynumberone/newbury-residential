"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  BriefcaseIcon,
  BuildingOfficeIcon,
  HomeIcon,
  InformationCircleIcon,
  PhoneIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Community } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ResidentsDialog } from "./residents-dialog";

type SvgIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>;
type NavLink = { type: "link"; label: string; href: string; icon: SvgIcon };
type NavDialog = { type: "dialog"; label: string; icon: SvgIcon };
type NavItem = NavLink | NavDialog;

const navItems: NavItem[] = [
  { type: "link", label: "Home", href: "/", icon: HomeIcon },
  {
    type: "link",
    label: "Apartments",
    href: "/apartments",
    icon: BuildingOfficeIcon,
  },
  { type: "link", label: "About", href: "/about", icon: InformationCircleIcon },
  { type: "dialog", label: "Residents", icon: UsersIcon },
  { type: "link", label: "Careers", href: "/careers", icon: BriefcaseIcon },
  { type: "link", label: "Contact Us", href: "/contact", icon: PhoneIcon },
];

const navLabelClass = (active: boolean) =>
  cn(
    "cursor-pointer uppercase underline underline-offset-8 decoration-3 transition-colors duration-300 hover:text-brand-foreground",
    active
      ? "text-brand-foreground decoration-current"
      : "text-brand-foreground/90 decoration-transparent hover:decoration-current",
  );

function DesktopItem({
  item,
  active,
  communities,
}: {
  item: NavItem;
  active: boolean;
  communities: Community[];
}) {
  if (item.type === "dialog") {
    return (
      <ResidentsDialog
        communities={communities}
        trigger={<button className={navLabelClass(false)}>{item.label}</button>}
      />
    );
  }

  return (
    <Link href={item.href} className={navLabelClass(active)}>
      {item.label}
    </Link>
  );
}

function MobileItem({
  item,
  onOpenResidents,
}: {
  item: NavItem;
  onOpenResidents: () => void;
}) {
  const Icon = item.icon;

  if (item.type === "dialog") {
    return (
      <DropdownMenuItem onSelect={onOpenResidents}>
        <Icon className="size-4" />
        {item.label}
      </DropdownMenuItem>
    );
  }

  return (
    <DropdownMenuItem asChild>
      <Link href={item.href}>
        <Icon className="size-4" />
        {item.label}
      </Link>
    </DropdownMenuItem>
  );
}

export function Navbar({ communities }: { communities: Community[] }) {
  const pathname = usePathname();
  const [residentsOpen, setResidentsOpen] = useState(false);

  return (
    <>
      <ResidentsDialog
        open={residentsOpen}
        onOpenChange={setResidentsOpen}
        communities={communities}
      />

      <header className="bg-brand/65 fixed inset-x-0 top-0 z-40 border-b border-white/10 shadow-md backdrop-blur-sm">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex items-center justify-between px-6 py-3 lg:px-8"
        >
          <Link href="/" className="font-logo text-brand-foreground text-2xl">
            Newbury <span className="font-bold">Residential</span>
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <DesktopItem
                key={item.label}
                item={item}
                active={item.type === "link" && pathname === item.href}
                communities={communities}
              />
            ))}
          </div>

          {/* Mobile */}
          <div className="flex lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-brand-foreground hover:bg-white/10"
                >
                  <MenuIcon className="size-6" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-52" align="end">
                <DropdownMenuGroup>
                  {navItems.map((item) => (
                    <MobileItem
                      key={item.label}
                      item={item}
                      onOpenResidents={() => setResidentsOpen(true)}
                    />
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </header>
    </>
  );
}
