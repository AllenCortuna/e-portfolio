"use client";
import Awareness from "@/components/Awareness";
import { BoxRevealDemo } from "@/components/BoxRevealDemo";
import { Submitted } from "@/components/Submitted";
import Summary from "@/components/Summary";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-4 p-4 md:p-8">
      <BoxRevealDemo />
      <Summary />
      <Awareness />
      <Submitted/>
    </div>
  );
}
