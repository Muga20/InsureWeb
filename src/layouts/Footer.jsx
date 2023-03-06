import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles.css";
import { FacebookProvider, Page } from "react-facebook";
import icon from '../assets/img/samnelat30Logo-removebg-preview.png'




function Footer() {
  return (
    <div>
      <div
        className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h1 className="text-white mb-4">


              <Link to="/" 
                className="img-fluid me-3">
              <h1 className="m-0">
                <img
                  className="img-fluid me-3"
                  src={icon}
                  alt=""
                />
              </h1>
            </Link>

              </h1>
              <p>
                Whether you need coverage for your home, car, or business, our
                team of experienced agents is here to help.
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-square me-1" href="">
                  <i className="fab fa-twitter"></i>
                </a>

                <a
                  className="btn btn-square me-1"
                  href="https://www.facebook.com/samnelinsurancebrokers/"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a className="btn btn-square me-1" href="">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-square me-0" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Address</h5>
              <p>
                <i className="fa fa-map-marker-alt me-3"></i>Kimathi House, 02
                nd floor,
              </p>
              <p>
                <i className="fa fa-phone-alt me-3"></i>+254 728 929 835{" "}
              </p>
              <p>
                <i className="fa fa-comment me-3"></i>+254 712 196 196{" "}
              </p>

              <p>
                <i className="fa fa-envelope me-3"></i>
                <a
                  href="mailto:samnelinfo@samnel.com"
                  style={{ textDecoration: "none", color: "#9F9EAD" }}
                >
                  samnelinfo@samnel.com
                </a>
              </p>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Quick Links</h5>
              <Link to="/about" className="btn btn-link">
                About Us
              </Link>
              <Link to="/contact" className="btn btn-link">
                Contact Us
              </Link>
              <Link to="/service" className="btn btn-link">
                Our Services
              </Link>
              <Link to="/service" className="btn btn-link">
              FAQ
            </Link>
            <Link to="/service" className="btn btn-link">
           Careers
          </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Facebook Feeds</h5>
              <FacebookProvider appId="your-facebook-app-id">
                <Page
                  href="https://www.facebook.com/samnelinsurancebrokers/"
                  tabs="timeline"
                  style={{ width: "288px", height: "200px" }}
                />
              </FacebookProvider>
            </div>
          </div>
        </div>
        <div className="container-fluid copyright">
          <div className="container">
            <div className="row-">
              <div className="col-md-6 text-center text-md-center- mb-3 mb-md-0">
                &copy; <Link to="/">Samnel Insurance Brokers LTD</Link>, All
                Right Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
