import Link from "next/link";

const NavBar = () => {
  return (
    <nav className=" text-white py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between">
        <div className="flex space-x-4">
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
      </div>
    </nav>
  );
};

export default NavBar;
