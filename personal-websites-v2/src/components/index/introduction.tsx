export default function Introduction() {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="mb-4">
        I'm a passionate full-stack developer with a knack for creating dynamic
        and responsive web applications. My journey in tech has been driven by a
        curiosity to learn and a desire to solve complex problems. With
        expertise in languages like TypeScript, JavaScript, and Python, I've
        built a diverse portfolio ranging from interactive front-ends to
        scalable back-end systems. Beyond coding, I find joy in collaborating
        with teams, contributing to open-source projects, and continuously
        exploring new technologies to push the boundaries of web development.
      </p>
      <div className="bg-gray-500 h-64 w-full mb-4"></div>{" "}
      {/* Image placeholder */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
        More About Me
      </button>
    </div>
  );
}
