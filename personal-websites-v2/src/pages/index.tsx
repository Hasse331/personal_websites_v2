import PageBlock from "@/components/pageBlock";
import React from "react";

// text cont imports:

const certificatesText: JSX.Element = (
  <div>
    <p>
      Dart & Flutter:{" "}
      <a
        target="_blank"
        href="https://www.udemy.com/certificate/UC-fc15cc7a-9fd3-4436-9c57-683ad0072e8b/"
      >
        Certificate Link
      </a>
    </p>
    <p>
      Node.js:{" "}
      <a
        target="_blank"
        href="https://www.udemy.com/certificate/UC-ff2a46ee-00b5-40ea-866d-eb77a46f3936/"
      >
        Certificate Link
      </a>
    </p>
    <p>
      React:{" "}
      <a
        target="_blank"
        href="https://www.udemy.com/certificate/UC-9b3cfc16-f0dc-437d-bad8-edba1ca176e7/"
      >
        Certificate Link
      </a>
    </p>
    <p>
      TypeScript:{" "}
      <a
        target="_blank"
        href="https://www.udemy.com/certificate/UC-a73c4b0e-1459-4f9d-ad8a-920e116c5534/"
      >
        Certificate Link
      </a>
    </p>
    <p>
      JavaScript:{" "}
      <a
        target="_blank"
        href="https://www.udemy.com/certificate/UC-f63e0ddc-a474-4a44-b83c-32ae2d1c027b/"
      >
        Certificate Link
      </a>
    </p>
    <p>
      FastAPI:{" "}
      <a
        target="_blank"
        href="https://www.udemy.com/certificate/UC-2c73c4ab-38f9-420f-b2ae-f320eb80e8c2/"
      >
        Certificate Link
      </a>
    </p>
  </div>
);
const socialLinks: JSX.Element = (
  <div>
    <p>
      GitHub:{" "}
      <a target="_blank" href="https://github.com/Hasse331/">
        Profile Link
      </a>
    </p>
    <p>
      LinkedIn:{" "}
      <a
        target="_blank"
        href="https://www.linkedin.com/in/hans-imberg-433889230"
      >
        Profile Link
      </a>
    </p>
    <p>Discord: hasse0483</p>
  </div>
);

const Index: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-4 px-2 sm:px-4">
      <div className="grid md:grid-cols-2 mt-10">
        <PageBlock title={"Certificates"} textContent={certificatesText} />
        <PageBlock title={`Social Accounts`} textContent={socialLinks} />
      </div>
    </div>
  );
};

export default Index;
