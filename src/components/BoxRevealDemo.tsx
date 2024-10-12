import BoxReveal from "./ui/box-reveal";

export async function BoxRevealDemo() {
  return (
    <div className="h-full max-w-lg items-center justify-center overflow-hidden p-8">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-4xl font-semibold">
          E-portfolio
          <span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-3xl mt-4 font-semibold">
          Public Awareness on Intellectual Property
          <span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-10 text-sm font-light text-zinc-600 tracking-wider">
          Explores the ethical and legal implications of software development
          and distribution, particularly in the context of piracy, idea theft,
          software improvement, and protection mechanisms
        </h2>
      </BoxReveal>
    </div>
  );
}
