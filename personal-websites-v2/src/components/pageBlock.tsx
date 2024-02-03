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
      {/* Image placeholder */}
      <div className="bg-gray-800 shadow-xl h-48 w-full mb-4 mt-5"></div>{" "}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="mb-4 text-justify">{textContent}</p>
      {btn && (
        <Link href={btn.href} passHref>
          <button>{btn.text}</button>
        </Link>
      )}
    </div>
  );
}
