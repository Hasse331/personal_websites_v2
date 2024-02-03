import PageBlock from "@/components/index/pageBlock";
import Introduction from "@/components/index/introduction";

// pages/index.tsx
import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <Introduction />
      <div className="flex">
        <PageBlock />
        <PageBlock />
      </div>
    </div>
  );
};

export default Home;
