import GalleryCarouel from './GalleryCarouel';
import {imgs} from '../../../assets/imgs/gallery.js';
import GallerySlider from "./GallerySlider"
import GallerySlider2 from './GallerySlider2';
import { useNavigate } from 'react-router-dom';


const Gallery = () => {
  const navigate=useNavigate;
  const handleNavigate=(props)=>{
    navigate(props);

  }
  return (
  <>
    <div className="gallery-section">
       <div className="container-fluid  image-divs">
  {
    imgs.map((item, index) => {
      return (
        <div key={index} className="">
          <img src={item} alt={`Image ${index + 1}`} className="img-fluid container-fluid"/>
        </div>
      );
    })
  }
</div>
      {/* <GalleryCarouel/> */}
      <h2 className="text-center" style={{marginTop:"60px"}}>Gallery</h2>
      <p className="text-center">this one is the Gallery section all our projects and achievments are documented and saved as Gallery memory each of them have their own date,description and title enjoy it.</p>
      <GallerySlider/>
    </div>
    
    <h2  className="text-center mx-4">Long story short</h2>
        <p className="text-center ">here is works those have been done and impacts made on life of society</p>
        <div className="cards-container">
        <div className="container-lg">
        <div className="border card" style={{"width": "auto"}}>
      <img src={imgs[0]} className="card-img-top img-fluid" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a className=" text-light btn btn-warning">Go somewhere</a>
      </div>
      </div>
      </div>    
        <div className="container-lg">
        <div className="border card" style={{"width": "auto"}}>
      <img src={imgs[0]} className="card-img-top img-fluid" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a className=" text-light btn btn-warning">Go somewhere</a>
      </div>
      </div>
      </div>    
        <div className="container-lg">
        <div className="border card" style={{"width": "auto"}}>
      <img src={imgs[0]} className="card-img-top img-fluid" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a className=" text-light btn btn-warning">Go somewhere</a>
      </div>
      </div>
      </div> 
        </div>
    
        <div className="container d-flex justify-content-center align-items-center full-height m-5">
        <button className="btn btn-primary" onClick={()=>{handleNavigate("projects")}}>ReadMore <i className="bi bi-arrow-right-circle-fill"></i></button>
      </div>
      <div className="container-fluid  image-divs">
  {
    imgs.map((item, index) => {
      return (
        <div key={index} className="">
          <img src={item} alt={`Image ${index + 1}`} className="img-fluid container-fluid"/>
        </div>
      );
    })
  }
</div>
       </>
  );
};

export default Gallery;
