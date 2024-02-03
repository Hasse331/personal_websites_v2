import PageBlock from "@/components/index/pageBlock";
import Introduction from "@/components/index/introduction";
import React from "react";

// text cont imports:
import {
  IntroductionText,
  expAndProjectsText,
  collabText,
  devOpsText,
  techStackText,
} from "@/textContents/indexTextContents";

// Titles:

const expAndProjTitle = `Practical Experience & Projects Portfolio`;
const collabTitle = `Communication & Collaboration`;
const DevOps = `DevOps`;
const techStack = `Tech Stack`;

const Index: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <Introduction textContent={IntroductionText} />
      <div className="flex">
        <PageBlock title={expAndProjTitle} textContent={expAndProjectsText} />
        <PageBlock title={collabTitle} textContent={collabText} />
      </div>
      <div className="flex">
        <PageBlock title={DevOps} textContent={devOpsText} />
        <PageBlock title={techStack} textContent={techStackText} />
      </div>
    </div>
  );
};

export default Index;
