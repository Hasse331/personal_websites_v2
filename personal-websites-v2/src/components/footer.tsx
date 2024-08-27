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
          <Link href="https://github.com/Hasse331?tab=repositories" passHref>
            <p className="hover:text-blue-300 transition duration-300">
              Portfolio
            </p>
          </Link>
        </div>
        <p>Websites updated: 27.8.2024</p>
        <p className="mt-4">
          © {new Date().getFullYear()} Hans Imberg. All rights reserved. No part
          of this site — images, personal information, or design elements — may
          be reproduced or used without explicit permission.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
