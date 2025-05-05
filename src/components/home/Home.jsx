import React,{useEffect} from 'react'
import img1 from "../../assets/imgs/img1.jpg"
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import useGetStore from '../store/useGetStore';
import "./home.css"
import images from '../../assets/img';
import PieChart from './PieChart';
import BarChart from './BarChart';
import TypingEffect from './TypingEffect';



const Home = () => {
const navigate=useNavigate();
const{numericalDataForFinanceChart,numericalDataForFocusingAreaChart}=useGetStore();
const handleNavigate=(props)=>{
navigate(props);

   }
  
  return (
    <>
    {/* section one */}

     <div className="img-page">
     <div className="discription-area">
     <h1 className="">Empowering lives, one act of kindness at a time.</h1>
     <div className="typing_effect"> <TypingEffect/></div>

     <div className="donate-button-container">
     <button className="vol-home-button" onClick={()=>handleNavigate("/contact")}>Contact Us</button>
     <button className="donation-home-button" onClick={()=>handleNavigate("/donate")}>Donate</button>
     </div>

     </div>
    </div>



    {/* section two */}

    <motion.div 
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.25,
          },
        },
      }}
      className="grid-container"
    >
      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1 },
        }} 
        className="grid-item"
      >
        <i className="bi bi-book" style={{color:"black",fontSize:"40px"}}></i>
        <h5>Education</h5>
        <p>Our goal in health is to reach every child to ensure their safety and well-being in this country.</p>
      </motion.div>
      
      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1 },
        }} 
        className="grid-item"
      >
        <i className="bi bi-egg-fried" style={{color:"orange",fontSize:"40px"}}></i>
        <h5>Healthy Food</h5>
        <p>Our goal in health is to reach every child to ensure their safety and well-being in this country.</p>
      </motion.div>

      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1 },
        }} 
        className="grid-item"
      >
        <i className="bi bi-suit-heart-fill fs-3" style={{color:"#F33A6A",fontSize:"40px"}}></i>
        <h5>Love And Care</h5>
        <p>Our goal in health is to reach every child to ensure their safety and well-being in this country.</p>
      </motion.div>
      
      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1 },
        }} 
        className="grid-item"
      >
        <i className="bi bi-droplet-half text-primary" style={{fontSize:"40px"}}></i>
        <h5>Pure Water</h5>
        <p>Our goal in health is to reach every child to ensure their safety and well-being in this country.</p>
      </motion.div>
      
      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1 },
        }} 
        className="grid-item"
      >
        <i className="bi bi-capsule-pill" style={{color:"black",fontSize:"40px"}}></i>
        <h5>Medical</h5>
        <p>Our goal in health is to reach every child to ensure their safety and well-being in this country.</p>
      </motion.div>
      
      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1 },
        }} 
        className="grid-item"
      >
        <i className="bi bi-capsule-pill" style={{color:"black",fontSize:"40px"}}></i>
        <h5>Spirituality</h5>
        <p>Our goal in health is to reach every child to ensure their safety and well-being in this country.</p>
      </motion.div>
    </motion.div>



{/* section three */}

    <div className="container-fluid bg-success donation-div-with-color-bg">
   <div className="text-light">
   <h3>We are helping people to alleviate</h3>
   <p>by being a donator to us you become a part of our organization</p>
   </div>
   <div className="col-5" onClick={()=>{handleNavigate("donate")}}>
<button className="border-light text-light btn"> Donate and Help</button>
   </div>
    </div>





   {/* section four*/}

    <h2  className="text-center mx-4">Long story short</h2>
    <p className="text-center ">here is works those have been done and impacts made on life of society</p>
    <div className="cards-container">
    <div className="container-lg">
    <div className="border card" style={{"width": "auto"}}>
  <img src={img1} className="card-img-top img-fluid" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a className=" text-light btn btn-warning">Go somewhere</a>
  </div>
  </div>
  </div>    
    <div className="container-lg">
    <div className="border card" style={{"width": "auto"}}>
  <img src={img1} className="card-img-top img-fluid" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a className=" text-light btn btn-warning">Go somewhere</a>
  </div>
  </div>
  </div>    
    <div className="container-lg">
    <div className="border card" style={{"width": "auto"}}>
  <img src={img1} className="card-img-top img-fluid" alt="..."/>
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



    

{/* section five numerical data representation */}


   <h1 className="text-center mb-3">Numerical Data on Focusing Area</h1>
   <div className="container d-flex justify-content-center align-items-center border p-3">
  <div className="row container d-flex justify-content-center" style={{ width: "70%" }}>
    <div className="col-5">
      <PieChart data={numericalDataForFocusingAreaChart} />
    </div>
    <div className="col-6">
      <BarChart data={numericalDataForFocusingAreaChart} />
    </div>
  </div>
</div>
 <div>
 <h3 className="text-center">Charity's fund alocation will be for</h3>
 <div className="container d-flex justify-content-center align-items-center border p-3">
  <div className="row container d-flex justify-content-center" style={{ width: "60%" }}>
    <div className="col-5">
      <PieChart data={numericalDataForFinanceChart} />
    </div>
    <div className="col-6">
      <BarChart data={numericalDataForFinanceChart} />
    </div>
  </div>
</div>
 </div>



    
{/* section six Gallery trailer section */}

<h2 className="text-center">Activity in Frame</h2>
<p className="text-center">this is a few image from the project and impact</p>
   <div className="container-fluid  image-divs">
  {
    images.map((item, index) => {
      return (
        <div key={index} className="">
          <img src={item} alt={`Image ${index + 1}`} className="img-fluid container-fluid"/>
        </div>
      );
    })
  }
</div>



{/* section seven */}
<div className="container d-flex justify-content-center align-items-center full-height m-5">
    <button className="btn btn-primary" onClick={()=>{handleNavigate("gallery")}}>seeMore <i className="bi bi-arrow-right-circle-fill"></i></button>
  </div>

     <div className="container-fluid">
     <h2 className="text-center">Latest News</h2>
      <p className="text-center">we have a blog page you can see and update your information here</p>
    <div className="blogs-on-home-page">
    <div className="container-lg">
    <div className="border card" style={{"width": "auto"}}>
  <img src={img1} className="card-img-top img-fluid" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-success">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a className=" text-light btn btn-success">Go somewhere</a>
  </div>
  </div>
  </div> 
  <div className="container-lg">
    <div className="border card" style={{"width": "auto"}}>
  <img src={img1} className="card-img-top img-fluid" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-success">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a className=" text-light btn btn-success">Go somewhere</a>
  </div>
  </div>
  </div> 
    </div>
    <div className="container d-flex justify-content-center align-items-center full-height m-5">
    <button className="btn btn-primary" onClick={()=>{handleNavigate("blog")}}><i className="bi bi-arrow-right-circle-fill"></i></button>
  </div>
     </div>
          
          {/* <Footer/> */}
    </>
  )}

export default Home