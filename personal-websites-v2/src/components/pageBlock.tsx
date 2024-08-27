import Image from "next/image";
import Link from "next/link";

export default function PageBlock({
  title,
  textContent,
  imageSrc,
  btn = null,
}: {
  title: string;
  textContent: string | JSX.Element;
  imageSrc?: string;
  btn?: { href: string; text: string } | null;
}) {
  return (
    <div className="p-4">
      {" "}
      {/* Image placeholder */}
      {imageSrc && (
        <div className="flex justify-center rounded-md border  bg-slate-900 items-center">
          <Image
            className=" shadow-md"
            src={imageSrc}
            width={800}
            height={800}
            alt={imageSrc}
          />
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="mb-4 text-justify" style={{ whiteSpace: "pre-line" }}>
        {textContent}
      </div>
      {btn && (
        <Link
          className="max-w-3 no-underline"
          target="_blank"
          href={btn.href}
          passHref
          rel="noopener noreferrer"
        >
          <button>{btn.text}</button>
        </Link>
      )}
    </div>
  );
}
