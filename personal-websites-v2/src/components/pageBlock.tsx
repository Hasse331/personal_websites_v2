import Link from "next/link";

export default function PageBlock({
  title,
  textContent,
  btn = null,
}: {
  title: string;
  textContent: string;
  btn?: { href: string; text: string } | null;
}) {
  return (
    <div className="p-4">
      {" "}
      {/* Removed width classes */}
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="mb-4">{textContent}</p>
      <div className="bg-gray-200 h-48 w-full mb-4"></div>{" "}
      {/* Image placeholder */}
      {btn && (
        <Link href={btn.href} passHref>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
            {btn.text}
          </button>
        </Link>
      )}
    </div>
  );
}
