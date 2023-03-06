import React from 'react'
import '../assets/styles.css'

function Facts() {
  return (
    <div>
    
    <div className="container-fluid overflow-hidden my-5 px-lg-0 background-color ">
    <div className="container facts px-lg-0">
      <div className="row g-0 mx-lg-0">
      
        <div className="col-lg-6 facts-text wow fadeIn" data-wow-delay="0.1s">
          <div className="h-100 px-4 ps-lg-0">
            <h1 className="text-white mb-4">For Individuals And Organisations</h1>
            <p className="text-light mb-5">
            We make it easy and convenient to purchase and manage your insurance policy. You can get a quote online or speak to one of our agents over the phone. We also offer a variety of payment options and online account management tools for your convenience.
            </p>
            <a href="" className="align-self-start btn btn-secondary py-3 px-5"
              >More Details</a
            >
          </div>

        </div>

        <div className="col-lg-6 facts-counter wow fadeIn" data-wow-delay="0.5s">
          <div className="h-100 px-4 pe-lg-0">
            <div className="row g-5">
              <div className="col-sm-6">
                <p className="fs-5 text-primary">Happy Clients</p>
                <h1 className="display-5" data-toggle="counter-up">5685</h1>
                
              </div>
              <div className="col-sm-6">
                <p className="fs-5 text-primary">Countries</p>
                <h1 className="display-5" data-toggle="counter-up">Kenya</h1>
               
              </div>
              <div className="col-sm-6">
                <p className="fs-5 text-primary">Awards Achieved</p>
                <h1 className="display-5" data-toggle="counter-up">525</h1>
               
              </div>
              <div className="col-sm-6">
                <p className="fs-5 text-primary">Founded</p>
                <h1 className="display-5" data-toggle="counter-up">July,1993</h1>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    
    </div>
  )
}

export default Facts