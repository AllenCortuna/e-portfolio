// import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function AwarenessCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] hover:bg-zinc-800 border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 mt-0 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white group-hover/card:text-white"
        >
          Intellectual Property
          <p className="text-sm">Awareness</p>
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-xs mt-2 dark:text-neutral-300 group-hover/card:text-zinc-400"
        >
          Different aspects to exhibit awareness on intellectual property
        </CardItem>
        <CardItem
          translateZ="100"
          //   rotateX={20}
          //   rotateZ={-10}
          className="w-full mt-4"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.pexels.com/photos/39584/censorship-limitations-freedom-of-expression-restricted-39584.jpeg?auto=compress&cs=tinysrgb&w=800"
            height="500"
            width="500"
            className="h-28 w-full object-cover rounded-md border group-hover/card:shadow-lg"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
