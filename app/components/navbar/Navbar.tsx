import Image from "next/image";
import React from "react";

interface NavbarProps {
  text: string;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ text, className = "" }) => {
  return (
    <nav className={className}>
      {/* Section Logos */}
      <div className="bg-[#1f2f3a] h-[92px] flex items-center justify-center">
        <div className="w-full max-w-4xl flex items-center justify-between gap-4 p-4 mx-auto">
          
          {/* Logo Principal */}
          <div className="bg-white/90 backdrop-blur-sm rounded-md p-1.5 sm:p-2 shadow-lg min-h-[28px] w-24 sm:w-32 md:w-36 flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Logo Principal"
              width={100}
              height={35}
              className="h-5 w-auto sm:h-7 md:h-9 object-contain max-w-full"
              priority
            />
          </div>

          {/* Logo Ibiza */}
          <div className="bg-white/90 backdrop-blur-sm rounded-md p-1.5 sm:p-2 shadow-lg min-h-[28px] w-24 sm:w-32 md:w-36 flex items-center justify-center">
            <Image
              src="/images/ibiza.png"
              alt="Ibiza Logo"
              width={120}
              height={50}
              className="h-5 w-auto sm:h-7 md:h-9 object-contain max-w-full"
              priority
            />
          </div>
        </div>
      </div>

      {/* Barre de Titre (Verte) */}
      <div className="bg-[#6d9161] h-[48px] flex items-center">
        <div className="w-full max-w-4xl px-4 mx-auto">
          <h1 className="text-white text-sm sm:text-base md:text-lg font-bold uppercase tracking-wide">
            {text}
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;