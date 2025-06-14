import React, { useState } from "react";
import { data } from "../../../assets/imgs/project";

import "./imgSlider.css";

function ProjectDescriptionSlider() {
  const [readMoreStates, setReadMoreStates] = useState({});

  const handleReadMore = (index) => {
    setReadMoreStates({
      ...readMoreStates,
      [index]: !readMoreStates[index]
    });
  };

  return (
    <div className="slider-container container-fluid">
      <div className="scrollable-content">
        {data.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3 className="text-center text-dark">{proj.title}</h3>
            <div className="row d-flex align-items-center">
              <p className="col-md-7" style={{ margin: "5px" }}>
                {proj.description}
                <span className={`${readMoreStates[index] ? 'd-block' : 'd-none'}`}>
                  {proj.readMore}
                </span>
              </p>
              <img src={proj.img} className="col-md-4" alt={proj.title} />
            </div>
            <button
              className="btn btn-dark m-2"
              style={{  display: "flex", alignItems: "center" }}
              onClick={() => handleReadMore(index)}
            >
              {readMoreStates[index] ? "Read Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectDescriptionSlider;
