"use client";
import React from "react";
import { AwarenessCard } from "./AwarenessCard";
import AwarenessList from "./AwarenessList";

const Awareness = () => {
  return (
    <div className="p-4">
      {/* Awareness */}
      <span className="flex flex-wrap justify-center items-start gap-5">
        <AwarenessCard /> <AwarenessList />
      </span>
    </div>
  );
};

export default Awareness;
