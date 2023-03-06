import React from 'react'
import '../assets/styles.css'
function TopBar() {
  return (
    <div>
    <div
    className="container-fluid back-ground text-white-50 py-2 px-0 d-none d-lg-block"
  >
    <div className="row gx-0 align-items-center">
      <div className="col-lg-7 px-5 text-start">
      <i class="fa-regular fa-location-dot"></i>
        <div className="h-100 d-inline-flex align-items-center me-4">
          <small className="fa fa-map-marker me-2"></small>
          <a href="https://example.com/kimathi-house-02nd-floor" style={{textDecoration:'none', color:'#9F9EAD'}}>
          <small>Kimathi House, 02 nd floor,</small>
          </a>
        </div>
        <div className="h-100 d-inline-flex align-items-center me-4">
          <small className="far fa-envelope-open me-2"></small>
          <a href='mailto:samnelinfo@samnel.com'  style={{textDecoration:'none', color:'#9F9EAD'}} >
           <small>samnelinfo@samnel.com</small>
          </a>
        </div>
        <div className="h-100 d-inline-flex align-items-center me-4">
          <small className="far fa-clock me-2"></small>
          <small>Mon - Fri : 09 AM - 09 PM</small>
        </div>
      </div>
      <div className="col-lg-5 px-5 text-end">
        <div className="h-100 d-inline-flex align-items-center">

          <a className="text-white-50 ms-" 
          href="https://www.facebook.com/samnelinsurancebrokers/">
          <i className="fab fa-facebook-f"></i>
          </a>

          <a className="text-white-50 ms-4" href=""
            ><i className="fab fa-twitter"></i
          ></a>
          <a className="text-white-50 ms-4" href=""
            ><i className="fab fa-linkedin-in"></i
          ></a>
          <a className="text-white-50 ms-4" href=""
            ><i className="fab fa-instagram"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
    
    
    </div>
  )
}

export default TopBar