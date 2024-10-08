import PageBlock from "@/components/pageBlock";
import React from "react";

// text cont imports:
import {
  IntroductionText,
  projectsText,
  techStackText,
  certificatesText,
  socialLinks,
} from "@/textContents/indexTextContents";

// Buttons
const strategyBtn = { href: "/strategy", text: "My strategy" };
const techStackButton = { href: "/techStack", text: "Full tech stack" };
const expAndProjButton = {
  href: "https://github.com/Hasse331?tab=repositories",
  text: "Full portfolio (GitHub)",
};

const Index: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-4 px-2 sm:px-4">
      <PageBlock
        title={`About Me`}
        textContent={IntroductionText}
        imageSrc={"/selfie.jpg"}
        btn={strategyBtn}
      />
      <div className="grid md:grid-cols-2">
        <PageBlock
          title={`Projects`}
          textContent={projectsText}
          btn={expAndProjButton}
        />

        <PageBlock
          title={`Tech Stack`}
          textContent={techStackText}
          btn={techStackButton}
        />
      </div>

      <div className="grid md:grid-cols-2 mt-10">
        <PageBlock title={"Certificates"} textContent={certificatesText} />
        <PageBlock title={`Social Accounts`} textContent={socialLinks} />
      </div>
    </div>
  );
};

export default Index;
