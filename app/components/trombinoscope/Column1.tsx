import Image from "next/image";
import React from "react";

const Column1 = () => {
  return (
    <div className="space-y-4">
      <div className="relative w-full aspect-square">
        <Image
          fill
          className="rounded-[20px] object-cover"
          src="/images/trombinoscope/Maud-Agence008.jpg"
          alt="Maud - Agence 008"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-[20px]">
          <p className="text-center text-sm">
            Maud - <span className="font-bold">Agence 008</span>
          </p>
        </div>
      </div>

      <div className="relative w-full aspect-square">
        <Image
          fill
          className="rounded-[20px] object-cover"
          src="/images/trombinoscope/Nicolas-Destinations-Conseils.jpg"
          alt="Nicolas - Destinations Conseils"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-[20px]">
          <p className="text-center text-sm">
            Nicolas - <span className="font-bold">Destinations Conseils</span>
          </p>
        </div>
      </div>

      <div className="relative w-full aspect-square">
        <Image
          fill
          className="rounded-[20px] object-cover"
          src="/images/trombinoscope/Mihaela-IncentivosIbiza.jpg"
          alt="Mihaela - Incentivos Ibiza"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-[20px]">
          <p className="text-center text-sm">
            Mihaela - <span className="font-bold">Incentivos Ibiza</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Column1;
