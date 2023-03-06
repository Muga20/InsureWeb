import React from 'react'
import '../assets/styles.css'
import image1 from '../assets/img/crash-1308575_1920.jpg'
import HomeAbout from './HomeAbout'
import Facts from '../layouts/Facts'
import OurServiceIndex from '../ourService/OurServiceIndex'
import FeatureIndex from '../pages/FeatureIndex'
import Profession from '../pages/Profession'
import { Link } from 'react-router-dom'
import Insurers from './Insurers'
import Progress from './Progress'

 
function Home() {
  return (
    <div>
    <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
    <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">

    <img className="img-fluid" src={image1} alt="Image" style={{ height:'700px' , width:'100%' }} />


          <div className="carousel-caption">
            <div className="container">
              <div className="row cover-text">
                <div className="col-12 col-lg-11">
                  <h1 className="  animated slideInDown text-center  " style={{ fontSize:'50px' }}>
                    Insurance Creates Wealth For Everyone
                  </h1>
                  <p className="fs-5  mb-5">
                  AtSamnel Insurance Brokers LTD, we understand that protecting the things that matter most to you is a top priority.
                  </p>

                   <Link to="/about" className="btn bg-secondary  py-3 px-5" style={{}} >More About Us </Link>
                </div>
              </div>
            </div>
       
        
        {/**
        <div className="carousel-item">
          <img className="w-100" src={image2} alt="Image" />
          <div className="carousel-caption">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <h1 className="display-3 text-dark mb-4 animated slideInDown">
                    The Best Insurance Begins Here
                  </h1>
                  <p className="fs-5 text-body mb-5">
                    Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                    duo justo magna dolore erat amet
                  </p>
                  <a href="" className="btn btn-primary py-3 px-5"
                    >More Details</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        */}
      </div>
      
      {/**
       <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    */}
   



    </div>
  </div>
    <HomeAbout/>
    <OurServiceIndex />
    <Facts/>
    <Progress/>
    <FeatureIndex/>
    <Insurers/>
    <Profession/>
   
    
    </div>
  )
}

export default Home

