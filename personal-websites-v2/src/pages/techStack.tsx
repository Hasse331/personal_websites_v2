import React from "react";

const TechStackPage: React.FC = () => {
  const listTitleStyle = "text-xl ml-0 font-bold mt-2 text-left";
  const boxStyle = "border p-5 m-3";

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1>My Tech Stack</h1>

      <p className="mt-5">
        Here you can view all the programming languages, packages, and
        frameworks I manage fairly well (<strong>bolded</strong>) or are just
        familiar with (not bolded). I have used all of these in various
        real-world projects, some in smaller scale practice or course projects
        (not bolded) and others in larger practical (team) projects (
        <strong>bolded</strong>).
      </p>

      <div className="grid md:grid-cols-2 mt-10">
        <ul className={boxStyle}>
          <h2 className={listTitleStyle}>Frontend Development:</h2>
          <strong>
            <li>TypeScript</li>
          </strong>
          <strong>
            <li>Dart & Flutter</li>
          </strong>
          <strong>
            <li>React.js</li>
          </strong>
          <strong>
            <li>Tailwind CSS</li>
          </strong>
          <strong>
            <li>Material-UI</li>
          </strong>
          <strong>
            <li>HTML/CSS</li>
          </strong>
          <strong>
            <li>Next.js</li>
          </strong>
          <strong>
            <li>Vite</li>
          </strong>
        </ul>

        <ul className={boxStyle}>
          <h2 className={listTitleStyle}>Backend Development:</h2>
          <strong>
            <li>Node.js</li>
          </strong>
          <strong>
            <li>Express.js</li>
          </strong>
          <strong>
            <li>Python</li>
          </strong>
          <strong>
            <li>FastAPI</li>
          </strong>
          <strong>
            <li>SQLAlchemy</li>
          </strong>
          <strong>
            <li>Socket.io</li>
          </strong>
          <li>Java</li>
          <li>PHP</li>
          <li>Flask</li>
          <li>SQL</li>
          <li>NLTK</li>
        </ul>
      </div>

      <div className="grid md:grid-cols-2">
        <ul className={boxStyle}>
          <h2 className={listTitleStyle}>Testing:</h2>
          <li>Jest</li>
          <li>React testing library</li>
        </ul>
        <ul className={boxStyle}>
          <h2 className={listTitleStyle}>Desktop Application Development:</h2>
          <li>Electron</li>
          <li>PyQt</li>
        </ul>
      </div>
      <div className="grid md:grid-cols-2">
        <ul className={boxStyle}>
          <h2 className={listTitleStyle}>Cloud services & DevOps:</h2>
          <strong>
            <li>Firebase</li>
          </strong>
          <strong>Vercel</strong>
          <li>Aws</li>
          <li>Azure</li>
          <li>Docker</li>
          <li>Render</li>
        </ul>
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
