export default function PageBlock({
  title,
  textContent,
}: {
  title: string;
  textContent: string;
}) {
  return (
    <div className="w-full md:w-1/2 p-4">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="mb-4">{textContent}</p>
      <div className="bg-gray-200 h-48 w-full mb-4"></div>{" "}
      {/* Image placeholder */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
        View Portfolio
      </button>
    </div>
  );
}
