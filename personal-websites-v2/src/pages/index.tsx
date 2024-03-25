import PageBlock from "@/components/pageBlock";
import React from "react";

// text cont imports:
import {
  IntroductionText,
  expAndProjectsText,
  collabText,
  devOpsText,
  techStackText,
  certificatesText,
  socialsText,
} from "@/textContents/indexTextContents";

// Buttons
const techStackButton = { href: "/techStack", text: "Full tech stack" };
const expAndProjButton = { href: "/portfolio", text: "Full portfolio" };

const Index: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-4 px-2 sm:px-4">
      <PageBlock
        title={`My core strengths as a software developer`}
        textContent={IntroductionText}
        imageSrc={"/selfie.jpg"}
      />
      <div className="grid md:grid-cols-2">
        <PageBlock
          title={`Practical Experience & Projects Portfolio`}
          textContent={expAndProjectsText}
          btn={expAndProjButton}
        />
        <PageBlock
          title={`Tech Stack`}
          textContent={techStackText}
          btn={techStackButton}
        />
      </div>
      <div className="grid md:grid-cols-2">
        <PageBlock
          title={`Communication & Collaboration`}
          textContent={collabText}
        />
        <PageBlock title={`DevOps`} textContent={devOpsText} />
      </div>
      <div className="grid md:grid-cols-2">
        <PageBlock title={"Certificates"} textContent={certificatesText} />
        <PageBlock title={`Social Accounts`} textContent={socialsText} />
      </div>
    </div>
  );
};

export default Index;
