import Link from "next/link";

const NavBar = () => {
  const linkStyle =
    "hover:text-blue-300 font-semibold hover:border-slate-400 m-4 rounded-md";

  return (
    <nav className=" text-white bg-slate-800">
      <div className="max-w-5xl mx-auto px-4 flex justify-between">
        <Link className="no-underline" href="/" passHref>
          <p className={linkStyle}>Home</p>
        </Link>
        <Link className="no-underline" href="/techStack" passHref>
          <p className={linkStyle}>Stack</p>
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
          href="https://github.com/Hasse331?tab=repositories"
          passHref
        >
          <p className={linkStyle}>Portfolio (GitHub)</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
