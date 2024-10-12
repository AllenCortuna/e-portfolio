import React from "react";
import SummaryCard from "./SummaryCard";
import {
  CircleFadingArrowUp,
  HardDriveDownload,
  Lightbulb,
  ShieldAlert,
} from "lucide-react"; // Importing icons from Lucide

const Summary = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
      <SummaryCard
        summaryLogo={<HardDriveDownload className="w-full h-full" />} // Icon as the logo
        summaryName="Pirated Software from Abroad"
        summaryTitle="Illegal foreign distribution of software"
        description="Pirated software from abroad refers to unauthorized copies of software that are illegally distributed or obtained from foreign sources. This often involves duplicating, sharing, or selling software without the permission of the copyright holder, typically resulting in significant financial loss to software developers and companies. Pirated software may come from various channels, such as counterfeit physical copies or illegal downloads from foreign websites, and it violates intellectual property laws that protect creators' rights to control the distribution and use of their software."
      />

      <SummaryCard
        summaryLogo={<Lightbulb className="w-full h-full" />} // Icon as the logo
        summaryName="Stealing an Idea"
        summaryTitle="Unauthorized appropriation of original concepts"
        description="Stealing an idea refers to the act of taking someone else’s original concept, invention, or creative work and presenting it as one’s own without permission, credit, or compensation to the original creator. In intellectual property law, ideas themselves are not protected until they are expressed in a tangible form, such as through writing, invention, or design. However, if an idea has been developed into something concrete—like a product, written work, or patentable innovation—stealing it could lead to legal consequences, including lawsuits for infringement, breach of confidentiality, or unfair competition."
      />
      <SummaryCard
        summaryLogo={<CircleFadingArrowUp className="w-full h-full" />} // Icon as the logo
        summaryName="Improving Software"
        summaryTitle="Enhancing software versus creating malware."
        description="Refers to the process of enhancing an existing software product by adding new features, fixing bugs, optimizing performance, improving user experience, or updating security protocols. This contributes to making the software more reliable, efficient, and user-friendly, and it often involves continuous development to meet evolving user needs and technological advancements."
      />
      <SummaryCard
        summaryLogo={<ShieldAlert className="w-full h-full" />} // Icon as the logo
        summaryName="Protecting Software"
        summaryTitle="Protecting software through legal frameworks."
        description="This section revisits the Bingo scenario and discusses the unfairness of PPOS's actions in copying BOS. It proposes legal solutions that would grant Bingo exclusive rights to its software through copyright, trade secrecy, and patent protections. This part emphasizes the importance of legal frameworks in safeguarding innovative software against unauthorized use."
      />
    </div>
  );
};

export default Summary;
