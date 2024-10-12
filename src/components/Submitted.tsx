import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Tyrone C. Palabay",
    designation: "Group Leader",
    image:
      "img/palabay.png",
  },
  {
    id: 2,
    name: "Mark Daven H. Marino",
    designation: "Group Member",
    image:
      "img/marino.png",
  },
  {
    id: 3,
    name: "Lee V. Dupagan",
    designation: "Group Member",
    image:
      "img/dagupan.png",
  },
  {
    id: 4,
    name: "John Lloyd M. Brizuela",
    designation: "Group Member",
    image:
      "img/brizuela.png",
  },
  {
    id: 5,
    name: "Chyrish C. Cornelia",
    designation: "Group Member",
    image:
      "img/cornelia.png",
  },
  {
    id: 6,
    name: "Christelle Mae C. Lacuesta",
    designation: "Group Member",
    image:
      "img/lacuesta.png",
  },
];

export function Submitted() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full mt-10">
      <AnimatedTooltip items={people} />
    </div>
  );
}
