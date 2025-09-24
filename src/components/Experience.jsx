import React from "react";
import { EXPERIENCES } from "../constants";

export default function Experience() {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Experiences</h2>
      <div>
        {EXPERIENCES.map((Experiences, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-stone-400">{Experiences.year}</p>
            </div>
            <div className="w-full m-w-xl lg:w-3/4">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
