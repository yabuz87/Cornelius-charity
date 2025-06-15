import React, { useEffect } from 'react';
import "./ProjectAndImpact.css";
import ProjectDescriptionSlider from './ProjectDescriptionSlider';
import images from '../../../assets/img';
import useGetStore from '../../store/useGetStore';
import GallerySlider from '../gallery/GallerySlider';

const ProjectAndImpact = () => {
  const { projectData, getProjects } = useGetStore();

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="project-impact-container">
      <section className="impact-hero">
       
        <div className="hero-content">
          <h2 className="hero-title">Our Projects & Impact</h2>
          <p className="hero-subtitle">Transforming lives through meaningful initiatives</p>
        </div>
      </section>

 <GallerySlider />
      {/* Project Cards Section */}
      <section className="projects-section">
        <div className="section-header">
          <h2 className="section-title">Long story short</h2>
          <p className="section-description">
            Here are works that have been done and impacts made on the life of society.
          </p>
        </div>

        <div className="cards-container">
          {projectData?.length > 0 && projectData.map((project, index) => (
            <div key={index} className="project-card">
              <div className="card-image-container">
                <img src={project.photo} className="card-image" alt={`Project ${project.title}`} />
                <div className="image-overlay"></div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{project.title || "Project Title"}</h3>
                <p className="card-text">
                  {project.description?.substring(0, 100) || "Project description goes here..."}
                </p>
                <button className="card-button">
                  Learn More <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="view-more-container">
          <button className="view-more-btn">
            Read More <i className="bi bi-arrow-right-circle-fill"></i>
          </button>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-showcase">
        <div className="section-header">
          <h2 className="section-title">Project And Our Impacts</h2>
          <p className="section-description">
            The following shows the details of our project, our focus areas, and our achievements.
          </p>
        </div>

        <div className="impact-items-container">
          {projectData?.length >= 1 && projectData.map((item) => (
            <div key={item._id} className="impact-item">
              <div className="impact-image-wrapper">
                <img src={item.photo} className="impact-image" alt={`Impact ${item.title}`} />
              </div>
              <div className="impact-content">
                <h3 className="impact-title">{item.title}</h3>
                <p className="impact-description">{item.description}</p>
                <div className="impact-stats">
                  <div className="stat-item">
                    <span className="stat-value">500+</span>
                    <span className="stat-label">Lives Changed</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">20+</span>
                    <span className="stat-label">Communities</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectAndImpact;








 {/* Gallery */}
      <section className="gallery-section">
        <h2 className="section-title text-center">Moments That Matter</h2>
        <p className="section-subtitle text-center">Capturing the joy and transformation in the communities we serve</p>
        
        <div className="gallery-grid">
          {galleryData.map((img) => (
            <div key={img._id} className="gallery-item">
              <img src={img.photo} alt={`Gallery ${img._id}`} className="gallery-img" />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-4">
          <button 
            className="btn btn-primary" 
            onClick={() => handleNavigate("/gallery")}
          >
            View Full Gallery <i className="bi bi-arrow-right-circle-fill"></i>
          </button>
        </div>
      </section>