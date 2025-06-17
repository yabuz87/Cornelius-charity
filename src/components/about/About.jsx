import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import useGetStore from "../store/useGetStore";
import img3 from "../../assets/imgs/img3.jpg"; // Fallback image
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
    getProjects();
  }, [getProjects]);

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <h1 className="title-about">Who Are We?</h1>
        <h2 className="sub-title">We serve Humanity and stand for equality forever</h2>
      </section>


 <p className="about-intro text-dark  p-4 border m-5 text-center">
          Cornelius Charity Organization (CCO) is a legally recognized, non-governmental, and non-profit organization, established in accordance with the Civil Society Organizations Proclamation No. 1113/2019 of Ethiopia. Rooted in the principles of inclusivity, compassion, and integrity, CCO is dedicated to addressing and alleviating critical social challenges that affect marginalized and vulnerable populations.

Our work is guided by a people-first approach, emphasizing dignity, equality, and sustainable impact. We implement community-driven development projects that empower individuals and uplift entire communities—regardless of ethnicity, religion, gender, political affiliation, or socio-economic status.

By promoting equitable access to basic needs such as clean water, education, vocational training, and agricultural resources, CCO envisions a just and thriving society where everyone has the opportunity to live a meaningful and fulfilled life. We believe in building bridges, not barriers—ensuring that hope, opportunity, and human dignity remain at the center of every initiative we undertake.
        </p>
      <section className="about-mission container">
        <div className="mission-card">
          <h2 className="mission-title">Mission</h2>
          <p className="mission-text ">
            Our mission is to alleviate social challenges and improve quality of life for vulnerable populations
            through inclusive, sustainable, and community-driven initiatives. We ensure dignity, opportunity,
            and hope for every individual.
          </p>
        </div>

        <div className="mission-card">
          <h2 className="mission-title">Our Values</h2>
          <ul className="mission-values">
            <li><strong>Compassion</strong>: Serving with empathy and kindness.</li>
            <li><strong>Inclusivity</strong>: Embracing diversity and equity for all.</li>
            <li><strong>Integrity</strong>: Transparency and ethical practices.</li>
            <li><strong>Empowerment</strong>: Promoting self-reliance and growth.</li>
            <li><strong>Sustainability</strong>: Focusing on long-term, responsible impact.</li>
          </ul>
        </div>

       <div className="mission-card">
  <h2 className="mission-title">Vision</h2>
  <ol className="mission-text">
    <li>
      <strong>Clean Water Access</strong>: Build wells and develop springs to reduce disease in rural areas.
    </li>
    <li>
      <strong>Youth Empowerment</strong>: Offer vocational training to build job-ready skills.
    </li>
    <li>
      <strong>Sustainable Farming</strong>: Promote eco-friendly agriculture through demo farms.
    </li>
    <li>
      <strong>Support the Vulnerable</strong>: Aid widows, orphans, elderly, and disabled with dignity.
    </li>
  </ol>
</div>
      </section>

      <div className="section-divider">
        <h2 className="divider-title">Here's How</h2>
      </div>

      <section className="about-content container">
        {isProjectsLoading ? (
          <p className="loading-text">Loading projects...</p>
        ) : projectData.length === 0 ? (
          <p className="no-data-text">No projects found.</p>
        ) : (
          projectData.map((project, idx) => (
            <div className={`content-block ${idx % 2 === 1 ? 'reverse' : ''}`} key={project._id}>
              <div className="text-content">{project.description}</div>
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
      </section>
    </div>
  );
};

export default About;