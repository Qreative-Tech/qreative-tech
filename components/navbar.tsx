"use client";

import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";

import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "Product", "About", "Contact Us"];
  return (
    <HeroUINavbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-black-500 h-[101.07975769042969px]"
    >
      <NavbarContent>
        <NavbarBrand>
          <Image
            alt="Qreative Tech Logo"
            src="/qreativelogo.png"
            className="w-[130.59px] h-[40.86px] md:w-[208px] md:h-auto"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-sm md:text-[17.1px]"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            color="foreground"
            aria-current="page"
            href="#"
            className="text-sm md:text-[17.1px]"
          >
            Product
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-sm md:text-[17.1px]"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-sm md:text-[17.1px]"
          >
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <Button
            as={Link}
            href="#"
            variant="solid"
            color="primary"
            radius="full"
            className="font-bold py-2 px-5 md:py-3  md:px-6 w-[157px] md:w-[217px] h-[39px] md:h-[47px] text-sm md:text-[18px]"
          >
            Mau Ngobrol Dulu ?
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarMenu className="bg-black-500">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroUINavbar>
  );
};
