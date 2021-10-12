import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../Button";

const DataDiri = () => {
  return (
    <>
      <div className="h-full bg-gray-900">
        <div className="flex flex-col-reverse items-center py-16 text-center text-white h xl:flex-row md:text-left xl:px-32 2xl:px-60 xl:py-20 2xl:py-44">
          <div className="flex-1 p-10 lg:p-20">
            <a className="text-3xl font-bold text-gray-100 hover:text-indigo-500 transition duration-500 border-b-2 border-transparent cursor-pointer font-poppins xl:text-5xl 2xl:text-7xl hover:border-current">
              Hi, Im Adiatsa
            </a>
            <p className="my-10 font-light font-poppins text-gray-200 text-md md:text-xl">
              Im from Indonesia and I made mobile application using Googles{" "}
              <span className="font-bold transition duration-500 hover:text-indigo-500 hover:cursor-pointer">
                Flutter
              </span>{" "}
              and web application using{" "}
              <span className="font-bold transition duration-500 hover:text-indigo-500 hover:cursor-pointer">
                React
              </span>{" "}
              and{" "}
              <span className="font-bold transition duration-500 hover:text-indigo-500 hover:cursor-pointer">
                NodeJS
              </span>
              . Im a student from Muhammadiyyah University of Yogyakarta,
              studying Information Technology.
            </p>
            <div className="flex flex-col items-center gap-5 md:flex-row md:gap-10">
              <div>
                <Button
                  linkTo="mailto:adiatsaputrasantika@gmail.com"
                  text="Contact Me"
                />
              </div>
              <div>
                <Link href="/">
                  <a className="text-xl transition duration-500 font-poppins hover:text-indigo-500">
                    Download CV
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative hover:cursor-auto">
            <div className="transition duration-500 transform translate-x-5 translate-y-5 border-2 border-indigo-500 w-72 h-72 md:w-96 md:h-96 xl:translate-x-5 xl:translate-y-5 hover:translate-y-3"></div>
            <div className="absolute bottom-0 flex-1">
              <Image
                className="object-cover transition duration-500 transform hover:scale-105 filter grayscale hover:filter-none"
                src={"/foto.jpg"}
                width={500}
                height={500}
                alt="foto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataDiri;
