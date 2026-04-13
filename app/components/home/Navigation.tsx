"use client";

import { MenuHomePage } from "@/app/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NavName {
  handlePageName: (link: string) => void;
}

const Navigation: React.FC<NavName> = ({ handlePageName }) => {
  return (
    <div className="">
      {/* <ul className="grid grid-cols-2 gap-10">
        {MenuHomePage &&
          MenuHomePage.map((menu, i) => (
            <li key={i}>
              <Link href={menu.link} className="flex flex-col items-center">
                <div className="border-accent flex h-[82px] w-[82px] items-center justify-center rounded-full border-2">
                  <span className="relative h-[50px] w-[50px]">
                    <Image fill src={menu.icon} alt={menu.icon} />
                  </span>
                </div>
                <span className="text-sm text-gray-700">{menu.name}</span>
              </Link>
            </li>
          ))}
      </ul> */}
      {/* <div className="grid grid-cols-3 items-center gap-10 px-8">
        <div className="space-y-10">
          <div>
            <Link href={MenuHomePage[0].link} className="flex flex-col items-center">
              <div className="border-accent flex h-[82px] w-[82px] items-center justify-center rounded-full border-2">
                <span className="relative h-[50px] w-[50px]">
                  <Image fill src={MenuHomePage[0].icon} alt={MenuHomePage[0].icon} />
                </span>
              </div>
              <span className="text-sm text-gray-700">{MenuHomePage[0].name}</span>
            </Link>
          </div>
          <div>
            <Link href={MenuHomePage[2].link} className="flex flex-col items-center">
              <div className="border-accent flex h-[82px] w-[82px] items-center justify-center rounded-full border-2">
                <span className="relative h-[50px] w-[50px]">
                  <Image fill src={MenuHomePage[2].icon} alt={MenuHomePage[2].icon} />
                </span>
              </div>
              <span className="text-sm text-gray-700">{MenuHomePage[2].name}</span>
            </Link>
          </div>
        </div>

        <div>
          <div>
            <Link href={MenuHomePage[4].link} className="flex flex-col items-center">
              <div className="border-accent flex h-[82px] w-[82px] items-center justify-center rounded-full border-2">
                <span className="relative h-[50px] w-[50px]">
                  <Image fill src={MenuHomePage[4].icon} alt={MenuHomePage[4].icon} />
                </span>
              </div>
              <span className="text-sm text-gray-700">{MenuHomePage[4].name}</span>
            </Link>
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <Link href={MenuHomePage[1].link} className="flex flex-col items-center">
              <div className="border-accent flex h-[82px] w-[82px] items-center justify-center rounded-full border-2">
                <span className="relative h-[50px] w-[50px]">
                  <Image fill src={MenuHomePage[1].icon} alt={MenuHomePage[1].icon} />
                </span>
              </div>
              <span className="text-sm text-gray-700">{MenuHomePage[1].name}</span>
            </Link>
          </div>
          <div>
            <Link href={MenuHomePage[3].link} className="flex flex-col items-center">
              <div className="border-accent flex h-[82px] w-[82px] items-center justify-center rounded-full border-2">
                <span className="relative h-[50px] w-[50px]">
                  <Image fill src={MenuHomePage[3].icon} alt={MenuHomePage[3].icon} />
                </span>
              </div>
              <span className="text-sm text-gray-700">{MenuHomePage[3].name}</span>
            </Link>
          </div>
        </div>
      </div> */}

      <div className="flex flex-row justify-between items-center gap-6 px-7 py-9 mx-auto">
        <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
          <div>
            <Link
              onClick={() => handlePageName(MenuHomePage[0].link)}
              href="#"
              className="flex flex-col items-center"
            >
              <div className="border-accent flex size-16 sm:size-20 items-center justify-center rounded-full border-2">
                <span className="relative h-[30px] w-[30px] sm:h-[35px] sm:w-[35px] md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]">
                  <Image
                    fill
                    src={MenuHomePage[0].icon}
                    alt={MenuHomePage[0].icon}
                  />
                </span>
              </div>
              <span className="text-xs text-gray-700 text-center pt-2 w-full whitespace-nowrap">
                {MenuHomePage[0].name}
              </span>
            </Link>
          </div>
          <div>
            <Link
              onClick={() => handlePageName(MenuHomePage[2].link)}
              href="#"
              className="flex flex-col items-center"
            >
              <div className="border-accent flex size-16 sm:size-20 items-center justify-center rounded-full border-2">
                <span className="relative h-[30px] w-[30px] sm:h-[35px] sm:w-[35px] md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]">
                  <Image
                    fill
                    src={MenuHomePage[2].icon}
                    alt={MenuHomePage[2].icon}
                  />
                </span>
              </div>
              <span className="text-xs text-gray-700 text-center pt-2 w-full whitespace-nowrap">
                {MenuHomePage[2].name}
              </span>
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <div>
            <Link
              onClick={() => handlePageName(MenuHomePage[4].link)}
              href="#"
              className="flex flex-col items-center"
            >
              <div className="border-accent flex size-16 sm:size-20 items-center justify-center rounded-full border-2">
                <span className="relative h-[30px] w-[30px] sm:h-[35px] sm:w-[35px] md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]">
                  <Image
                    fill
                    src={MenuHomePage[4].icon}
                    alt={MenuHomePage[4].icon}
                  />
                </span>
              </div>
              <span className="text-xs text-gray-700 text-center pt-2 w-full whitespace-nowrap">
                {MenuHomePage[4].name}
              </span>
            </Link>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 col-span-2 sm:col-span-1">
          <div>
            <Link
              onClick={() => handlePageName(MenuHomePage[1].link)}
              href="#"
              className="flex flex-col items-center"
            >
              <div className="border-accent flex size-16 sm:size-20 items-center justify-center rounded-full border-2">
                <span className="relative h-[30px] w-[30px] sm:h-[35px] sm:w-[35px] md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]">
                  <Image
                    fill
                    src={MenuHomePage[1].icon}
                    alt={MenuHomePage[1].icon}
                  />
                </span>
              </div>
              <span className="text-xs text-gray-700 text-center pt-2 w-full whitespace-nowrap">
                {MenuHomePage[1].name}
              </span>
            </Link>
          </div>
          <div>
            <Link
              onClick={() => handlePageName(MenuHomePage[3].link)}
              href="#"
              className="flex flex-col items-center"
            >
              <div className="border-accent flex size-16 sm:size-20 items-center justify-center rounded-full border-2">
                <span className="relative h-[30px] w-[30px] sm:h-[35px] sm:w-[35px] md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]">
                  <Image
                    fill
                    src={MenuHomePage[3].icon}
                    alt={MenuHomePage[3].icon}
                  />
                </span>
              </div>
              <span className="text-xs text-gray-700 text-center pt-2 w-full whitespace-nowrap">
                {MenuHomePage[3].name}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
