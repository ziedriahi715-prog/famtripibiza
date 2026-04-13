"use client";
import React from "react";
import { Menus } from "../utils/data";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface FooterMenu {
  handleMenu: (link: string) => void;
  pathname: string;
}

const MenuFooter: React.FC<FooterMenu> = ({ handleMenu, pathname }) => {
  // const pathname = usePathname();

  return (
    <div className="bg-primary text-primary-foreground fixed right-0 bottom-0 left-0 z-10 md:mx-auto md:max-w-3xl">
      <nav className="flex h-[80px] items-center md:mx-auto md:max-w-4xl">
        <ul className="menu flex h-full w-full items-center justify-between">
          <li className="h-full w-full">
            <Link
              onClick={() => handleMenu("home")}
              href="#"
              className="flex h-full items-center justify-center"
            >
              <div className="relative h-8 w-8">
                <Image fill src={"/images/svg/house-line.svg"} alt="home" />
              </div>
            </Link>
          </li>
          {Menus &&
            Menus.map((menu, i) => (
              <li
                key={i}
                className={`h-full w-full ${
                  pathname === menu.link ? "hidden" : ""
                }`}
              >
                <Link
                  onClick={() => handleMenu(menu.link)}
                  href="#"
                  className="flex h-full items-center justify-center"
                >
                  <div className="relative h-8 w-8">
                    <Image fill src={menu.icon} alt="home" />
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default MenuFooter;
