import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import useGetStore from '../store/useGetStore';
import "./home.css";
import images from '../../assets/img';
import PieChart from './PieChart';
import BarChart from './BarChart';
import TypingEffect from './TypingEffect';

const Home = () => {
  const navigate = useNavigate();
  const { numericalDataForFinanceChart, numericalDataForFocusingAreaChart } = useGetStore();
  
  const handleNavigate = (path) => {
    navigate(path);
  };

  const features = [
    { icon: "bi-book", title: "Education", color: "var(--dark)", description: "Providing quality education to underprivileged children through our school programs and scholarships." },
    { icon: "bi-egg-fried", title: "Healthy Food", color: "var(--success)", description: "Our nutrition programs ensure children receive balanced meals for proper growth and development." },
    { icon: "bi-suit-heart-fill", title: "Love And Care", color: "#F33A6A", description: "Creating safe spaces where children feel valued and supported through our care programs." },
    { icon: "bi-droplet-half", title: "Pure Water", color: "var(--primary)", description: "Building wells and water purification systems in communities lacking clean water access." },
    { icon: "bi-capsule-pill", title: "Medical Care", color: "var(--dark)", description: "Operating mobile clinics and health camps to provide free medical care to those in need." },
    { icon: "bi-people-fill", title: "Community", color: "var(--secondary)", description: "Strengthening communities through empowerment programs and skills training." }
  ];

  const impactStories = [
    { 
      title: "School Construction in Rural Area", 
      description: "We've built a new school in the remote village of Kibera, providing education to 200+ children who previously had no access to schooling.", 
      img:images[0] 
    },
    { 
      title: "Clean Water Initiative", 
      description: "Our water project has brought clean drinking water to 5 villages, reducing waterborne diseases by 75% in these communities.", 
       img:images[1] 
    },
    { 
      title: "Medical Camp Success", 
      description: "Our recent medical camp treated over 500 patients and provided free medications to those who couldn't afford healthcare.", 
       img:images[2] 
    }
  ];

  const blogPosts = [
    { 
      title: "Annual Report 2023", 
      description: "Read about our achievements and challenges in the past year, and our plans for expanding our programs in 2024.", 
      img:images[0] 
    },
    { 
      title: "Volunteer Spotlight", 
      description: "Meet Sarah, our volunteer of the month, and learn about her inspiring journey with our organization.", 
      img:images[1]  
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Empowering lives, one act of kindness at a time.</h1>
          <div className="typing-effect">
            <TypingEffect />
          </div>
          <div className="action-buttons">
            <button className="btn btn-secondary" onClick={() => handleNavigate("/contact")}>
              <i className="bi bi-telephone"></i> Contact Us
            </button>
            <button className="btn btn-primary" onClick={() => handleNavigate("/donate")}>
              <i className="bi bi-heart-fill"></i> Donate Now
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <motion.div 
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="features-grid"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }} 
              className="feature-card"
            >
              <i className={`bi ${feature.icon} feature-icon`} style={{ color: feature.color }}></i>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Join Us in Making a Difference</h2>
          <p className="cta-text">Every donation helps us reach more people and create lasting change in communities around the world.</p>
          <button 
            className="btn btn-primary" 
            onClick={() => handleNavigate("/donate")}
            style={{ background: 'white', color: 'var(--primary)' }}
          >
            <i className="bi bi-heart-fill"></i> Donate and Help
          </button>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="impact-section">
        <h2 className="section-title">Our Impact Stories</h2>
        <p className="section-subtitle">See how your support is transforming lives and communities around the world</p>
        
        <div className="impact-cards">
          {impactStories.map((story, index) => (
            <div key={index} className="impact-card">
              <img src={story.img} alt={story.title} className="card-img" />
              <div className="card-body">
                <h3 className="card-title">{story.title}</h3>
                <p className="card-text">{story.description}</p>
                <button className="btn">
                  Read More <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-4">
          <button 
            className="btn btn-primary" 
            onClick={() => handleNavigate("/projects")}
          >
            View All Projects <i className="bi bi-arrow-right-circle-fill"></i>
          </button>
        </div>
      </section>

      {/* Data Visualization */}
      <section className="data-section">
        <div className="data-container">
          <h2 className="section-title text-center">Our Focus Areas</h2>
          <p className="section-subtitle text-center">See how we allocate resources to maximize our impact</p>
          
          <div className="chart-container">
            <h3 className="text-center mb-4">Program Distribution</h3>
            <div className="row">
              <div className="col-md-6">
                <PieChart data={numericalDataForFocusingAreaChart} />
              </div>
              <div className="col-md-6">
                <BarChart data={numericalDataForFocusingAreaChart} />
              </div>
            </div>
          </div>
          
          <div className="chart-container">
            <h3 className="text-center mb-4">Financial Allocation</h3>
            <div className="row">
              <div className="col-md-6">
                <PieChart data={numericalDataForFinanceChart} />
              </div>
              <div className="col-md-6">
                <BarChart data={numericalDataForFinanceChart} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section">
        <h2 className="section-title text-center">Moments That Matter</h2>
        <p className="section-subtitle text-center">Capturing the joy and transformation in the communities we serve</p>
        
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img} alt={`Gallery ${index + 1}`} className="gallery-img" />
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

      {/* Blog Preview */}
      <section className="blog-section">
        <h2 className="section-title text-center">Latest Updates</h2>
        <p className="section-subtitle text-center">Stay informed about our work, stories from the field, and upcoming initiatives</p>
        
        <div className="blog-cards">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <img src={post.img} alt={post.title} className="card-img" />
              <div className="card-body">
                <h3 className="card-title">{post.title}</h3>
                <p className="card-text">{post.description}</p>
                <button className="btn">
                  Read Article <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-4">
          <button 
            className="btn btn-primary" 
            onClick={() => handleNavigate("/blog")}
          >
            Visit Our Blog <i className="bi bi-arrow-right-circle-fill"></i>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;