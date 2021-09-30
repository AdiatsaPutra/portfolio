import Link from "next/link";

const NavLink = (props) => {
  return (
    <div>
      <Link href={props.link}>
        <a className="font-mono my-20 md:m-5 transition duration-500 border-b-2 border-transparent cursor-pointer text-xl font-light text-white hover:text-indigo-500 hover:border-current">
          {props.text}
        </a>
      </Link>
    </div>
  );
};

export default NavLink;
