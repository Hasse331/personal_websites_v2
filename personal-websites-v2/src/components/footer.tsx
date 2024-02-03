import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" text-white py-4 mt-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center  space-x-4">
          <Link href="/" passHref>
            <p className="hover:text-blue-300 transition duration-300">Home</p>
          </Link>
          <Link href="/techStack" passHref>
            <p className="hover:text-blue-300 transition duration-300">Stack</p>
          </Link>
          <Link href="/portfolio" passHref>
            <p className="hover:text-blue-300 transition duration-300">
              Portfolio
            </p>
          </Link>
        </div>
        <p className="mt-4">
          © {new Date().getFullYear()} Hasse Imberg. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
