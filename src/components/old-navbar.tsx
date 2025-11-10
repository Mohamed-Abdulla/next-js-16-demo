"use client";

import { FC, useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NAV_LINKS } from "@/lib/navlinks";
import { useTheme } from "next-themes";
import Image from "next/image";
import { ModeToggle } from "./toggle-theme";
import Link from "next/link";

export const Navbar: FC = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("iam called");
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <nav className="flex w-full items-center justify-between border-b p-3 backdrop-blur-sm">
      <NavigationMenu>
        <NavigationMenuList>
          {NAV_LINKS.map((link) => (
            <NavigationMenuItem key={link.id}>
              <NavigationMenuLink
                href={link.href}
                className="font-medium"
                asChild
              >
                <Link href={link.href}>
                  {link.href === "/" ? (
                    <div className="flex items-center gap-x-2">
                      {mounted && (
                        <Image
                          src={`/assets/${
                            currentTheme === "dark" ? "logo-white" : "logo"
                          }.svg`}
                          alt="Logo"
                          width={120}
                          height={30}
                        />
                      )}
                      <div className="h-6 border-r border-r-orange-600" />
                    </div>
                  ) : (
                    link.title
                  )}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle />
    </nav>
  );
};
