import React from "react";

const TechStackPage: React.FC = () => {
  const listTitleStyle = "text-xl ml-0 font-bold mt-2 text-left";
  const boxStyle = "border p-5 m-3";

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1>My Tech Stack</h1>

      <p className="mt-5">
        On this page, you can view all the technologies I&apos;m familiar with.
        I have used all of these in various real-world projects. (Mostly
        small-scale projects)
      </p>
      <br />
      <p>
        My main skills, where I am most proficient, are: <br />
        <strong>
          {" "}
          TypeScript-based web development, Dart/Flutter Cross-Platform
          development, Python backends and APIs
        </strong>
      </p>

      <div className="grid md:grid-cols-2 mt-10">
        <ul className={boxStyle}>
          <h2 className={listTitleStyle}>Frontend Development:</h2>
          <li>React.js</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>Tailwind CSS</li>
          <li>Material-UI</li>
          <li>HTML/CSS</li>
          <li>Next.js</li>
          <li>Vite</li>
          <li>Electron & PyQt</li>
          <li>Flutter</li>
        </ul>

        <ul className={boxStyle}>
          <h2 className={listTitleStyle}>Backend Development:</h2>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
          <li>SQL</li>
          <li>Express</li>
          <li>Node.js</li>
          <li>SQLAlchemy</li>
          <li>Python</li>
          <li>FastAPI</li>
          <li>Flask</li>
          <li>PHP</li>
        </ul>
      </div>

      <div className="grid md:grid-cols-2">
        <ul className={boxStyle}>
          <h2 className={listTitleStyle}>AI & ML:</h2>
          <li>Python</li>
          <li>NLTK</li>
          {/* <li>TensorFlow </li>
          <li>PyTorch</li>
          <li>Scikit-learn</li>
          <li>Pandas</li> */}
        </ul>
        <ul className={boxStyle}>
          <h2 className={listTitleStyle}>Testing:</h2>
          <li>Jest</li>
          <li>React testing library</li>
        </ul>
      </div>
      <div className="grid md:grid-cols-2">
        <ul className={boxStyle}>
          <h2 className={listTitleStyle}>
            Version Control, Communication & Collaboration:
          </h2>
          <li>Git</li>
          <li>GitHub</li>
          <li>Jira</li>
          <li>Trello</li>
          <li>Discord</li>
          <li>Microsoft Teams</li>
          <li>Slack</li>
        </ul>
        <ul className={boxStyle}>
          <h2 className={listTitleStyle}>Cloud services & DevOps:</h2>
          <li>Azure</li>
          <li>Aws</li>
          <li>Firebase</li>
          <li>Render</li>
          <li>Docker</li>
        </ul>
      </div>
      <div className="grid md:grid-cols-2">
        <ul className={boxStyle}>
          <h2 className={listTitleStyle}>Desktop Application Development:</h2>
          <li>Electron</li>
          <li>PyQt</li>
        </ul>
        <ul className={boxStyle}>
          <h2 className={listTitleStyle}>Real-time Communication:</h2>
          <li>Socket.IO</li>
        </ul>
      </div>
      <div className="grid md:grid-cols-2">
        <ul className={boxStyle}>
          <h2 className={listTitleStyle}>CMS:</h2>
          <li>Shopify</li>
          <li>Wordpress</li>
          <li>Wix</li>
        </ul>
      </div>

      {/* Continue similarly for other sections like AI & ML, Testing, Version Control, etc. */}
    </div>
  );
};

export default TechStackPage;
