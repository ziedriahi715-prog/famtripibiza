"use client";
import { useState } from "react";
import Banner from "./components/Banner";
import Navigation from "./components/home/Navigation";
import PageSwitcher from "./components/PageSwitcher";
import MenuFooter from "./components/MenuFooter";

export default function Home() {
  const [menu, setMenu] = useState<string>("home");
  const handleMenu = (data: string) => {
    setMenu(data);
  };
  return (
    <div className="mx-auto max-w-4xl">
      {menu === "home" ? (
        <>
          <Banner BannerTitleClass="top-[65%]" />
          <Navigation handlePageName={handleMenu} />
        </>
      ) : (
        <>
          <PageSwitcher name={menu} />{" "}
          <MenuFooter handleMenu={handleMenu} pathname={menu} />
        </>
      )}
    </div>
  );
}
