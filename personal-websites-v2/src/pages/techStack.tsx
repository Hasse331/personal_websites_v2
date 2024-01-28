import React from "react";
import Image from "next/image";

const TechStackPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        My Tech Stack
      </h1>
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-500 mb-4">
          Front-End Excellence with React and TypeScript
        </h2>
        <p className="mb-4">
          Diving into the front end, I leverage React alongside TypeScript to
          build intuitive and responsive user interfaces. My projects reflect my
          ability to harness the power of React's component-based architecture,
          bringing to life interactive and scalable applications that enhance
          user experience. Coupled with the type safety and enhanced code
          quality provided by TypeScript, my work stands out for its
          maintainability and reliability.
        </p>
        <div className="bg-gray-200 h-64 w-full mb-4"></div>{" "}
        {/* <Image
          src=""
          width={200}
          alt="Frontend Projects"
          className="mb-4 w-full h-auto rounded-lg shadow-lg"
        /> */}
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-500 mb-4">
          Stylish Interfaces with MUI and Tailwind CSS
        </h2>
        <p className="mb-4">
          For styling, I use Material-UI (MUI) and Tailwind CSS to create
          visually appealing and highly customizable designs. MUI offers a
          comprehensive suite of UI tools that enable me to implement
          sophisticated design systems with ease, while Tailwind CSS's
          utility-first approach allows for responsive, mobile-first designs
          that are both elegant and functional.
        </p>
        <div className="bg-gray-200 h-64 w-full mb-4"></div>{" "}
        {/* <Image
          src=""
          width={200}
          alt="Design Systems"
          className="mb-4 w-full h-auto rounded-lg shadow-lg"
        /> */}
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-500 mb-4">
          Back-End Development with Python, Node.js, and More
        </h2>
        <p className="mb-4">
          On the back end, my expertise spans Python and Node.js, allowing me to
          construct powerful and scalable server-side applications. With
          frameworks like FastAPI and Express, I build RESTful APIs and
          microservices that serve as the backbone of my applications.
          PostgreSQL and MongoDB further augment my projects, providing
          versatile data storage solutions that cater to both relational and
          non-relational database needs.
        </p>
        <div className="bg-gray-200 h-64 w-full mb-4"></div>{" "}
        {/* <Image
          src=""
          width={200}
          alt="Backend Projects"
          className="mb-4 w-full h-auto rounded-lg shadow-lg"
        /> */}
      </section>
      {/* Continue with other sections following the same pattern */}
    </div>
  );
};

export default TechStackPage;
