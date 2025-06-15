import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useGetStore from '../../store/useGetStore.js';
import GallerySlider from "./GallerySlider";
import "./Gallery.css";

const Gallery = () => {
  const navigate = useNavigate();
  const { galleryData, getGalleries } = useGetStore();
  const length=galleryData.length;

  useEffect(() => {
    getGalleries();
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      {/* Hero Gallery Section */}
      <section className="gallery-hero text-center py-5">
        <h2 className="section-title">📸 Moments That Matter</h2>
        <p className="section-subtitle text-muted">
          Capturing joy, transformation, and impact across communities.
        </p>
      </section>

      {/* Image Grid Section */}
      <section className="container gallery-grid-section">
        <div className="row g-4">
          {galleryData.map((item) => (
            <div key={item._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 shadow-sm gallery-card">
                <img src={item.photo} alt={item.title} className="card-img-top gallery-img" />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text text-muted small">{new Date(item.createdAt).toLocaleDateString()}</p>
                  <p className="card-text">{item.description?.slice(0, 80)}...</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-primary" onClick={() => handleNavigate("/gallery")}>
            View Full Gallery <i className="bi bi-arrow-right-circle-fill"></i>
          </button>
        </div>
      </section>

      {/* Gallery Slider */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">More Highlights</h2>
          <GallerySlider />
        </div>
      </section>

      {/* Impact Summary */}
      <section className="container text-center py-5">
        <h2>Long Story Short</h2>
        <p>Here are works that have been done and the impacts made on the life of society.</p>

        <button className="btn btn-outline-success mt-3" onClick={() => handleNavigate("projects")}>
          Read More <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
      </section>
    </>
  );
};

export default Gallery;
