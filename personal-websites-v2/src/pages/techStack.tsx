import React from "react";

const TechStackPage: React.FC = () => {
  const listTitleStyle = "text-xl ml-0 font-bold mt-2 text-left";
  const boxStyle = "border p-5 m-3";

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="">My Tech Stack</h1>

      <h2 className="text-xl font-bold mt-4">Tech Stack:</h2>
      <p>
        My versatile tech stack encompasses Next.js, Vite, Material-UI, MongoDB,
        PostgreSQL, SQL, Jest, PHP, Python, JavaScript, TypeScript, Tailwind
        CSS, Jira, Git, GitHub, Socket.IO, FastAPI, Flask, Express, Node.js,
        HTML/CSS, Electron, PyQt, Docker, Discord and much more. With
        proficiency in these tools and frameworks, I'm equipped to tackle
        diverse challenges and deliver innovative solutions.
      </p>

      <div className="grid md:grid-cols-2">
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
          <li>Electron & PyQt (for desktop applications)</li>
          <li>Flutter (upcoming / learning)</li>
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
          <li>Go (upcoming / learning)</li>
          <li>Kotlin & Java (very interested)</li>
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
          <h2 className={listTitleStyle}>Real-time Communication:</h2>
          <li>Socket.IO</li>
        </ul>
      </div>
      <div className="grid md:grid-cols-2">
        <ul className={boxStyle}>
          <h2 className={listTitleStyle}>Desktop Application Development:</h2>
          <li>Electron</li>
          <li>PyQt</li>
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
