import React from 'react'
import "./ProjectAndImpact.css"
// import ProjectSlider from './ProjectSlider'
import ProjectDescriptionSlider from './ProjectDescriptionSlider'
import images from '../../../assets/img'
import GallerySlider from '../gallery/GallerySlider'


const ProjectAndImpact = () => {
  return (
    <div className="container-fluid project-container" style={{marginTop:"100px"}}>
       

       <GallerySlider/>
      <h2  className="text-center mx-4">Long story short</h2>
        <p className="text-center ">here is works those have been done and impacts made on life of society</p>
        <div className="cards-container">
        <div className="container-lg">
        <div className="border card" style={{"width": "auto"}}>
      <img src={images[0]} className="card-img-top img-fluid" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a className=" text-light btn btn-warning">Go somewhere</a>
      </div>
      </div>
      </div>    
        <div className="container-lg">
        <div className=" card" style={{"width": "auto"}}>
      <img src={images[0]} className="card-img-top img-fluid" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a className=" text-light btn btn-warning">Go somewhere</a>
      </div>
      </div>
      </div>    
        <div className="container-lg">
        <div className="border card" style={{"width": "auto"}}>
      <img src={images[0]} className="card-img-top img-fluid" alt="..."/>
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
      <h2 className="text-success text-center">Project And Our Impacts</h2>
      <p className="text-center">the following slider shows the details of our project and our focuing areas and our achievments</p>
    
      {/* <ProjectSlider/> */}

      <div className="" style={{overflow:"hidden"}}>
      <div className="beneath-project-description">
      <div className="img-div-in-beneath-project-description">
        <img src={images[0]} className="img-fluid"></img>
      </div>
      <div className="text-div-in-beneath-project-description">
      <h2 className="text-success text-center">Project And Our Impacts</h2>
      <p className="text-center">the following slider shows the details of our project and our focuing areas and our achievmentsthe following slider shows the details of our project and our focuing areas and our achievmentsthe following slider shows the details of our project and our focuing areas and our achievmentsthe following slider shows the details of our project and our focuing areas and our achievmentsthe following slider shows the details of our project and our focuing areas and our achievmentsthe following slider shows the details of our project and our focuing areas and our achievmentsthe following slider shows the details of our project and our focuing areas and our achievmentsthe following slider shows the details of our project and our focuing areas and our achievments</p>
      </div>
     </div>
     <div className="beneath-project-description">
      
      <div className="text-div-in-beneath-project-description">
      <h2 className="text-success text-center">Project And Our Impacts</h2>
      <p className="text-center">the following slider shows the details of our project and our focuing areas and our achievmentsthe following slider shows the details of our project and our focuing areas and our achievmentsthe following slider shows the details of our project and our focuing areas and our achievmentsthe following slider shows the details of our project and our focuing areas and our achievmentsthe following slider shows the details of our project and our focuing areas and our achievmentsthe following slider shows the details of our project and our focuing areas and our achievmentsthe following slider shows the details of our project and our focuing areas and our achievmentsthe following slider shows the details of our project and our focuing areas and our achievments</p>
      </div>
      <div className="img-div-in-beneath-project-description">
        <img src={images[0]} className="img-fluid"></img>
      </div>
     </div>
      </div>
      <ProjectDescriptionSlider/>
    </div>
  )
}

export default ProjectAndImpact


//{/* <div className="">
      
      {/* <h1 className="text-center text-success">You are the one Who can make a change with us</h1> */}
    //   {/* <div className="img-Page contaienr-fluid">
    // </div>
    // <h1 className="title-about text-light">
    // Thank you for your kind hands and compassionate hearts
    // </h1> */}



   // </div> 