"use client";
import React from "react";
import { AwarenessCard } from "./AwarenessCard";
import AwarenessList from "./AwarenessList";

const Awareness = () => {
  return (
    <div className="p-4">
      {/* Awareness */}
      <span className="flex flex-wrap md:mt-10 justify-center items-start gap-5 md:p-8 rounded-lg p-3 ">
        <AwarenessCard /> <AwarenessList />
      </span>
    </div>
  );
};

export default Awareness;
