import React from 'react'
import Carousel from '../views/Carousel'
import TopBar from '../views/Topbar'
import icon from '../assets/img/samnelat30Logo-removebg-preview.png'
import '../assets/styles.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <TopBar/>
    <nav
    className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5"
  >
    <Link to="/" className="navbar-brand d-flex align-items-center">
      <h1 className="m-0">
        <img
          className="img-fluid me-3"
          src={icon}
          alt=""
        />
      </h1>
    </Link>
    <button
      type="button"
      className="navbar-toggler"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav mx-auto bg-light rounded pe-4 py-3 py-lg-0">
  
        <Link to="/" className="nav-item nav-link">Home</Link>
        <Link to="/about" className="nav-item nav-link">About Us</Link>
        {/**
          <Link to="/service" className="nav-item nav-link">Our Services</Link>
      */}
        
      
        <div className="nav-item dropdown">
        <Link to="/general" href="3"
        className="nav-link dropdown-toggle"
        data-bs-toggle="dropdown" >
          Insurance 
        </Link>
         
          <div className="dropdown-menu bg-light border-0 m-0">
            <Link to="/general" className="dropdown-item">General Insurance</Link>
            <Link to="/health" className="dropdown-item">Health Insurance</Link>
            <Link to="/life" className="dropdown-item">Life Insurance</Link>
          </div>
        </div>
       
        <Link to="/contact" className="nav-item nav-link">Contact Us</Link>
        <Link to="" className="nav-item nav-link">FAQ</Link>
        <Link to="" className="nav-item nav-link">Careers</Link>
      </div>
    </div>
    {/**
     <form action="#" class="search-form">
       <div class="form-group">
       <input type="text" class="form-control" placeholder="Search"/>
       </div>
      </form>
  */}
 
   </nav>
    </div>
  )
}

export default Navbar