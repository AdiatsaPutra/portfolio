import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-gray-900 p-3 ">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 text-3xl text-white font-poppins">
            Adiatsa
          </a>
        </Link>
        <button
          className=" inline-flex p-3 hover:text-indigo-500 rounded lg:hidden text-white ml-auto"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full text-center flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-poppins items-center justify-center hover:text-indigo-500 transition duration-500 ">
                Home
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-poppins items-center justify-center hover:text-indigo-500 transition duration-500">
                Services
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-poppins items-center justify-center hover:text-indigo-500 transition duration-500">
                About us
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-poppins items-center justify-center hover:text-indigo-500 transition duration-500">
                Contact us
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
