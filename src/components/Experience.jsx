import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experiences
      </motion.h2>
      <div>
        {EXPERIENCES.map((Experiences, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-stone-400">{Experiences.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full m-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold text-2xl">
                {Experiences.role} -{" "}
                <span className="text-sm text-stone-500">
                  {Experiences.company}
                </span>
              </h3>
              <p className="mb-4 text-stone-400">{Experiences.description}</p>{" "}
              {Experiences.technologies.map((tech, index) => (
                <span
                  className="mr-2 mt-4 bg-stone-900 p-2 rounded  px-2 py-1 text-sm font-medium text-stone-300"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
