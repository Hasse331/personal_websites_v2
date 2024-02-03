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

const Index: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-4 px-2 sm:px-4">
      <PageBlock title={IntroductionTitle} textContent={IntroductionText} />
      <div className="grid md:grid-cols-2 ">
        <PageBlock title={expAndProjTitle} textContent={expAndProjectsText} />
        <PageBlock title={collabTitle} textContent={collabText} />
      </div>
      <div className="grid md:grid-cols-2">
        <PageBlock title={devOpsTitle} textContent={devOpsText} />
        <PageBlock title={techStackTitle} textContent={techStackText} />
      </div>
      <div className="grid md:grid-cols-2">
        <PageBlock title={certificatesTitle} textContent={certificatesText} />
        <PageBlock title={socialsTitle} textContent={socialsText} />
      </div>
    </div>
  );
};

export default Index;
