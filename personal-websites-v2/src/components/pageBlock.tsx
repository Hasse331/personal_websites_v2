import Image from "next/image";
import Link from "next/link";

export default function PageBlock({
  title,
  textContent,
  imageSrc,
  btn = null,
}: {
  title: string;
  textContent: string;
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
            alt="Image"
          />
        </div>
      )}
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
