import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  
  const navigation = useNavigate();
  const goto = (path) => {
    navigation(path)
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" onClick={() => goto("/")}>Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Upload
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" onClick={() => goto("/uploadblog")}>Upload Blog</a></li>
                <li><a className="dropdown-item" onClick={() => goto("/uploadgallery")}>Upload Gallery</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" onClick={() => goto("/uploadproject")}>Upload Projects and Impact</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
