import Image from "next/image";
import Link from "next/link";

const Projects = (props) => {
  return (
    <div>
      <div className="w-72 md:w-full h-96 relative">
        <Image
          className="object-cover transition duration-500 transform hover:scale-105"
          src={props.foto}
          sizes="100%"
          layout="fill"
          objectFit="cover"
          alt="foto"
        />
      </div>
      <p className="mt-5 font-poppins text-white text-xl">
        {props.namaProject}
      </p>
      <p className="my-3 font-poppins text-gray-300 font-light text-sm">
        {props.deskripsi}
      </p>
      <Link href={props.linkTo}>
        <a className="transition duration-500 font-poppins text-white hover:text-indigo-500">
          Get In Depth
        </a>
      </Link>
    </div>
  );
};

export default Projects;
