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
import { IconClose } from "./icons/IconClose";
import { IconMenu } from "./icons/IconMenu";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Home", "Product", "About", "Contact Us"];

  return (
    <HeroUINavbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-black-500 h-[69px] md:h-[101px] md:px-5"
      maxWidth="full"
    >
      {/* Logo */}
      <NavbarContent>
        <NavbarBrand>
          <Image
            alt="Qreative Tech Logo"
            src="/qreativelogo.png"
            className="h-[40.86px] w-[130.59px] md:h-auto md:w-[208px]"
          />
        </NavbarBrand>
      </NavbarContent>
      {/* Links */}
      <NavbarContent className="hidden gap-9 sm:flex" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="/#home"
            aria-current="page"
            className="text-sm md:text-[17.1px]"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            aria-current="page"
            href="/#product"
            className="text-sm md:text-[17.1px]"
          >
            Product
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/#about"
            aria-current="page"
            className="text-sm md:text-[17.1px]"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/#contact"
            aria-current="page"
            className="text-sm md:text-[17.1px]"
          >
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* CTA */}
      <NavbarContent justify="end" className="hidden w-full sm:flex">
        <NavbarItem>
          <Button
            as={Link}
            href={`https://wa.me/6285231796284?text=${encodeURIComponent(
              "Halo! Saya tertarik dengan jasa pembuatan website dari kamu. Bisa bantu jelaskan lebih lanjut?",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            variant="solid"
            color="primary"
            radius="full"
            className="h-[39px] w-[157px] px-5 py-2 text-sm font-bold md:h-[47px] md:w-[217px] md:px-6 md:py-3 md:text-[18px]"
          >
            Mau Ngobrol Dulu ?
          </Button>
        </NavbarItem>
      </NavbarContent>
      {/* Mobile */}
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          icon={isMenuOpen ? <IconClose size={24} /> : <IconMenu size={24} />}
        />
      </NavbarContent>
      {/* Mobile Menu */}
      <NavbarMenu className="bg-black-500">
        {menuItems.map((item, index) => {
          // console.log("item", item);
          return (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color="foreground"
                // color={
                //   index === 2
                //     ? "primary"
                //     : index === menuItems.length - 1
                //       ? "danger"
                //       : "foreground"
                // }
                href={`/#${item === "Contact Us" ? "contact" : item.toLowerCase()}`}
                aria-current="page"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </HeroUINavbar>
  );
};
