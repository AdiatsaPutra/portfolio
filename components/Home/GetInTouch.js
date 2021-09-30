import Link from "next/link";

const GetInTouch = () => {
  return (
    <div className="bg-gray-900 text-center py-52">
      <p className="transition duration-500 mb-10 text-white font-bold text-xl xl:text-5xl hover:text-indigo-500 cursor-pointer">
        Get In Touch
      </p>
      <p className="text-md md:text-xl text-white mx-10">
        I'm currently looking for new opportunity. <br></br> You can contact me
        at
        <Link href="mailto:adiatsaputrasantika@gmail.com">
          <a className="text-indigo-500"> adiatsaputrasantika@gmail.com</a>
        </Link>{" "}
        <br></br> I will response within 24 hours!
      </p>
    </div>
  );
};

export default GetInTouch;
