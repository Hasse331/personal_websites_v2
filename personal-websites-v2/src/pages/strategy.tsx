import PageBlock from "@/components/pageBlock";
import {
  aiDescription,
  backendDescription,
  frontendDescription,
} from "@/textContents/strategyTexts";

const Strategy = () => {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1>Three-part competence strategy</h1>
      <p className="mt-5">
        On this page you can view my competence improving and career strategy.
        Current strategy timeline is estimated to be 3 to 5 years focusing on
        these main areas in the strategy. It has 3 parts which are listed below.
      </p>
      <br />
      <p>
        The main idea here is to have strong foundations as a full-stack, cross
        platform developer. And between the frontend and backend lies the
        foundation and ability to integrate AI and data analytics into the
        development process.
      </p>
      <br />
      <p>
        {" "}
        (Following translations (partially) and area descriptions are
        AI-generated) {/* check grammar */}
      </p>
      <PageBlock
        title={`1. Frontend, UI/UX, cross-platform`}
        textContent={frontendDescription}
      />
      <PageBlock
        title={`2. AI and Data Analytics`}
        textContent={aiDescription}
      />
      <PageBlock
        title={`3. Scalable backends and microarchitecture`}
        textContent={backendDescription}
      />
    </div>
  );
};

export default Strategy;
