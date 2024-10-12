"use client";
import Awareness from "@/components/Awareness";
import { BoxRevealDemo } from "@/components/BoxRevealDemo";
import Summary from "@/components/Summary";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-5 p-8">
      <BoxRevealDemo />
      <Summary />
      <Awareness />
    </div>
  );
}
