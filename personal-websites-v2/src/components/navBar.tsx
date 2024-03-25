import Link from "next/link";

const NavBar = () => {
  const linkStyle =
    "hover:text-blue-300 hover:border-slate-400 border border-slate-600 m-4 rounded-md pl-8 pr-8 opacity-100";

  return (
    <nav className=" text-white">
      <div className="max-w-6xl mx-auto px-4 flex justify-between">
        <Link href="/" passHref>
          <p className={linkStyle}>Home</p>
        </Link>
        <Link href="/techStack" passHref>
          <p className={linkStyle}>Stack</p>
        </Link>
        <Link href="/portfolio" passHref>
          <p className={linkStyle}>Portfolio</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
