import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import img3 from "../../assets/imgs/img3.jpg";
import './About.css';

const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('show');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

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
          <p className="mission-text">We are a global community of Child Champions that serves children in poverty so they can discover hope and reach their God-given potential.</p>
        </div>

        <div className="mission-card">
          <h2 className="mission-title">Our Mission</h2>
          <p className="mission-text">We are a global community of Child Champions that serves children in poverty so they can discover hope and reach their God-given potential.</p>
        </div>

        <div className="mission-card">
          <h2 className="mission-title">Vision</h2>
          <p className="mission-text">We are a global community of Child Champions that serves children in poverty so they can discover hope and reach their God-given potential.</p>
        </div>
      </div>

      <div className="section-divider">
        <h2 className="divider-title">Here's How</h2>
      </div>

      <div className="about-content container">
        <div className="content-block">
          <div className="text-content">
            <p>Microsoft and our third-party vendors use cookies to store and access information such as unique IDs to deliver, maintain and improve our services and ads. If you agree, MSN and Microsoft Bing will personalise the content and ads that you see. You can select 'I Accept' to consent to these uses or click on 'Manage preferences' to review your options.</p>
          </div>
          <div className="image-content">
            <img src={img3} alt="Our community" className="content-image" />
          </div>
        </div>

        <div className="content-block reverse">
          <div className="image-content">
            <img src={img3} alt="Our mission" className="content-image" />
          </div>
          <div className="text-content">
            <p>Microsoft and our third-party vendors use cookies to store and access information such as unique IDs to deliver, maintain and improve our services and ads. If you agree, MSN and Microsoft Bing will personalise the content and ads that you see. You can select 'I Accept' to consent to these uses or click on 'Manage preferences' to review your options.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;