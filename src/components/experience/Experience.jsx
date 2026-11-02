import React from "react";
import { experiences } from "../../constants";
import Timeline from"./Timeline";

const Experience = () => {
  return (
    <div className="c-space section-spacing" id="education">
      <Timeline data={experiences} />
    </div>
  );
};
export default Experience;
