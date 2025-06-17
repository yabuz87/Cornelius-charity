import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import  useGetStore  from "../store/useGetStore";
import img3 from "../../assets/imgs/img3.jpg"; // This can be used as fallback if needed
import './About.css';

const About = () => {
  const controls = useAnimation();
  const { projectData, getProjects, isProjectsLoading } = useGetStore();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('show');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  useEffect(() => {
    getProjects(); // Fetch projects on component mount
  }, [getProjects]);

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="hero-overlay"></div>
        <h1 className="title-about">Who Are We?</h1>
        <h2 className="sub-title">We serve Humanity and stand for equality forever</h2>
      </div>

      <div className="about-mission container">
        <div className="mission-card">
          <h2 className="mission-title">A Global Community</h2>
          <p className="mission-text">
            We are a global community of Child Champions that serves children in poverty so they can discover hope and reach their God-given potential.
          </p>
        </div>

        <div className="mission-card">
          <h2 className="mission-title">Our Mission</h2>
          <p className="mission-text">
            We are a global community of Child Champions that serves children in poverty so they can discover hope and reach their God-given potential.
          </p>
        </div>

        <div className="mission-card">
          <h2 className="mission-title">Vision</h2>
          <p className="mission-text">
            We are a global community of Child Champions that serves children in poverty so they can discover hope and reach their God-given potential.
          </p>
        </div>
      </div>

      <div className="section-divider">
        <h2 className="divider-title">Here's How</h2>
      </div>

      <div className="about-content container">
        {isProjectsLoading ? (
          <p className="loading-text">Loading projects...</p>
        ) : projectData.length === 0 ? (
          <p className="no-data-text">No projects found.</p>
        ) : (
          projectData.map((project) => (
            <div className="content-block" key={project._id}>
              <div className="text-content">
                {project.description}
              </div>
              <div className="image-content">
                <img
                  src={project.photo || img3}
                  alt="Our community"
                  className="content-image"
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default About;
