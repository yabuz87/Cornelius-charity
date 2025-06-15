import GalleryCarouel from './GalleryCarouel';
import { imgs } from '../../../assets/imgs/gallery.js';
import GallerySlider from "./GallerySlider";
import { useNavigate } from 'react-router-dom';
import useGetStore from '../../store/useGetStore.js';
import { useEffect } from 'react';

const Gallery = () => {
  const navigate = useNavigate();
  const { galleryData, getGalleries } = useGetStore();

  useEffect(() => {
    getGalleries();
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="gallery-section">
        <div className="container-fluid image-divs">
          {galleryData.map((item) => (
            <div key={item._id} className="">
              <img
                src={item.photo}
                alt={`Image ${item._id}`}
                className="img-fluid container-fluid"
              />
            </div>
          ))}
        </div>

        <h2 className="text-center" style={{ marginTop: "60px" }}>Gallery</h2>
        <p className="text-center">
          This is the Gallery section. All our projects and achievements are documented and saved as gallery memories. Each of them has its own date, description, and title. Enjoy it.
        </p>
        <GallerySlider />
      </div>

      <h2 className="text-center mx-4">Long story short</h2>
      <p className="text-center">
        Here are works that have been done and impacts made on the life of society.
      </p>

      <div className="cards-container">
        {galleryData.length > 2 && (
          <>
            {[0, 1, 2].map((index) => (
              <div className="container-lg" key={index}>
                <div className="border card" style={{ width: "auto" }}>
                  <img
                    src={galleryData[index].photo}
                    className="card-img-top img-fluid"
                    alt={`Gallery ${index}`}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <button className="text-light btn btn-warning">Go somewhere</button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="container d-flex justify-content-center align-items-center full-height m-5">
        <button className="btn btn-primary" onClick={() => handleNavigate("projects")}>
          Read More <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
      </div>
    </>
  );
};

export default Gallery;
