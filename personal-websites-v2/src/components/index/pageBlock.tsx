export default function PageBlock() {
  return (
    <div className="w-full md:w-1/2 p-4">
      <h3 className="text-2xl font-bold mb-4">
        Practical Experience & Projects Portfolio
      </h3>
      <p className="mb-4">
        My Projects Portfolio showcases a breadth of applications, from
        single-page applications in React to complex APIs with Python. These
        projects not only demonstrate my technical skills but also my ability to
        see through a project from idea to implementation. My Internships and
        Work Experience have provided me with invaluable insights into the
        software development lifecycle, team collaboration, and project
        management in real-world settings. Additionally, my contributions to
        Open Source reflect my commitment to the developer community and my
        belief in the power of collaborative innovation.
      </p>
      <div className="bg-gray-200 h-48 w-full mb-4"></div>{" "}
      {/* Image placeholder */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
        View Portfolio
      </button>
    </div>
  );
}
