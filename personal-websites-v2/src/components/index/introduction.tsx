export default function Introduction({ textContent }: { textContent: string }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="mb-4">{textContent}</p>
      <div className="bg-gray-500 h-64 w-full mb-4"></div>{" "}
      {/* Image placeholder */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
        More About Me
      </button>
    </div>
  );
}
