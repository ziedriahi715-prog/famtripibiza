"use client";

import Calendar from "@/app/components/icons/Calendar";
import React from "react";
import Navbar from "../navbar/Navbar";

type DayProgramme = {
  key: string;
  label: string;
  title: string;
  content: React.ReactNode;
};

const days: DayProgramme[] = [
  {
    key: "2026-04-24",
    label: "Vendredi 24 avril",
    title: "Vendredi 24 avril : Bienvenue à Ibiza",
    content: (
      <>
        <ul className="list-disc space-y-3 py-2 pl-5">
          <li className="space-x-2">
            <b>14h20 :</b>
            <span>Arrivée à Ibiza, accueil et assistance.</span>
          </li>
          <li className="space-x-2">
            <b>15h30 :</b>
            <span>Transfert surprise pour une première immersion dans le quotidien d’un Ibicenco.</span>
          </li>
          <li className="space-x-2">
            <b>18h00 :</b>
            <span>
              Arrêt dans une ferme écologique.
            </span>
          </li>
          <li className="space-x-2">
            <span>
              Continuation vers l’hôtel, check-in et temps libre.
            </span>
          </li>          
          <li className="space-x-2">
            <b>19h30 :</b>
            <span>Dîner dans un nouveau beach club.</span>
          </li>
          <li className="space-x-2">
            <span>Transfert vers l’hôtel, check in et nuit au Meliá Ibiza.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    key: "2026-04-25",
    label: "Samedi 25 avril",
    title: "Samedi 25 avril : Ibiza confidentielle !",
    content: (
      <>
        <ul className="list-disc space-y-3 py-2 pl-5">
          <li className="space-x-2">
            <b>A partir de 07h00 :</b>
            <span>Petit déjeuner à l’hôtel.</span>
          </li>
          <li className="space-x-2">
            <b>09h30 :</b>
            <span>
              Visite de l’hôtel Meliá. 
            </span>
          </li>

          <li className="space-x-2">
            <b>10h00 :</b>
            <span>
              Check out et départ pour une journée aventure et adrénaline dans l’arrière-pays. 
            </span>
          </li>

          <li className="space-x-2">
            <b>13h00 :</b>
            <span>Déjeuner au Nikki Beach.</span>
          </li>

          <li className="space-x-2">
            <b>Après-midi :</b>
            <span>Balade en speed boat dans les eaux cristallines de l’ile Blanche.</span>
          </li>

          <li className="space-x-2">
            <span>Transfert à l’hôtel Curio San Miguel by Hilton.</span>
          </li>           

          <li className="space-x-2">
            <b>18h30 :</b>
            <span>Visite de l’hôtel.</span>
          </li>                    

          <li className="space-x-2">
            <b>20h30 :</b>
            <span>Diner glam & chic au restaurant Atzaro.</span>
          </li>

          <li className="space-x-2">
            <span>Pour ceux qui le souhaitent, continuation de la soirée dans un lieu branché.</span>
          </li>   

          <li className="space-x-2">
            <span>Nuit à l’hôtel.</span>
          </li>                       

        </ul>
      </>
    ),
  },
  {
    key: "2026-04-26",
    label: "Dimanche 26 avril",
    title: "Dimanche 26 avril : Ibiza love you !",
    content: (
      <>
        <ul className="list-disc space-y-3 py-2 pl-5">
          <li className="space-x-2">
            <b>A partir de 07h00 :</b>
            <span>Petit déjeuner à l’hôtel.</span>
          </li>
          <li className="space-x-2">
            <b>09h30 :</b>
            <span>Check out et départ pour une visite et un workshop à Dalt Villa, la vielle ville pleine de charme d’Ibiza.</span>
          </li>
          <li className="space-x-2">
            <b>12h00 :</b>
            <span>Brunch au Nassau Beach Club.</span>
          </li>
          <li className="space-x-2">
            <b>13h30 :</b>
            <span>
              Transfert à l’aéroport. 
            </span>
          </li>
          <li className="space-x-2">
            <b>15h30 :</b>
            <span>Décollage vers Paris Orly.</span>
          </li>
          <li className="space-x-2">
            <b>17h35 :</b>
            <span>
              Arrivée à Paris Orly.
            </span>
          </li>
        </ul>
      </>
    ),
  },

];

const Programme = () => {
  const [activeKey, setActiveKey] = React.useState<string>(days[0].key);
  const activeDay = React.useMemo(
    () => days.find((d) => d.key === activeKey)!,
    [activeKey]
  );

  return (
    <>
      <Navbar text="PROGRAMME" />
      <div className="mx-auto md:max-w-4xl">
        <div className="overflow-hidden">
          <div
            role="tablist"
            aria-label="Programme par jour"
            className="grid grid-cols-3 "
          >
            {days.map((day) => {
              const selected = day.key === activeKey;
              return (
                <button
                  key={day.key}
                  role="tab"
                  aria-selected={selected}
                  className={`border border-white text-xs sm:text-sm md:text-base px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-center transition-colors whitespace-nowrap ${
                    selected
                      ? "bg-[#6B7280] text-white font-semibold"
                      : "bg-[#D1D5DB] hover:bg-gray-300"
                  }`}
                  onClick={() => setActiveKey(day.key)}
                >
                  <span className="hidden sm:inline">{day.label}</span>
                  <span className="sm:hidden">
                    {day.label.split(" ")[1]} {day.label.split(" ")[2]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="mt-4 sm:mt-6 mx-2 sm:mx-4">
          <p className="text-[#6A9360] mt-2 text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
            {activeDay.title}
          </p>
          <div className="text-sm sm:text-base">{activeDay.content}</div>
        </div>
      </div>
    </>
  );
};

export default Programme;
