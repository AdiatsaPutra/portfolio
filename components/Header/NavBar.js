import { Link } from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";

const NavBar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <div className="sticky top-0 z-50">
        <div className="relative">
          <nav
            className={`${
              active ? "" : "border-transparent"
            } flex items-center flex-wrap font-poppins bg-gray-900 px-5 py-5`}
          >
            <Link href="/">
              <h1 className="animate-pulse text-3xl font-bold text-white transition duration-500 hover:text-indigo-500 hover:cursor-pointer">
                Adiatsa
              </h1>
            </Link>
            <button
              onClick={handleClick}
              className="inline-flex p-3 ml-auto text-white outline-none hover:bg-gray-900 lg:hidden hover:text-white"
            >
              {active ? (
                <svg
                  className="text-white fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                </svg>
              ) : (
                <svg
                  className="text-white fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
                </svg>
              )}
            </button>
            <div
              className={`${
                active ? "" : "hidden"
              } text-center transition w-full lg:inline-flex lg:flex-grow lg:w-auto`}
            >
              <div className="flex flex-col items-center w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto xl:items-start lg:h-auto">
                <h1>Link</h1>
                {/* <NavLink link="/" text="Home" />
                <NavLink link="/" text="About" />
                <NavLink link="/" text="Works" />
                <NavLink link="/" text="Contact" /> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
