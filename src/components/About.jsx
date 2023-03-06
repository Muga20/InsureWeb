import React from 'react'
import { Link } from 'react-router-dom'
import Facts from '../layouts/Facts'


import HomeAbout from './HomeAbout'


function About() {
  return (
    <div>
    
        <div
        className="container-fluid page-header-about   wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <h1 className="display-4 animated slideInDown mb-4 color-about text-center ">About Us</h1>
          {/**
              <nav aria-label="breadcrumb animated slideInDown color-about">
            <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link to="">Pages</Link></li>
              <li className="breadcrumb-item active  " aria-current="page">
                  About Us
              </li>
            </ol>
          </nav>
        */}
    
        </div>
      </div>
        <HomeAbout/>
        <Facts/>

    </div>
  )
}

export default About