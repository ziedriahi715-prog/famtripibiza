import React from "react";
import Navbar from "../navbar/Navbar";
import ContactCard from "./ContactCard";

const Contacts = () => {
  const data = [
    {
      title: "L’équipe The MICE Experts & Incentivos Ibiza",
      content1: "Hervé : +33 6 45 24 42 20",
      content2: "Mihaela : +34 607 535 043",
    },
    {
      title: "Mélia Ibiza (nuit du 24 avril)",
      content1: "Adresse : Pare Vicent Costa, 2, Santa Eulalia del Río, Îles Baléares",
      content2: "Tél : +34 971 33 07 61",
    },
    {
      title: "Cala San Miguel Ibiza Resort, Curio Collection by Hilton (nuit du 25 avril)",
      content1: "Adresse : Puerto San Miguel, 26, 07815 Sant Joan de Labritja, Îles Baléares",
      content2: "Tél : +34 971 33 45 30",
    },
  ];
  return (
    <div>
      <Navbar text="Contacts Utiles" />
      {data.map((item, index) => (
        <ContactCard key={index} {...item} />
      ))}
    </div>
  );
};

export default Contacts;
