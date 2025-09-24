import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa6";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

function Technology() {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl "> Technologies</h2>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <div>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="p-4 text-7xl">
          <TbBrandNextjs />
        </div>
        <div className="p-4 text-7xl text-green-500">
          <SiMongodb />
        </div>
        <div className="p-4 text-7xl text-red-700">
          <DiRedis />
        </div>
        <div className="p-4 text-7xl text-green-400">
          <FaNodeJs />
        </div>

        <div className="text-7xl text-blue-400">
          <RiTailwindCssFill />
        </div>
      </div>
    </div>
  );
}

export default Technology;
