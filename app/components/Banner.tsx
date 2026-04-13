import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Banner {
  className?: string;
  BannerTitleClass?: string;
}

const Banner: React.FC<Banner> = ({
  className = "",
  BannerTitleClass = "",
}) => {
  return (
    <div
      className={`
        relative bg-[url('/images/banniere.png')] bg-cover bg-center-bottom bg-no-repeat px-4  h-[33vh] md:h-[60vh] ${className} 
       `}
    >
      {/* Dark overlay for better contrast */}

      {/* THE MICE EXPERT section in top right */}

      {/* Main title at bottom center */}
    </div>
  );
};

export default Banner;
