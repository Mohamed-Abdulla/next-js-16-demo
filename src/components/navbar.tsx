"use client";
import { FC } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NAV_LINKS } from "@/constants/navlinks";
import { useTheme } from "next-themes";
import Image from "next/image";
import { ModeToggle } from "./toggle-theme";

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = ({}) => {
  const { theme } = useTheme();
  return (
    <nav className="flex w-full items-center justify-between border-b p-3 backdrop-blur-sm">
      <NavigationMenu>
        <NavigationMenuList className="">
          {NAV_LINKS.map((link) => (
            <NavigationMenuItem key={link.id}>
              <NavigationMenuLink href={link.href} className="font-medium">
                {link.href === "/" ? (
                  <div className="flex items-center gap-x-2">
                    <Image
                      src={`/assets/${theme === "dark" ? "logo-white" : "logo"}.svg`}
                      alt="Logo"
                      width={120}
                      height={30}
                    />
                    <div className="h-6 border border-r border-r-orange-600" />
                  </div>
                ) : (
                  link.title
                )}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle />
    </nav>
  );
};
