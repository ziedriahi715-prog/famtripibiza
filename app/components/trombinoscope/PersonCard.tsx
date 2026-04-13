import Image from "next/image";

interface Person {
  name: string;
  company: string;
  image: string;
}

const PersonCard = ({ person }: { person: Person }) => (
  <div className="relative w-full aspect-square">
    <Image
      fill
      className={`rounded-[20px] object-cover ${
        person.name === "Hervé" ? "object-top" : ""
      }`}
      src={person.image}
      alt={`${person.name} - ${person.company}`}
    />
    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-[20px]">
      <p className="text-center text-sm">
        {person.name} - <span className="font-bold">{person.company}</span>
      </p>
    </div>
  </div>
);

export default PersonCard;
