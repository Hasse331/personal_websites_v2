/* Quick Introduction: A brief but powerful intro to who you are and what you do.
Skill Highlights: Showcase your top skills or technologies you excel in.
Portfolio Teasers: Preview your best projects with links to detailed pages.
About Me Snippet: A short personal bio leading to the full 'About Me' page.
Visually Engaging: Use animations, high-quality images, or interactive elements to captivate visitors. */

// pages/index.tsx
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="">
      <h1>H1 Title</h1>
      <h2>H2 Title</h2>
      <h3>H3 Title</h3>
      <h4>H4 Title</h4>
      <h5>H5 Title</h5>
      <h6>H6 Title</h6>
      <p>
        This is a paragraph with some text. bit longer to demonstrate normal
        text.
      </p>
      <p>This is a smaller paragraph with some text.</p>
      <p>This is an even smaller paragraph with some text.</p>
      <p>This is the smallest paragraph with some text.</p>
    </div>
  );
};

export default Home;
