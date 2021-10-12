import Image from "next/image";

const Skills = () => {
  return (
    <div className="bg-gray-900 py-32">
      <div className="relative text-white px-10 2xl:px-60">
        <p className="transition duration-500 mb-10 text-white font-bold text-xl xl:text-5xl md:text-left hover:text-indigo-500 cursor-pointer">
          Skills
        </p>
        <div className="absolute top-7 md:top-1 xl:-top-4 left-0 mx-10">
          <p className="font-bold mb-10 text-gray-300 opacity-5 text-7xl md:text-9xl md:text-left transform hover:-translate-x-12 transition duration-500">
            My Skills
          </p>
        </div>
      </div>
      <div className="container mx-auto grid xl:grid-cols-4 gap-10 place-content-center mt-32">
        <div>
          <Image
            className="object-contain rounded-xl xl:my-0"
            src="/nextjs.png"
            width={130}
            height={130}
            alt="foto"
          />
        </div>
        <div>
          <Image
            className="object-contain rounded-xl xl:my-0"
            src="/flutter.png"
            width={130}
            height={130}
            alt="foto"
          />
        </div>
        <div>
          <Image
            className="object-contain rounded-xl xl:my-0"
            src="/nodejs.png"
            width={130}
            height={130}
            alt="foto"
          />
        </div>
        <div>
          <Image
            className="object-contain rounded-xl xl:my-0"
            src="/tailwind.jpg"
            width={130}
            height={130}
            alt="foto"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
