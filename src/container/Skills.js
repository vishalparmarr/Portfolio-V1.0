import React from "react";
import { Fade } from "react-awesome-reveal";
import { skillImages } from "../data/data";
import Marquee from "react-fast-marquee";
const Skills = () => {
  return (
    <Marquee>
      <div
        id="skills"
        className="box bg-gray-800 text-white mt-40 flex justify-between items-center mx-auto px-6 md:px-6 lg:px-6 w-screen lg:py-12 md:10 py-8"
      >
        <div className="container mx-auto">
          <Fade direction="left" cascade triggerOnce="true">
            <div className="grid grid-cols-9 md:grid-flow-row lg:grid-flow-row">
              {skillImages.map((skillImage, index) => {
                return (
                  <div className="flex items-center justify-center" key={index}>
                    <img
                      className="h-8 md:h-16 lg:h-20"
                      src={skillImage.image}
                      alt="skill png"
                    />
                  </div>
                );
              })}
            </div>
          </Fade>
        </div>
      </div>
    </Marquee>
  );
};

export default Skills;
