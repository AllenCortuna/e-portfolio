"use client";
import React from "react";
import { AwarenessCard } from "./AwarenessCard";

const Awareness = () => {
  return (
    <div className="p-8 ">
      {/* Awareness */}
      <span className="flex flex-wrap gap-5">
        <AwarenessCard />
      </span>
    </div>
  );
};

export default Awareness;
