import React from 'react'
import "./ProjectAndImpact.css"
import ProjectSlider from './ProjectSlider'
import ProjectDescriptionSlider from './ProjectDescriptionSlider'


const ProjectAndImpact = () => {
  return (
    <div className="container-fluid project-container">
      <ProjectSlider/>
      <h1 className="text-success">Project And Our Impacts</h1>
      <ProjectDescriptionSlider/>
      <div className="">
        <h1 className="text-center text-success">You are the one Who can make a change with us</h1>
        <div className="img-Page contaienr-fluid">
      </div>
      <h1 className="title-about text-light">
      Thank you for your kind hands and compassionate hearts
      </h1>
      </div>
    </div>
  )
}

export default ProjectAndImpact
