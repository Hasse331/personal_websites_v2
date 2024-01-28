/* Quick Introduction: A brief but powerful intro to who you are and what you do.
Skill Highlights: Showcase your top skills or technologies you excel in.
Portfolio Teasers: Preview your best projects with links to detailed pages.
About Me Snippet: A short personal bio leading to the full 'About Me' page.
Visually Engaging: Use animations, high-quality images, or interactive elements to captivate visitors. */

// pages/index.tsx
import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">About Me</h2>
        <p className="mb-4">
          I'm a passionate full-stack developer with a knack for creating
          dynamic and responsive web applications. My journey in tech has been
          driven by a curiosity to learn and a desire to solve complex problems.
          With expertise in languages like TypeScript, JavaScript, and Python,
          I've built a diverse portfolio ranging from interactive front-ends to
          scalable back-end systems. Beyond coding, I find joy in collaborating
          with teams, contributing to open-source projects, and continuously
          exploring new technologies to push the boundaries of web development.
        </p>
        <div className="bg-gray-200 h-64 w-full mb-4"></div>{" "}
        {/* Image placeholder */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
          More About Me
        </button>
      </div>

      <div className="flex flex-wrap justify-between items-start">
        <div className="w-full md:w-1/2 p-4">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Tech Stack</h3>
          <p className="mb-4">
            Languages: At the core of my development work lies a solid command
            of TypeScript, JavaScript, and Python, enabling me to craft
            efficient and robust applications. Frameworks & Libraries: I
            leverage React for its component-driven architecture, enhancing UI
            development, and pair it with Next.js for SEO-friendly, server-side
            rendered applications. My back-end expertise is supported by
            Node.js, Express, and FastAPI, offering a versatile foundation for
            building APIs and services. Database Management: I'm proficient in
            managing data with both relational databases like PostgreSQL and
            NoSQL systems such as MongoDB, ensuring data integrity and
            performance.
          </p>
          <div className="bg-gray-200 h-48 w-full mb-4"></div>{" "}
          {/* Image placeholder */}
          <Link href="/techStack">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
              Explore Tech Stack
            </button>
          </Link>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">
            Communication & Collaboration
          </h3>
          <p className="mb-4">
            Efficient project execution is as much about communication as it is
            about coding. I'm well-versed in Development & Deployment Tools like
            Git and GitHub, ensuring version control and collaborative
            development are handled with precision. For project management, I
            utilize Jira and Trello, adept at steering projects from conception
            to deployment. My familiarity with CI/CD practices streamlines the
            development pipeline, enabling rapid, reliable releases. Beyond
            tools, my Interpersonal and Collaboration Skills foster a productive
            and positive team environment, where open communication and mutual
            respect drive collective success.
          </p>
          <div className="bg-gray-200 h-48 w-full mb-4"></div>{" "}
          {/* Image placeholder */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
            Learn More
          </button>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">
            Practical Experience & Projects Portfolio
          </h3>
          <p className="mb-4">
            My Projects Portfolio showcases a breadth of applications, from
            single-page applications in React to complex APIs with Python. These
            projects not only demonstrate my technical skills but also my
            ability to see through a project from idea to implementation. My
            Internships and Work Experience have provided me with invaluable
            insights into the software development lifecycle, team
            collaboration, and project management in real-world settings.
            Additionally, my contributions to Open Source reflect my commitment
            to the developer community and my belief in the power of
            collaborative innovation.
          </p>
          <div className="bg-gray-200 h-48 w-full mb-4"></div>{" "}
          {/* Image placeholder */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
