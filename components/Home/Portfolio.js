import React from "react";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <div className="bg-gray-900 pt-14">
      <div className="relative text-white px-10 2xl:px-60">
        <p className="transition duration-500 mb-10 text-white font-bold text-xl xl:text-5xl md:text-left hover:text-indigo-500 cursor-pointer">
          My Selected Projects
        </p>
        <div className="absolute top-7 md:top-1 xl:-top-4 right-0 mx-10">
          <p className="font-bold mb-10 text-gray-300 opacity-5 text-7xl md:text-9xl md:text-left transform hover:-translate-x-12 transition duration-500">
            Projects
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4 justify-center pb-10 px-16 2xl:px-60">
        <Projects
          linkTo="/"
          foto="/foto.jpg"
          namaProject="Nama Project"
          deskripsi="Deskripsi"
        />
        <Projects
          linkTo="/"
          foto="/foto.jpg"
          namaProject="Nama Project"
          deskripsi="Deskripsi"
        />
        <Projects
          linkTo="/"
          foto="/foto.jpg"
          namaProject="Nama Project"
          deskripsi="Deskripsi"
        />
      </div>
    </div>
  );
};

export default Portfolio;
