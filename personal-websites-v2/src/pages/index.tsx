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

// Titles:
const IntroductionTitle = `Welcome - about me`;
const expAndProjTitle = `Practical Experience & Projects Portfolio`;
const collabTitle = `Communication & Collaboration`;
const devOpsTitle = `DevOps`;
const techStackTitle = `Tech Stack`;
const certificatesTitle = `Certificates`;
const socialsTitle = `Social Accounts`;

// Buttons
const techStackButton = { href: "/techStack", text: "Full tech stack" };
const expAndProjButton = { href: "/portfolio", text: "Full portfolio" };

const Index: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-4 px-2 sm:px-4">
      <PageBlock title={IntroductionTitle} textContent={IntroductionText} />
      <div className="grid md:grid-cols-2">
        <PageBlock
          title={expAndProjTitle}
          textContent={expAndProjectsText}
          btn={expAndProjButton}
        />
        <PageBlock
          title={techStackTitle}
          textContent={techStackText}
          btn={techStackButton}
        />
      </div>
      <div className="grid md:grid-cols-2">
        <PageBlock title={collabTitle} textContent={collabText} />
        <PageBlock title={devOpsTitle} textContent={devOpsText} />
      </div>
      <div className="grid md:grid-cols-2">
        <PageBlock title={certificatesTitle} textContent={certificatesText} />
        <PageBlock title={socialsTitle} textContent={socialsText} />
      </div>
    </div>
  );
};

export default Index;
