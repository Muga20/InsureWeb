import React, { Component, useState, useEffect } from 'react';
import '../assets/styles.css'
import jsonData from '../assets/data/team.json';
import { Link } from 'react-router-dom'


  class Profession extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }
  
    componentDidMount() {
      Promise.resolve(jsonData)
        .then(data => this.setState({ data }))
        .catch(error => console.error(error));
    }
  
    render() {
      const { data } = this.state;
  
  return (
    <div>
    
   <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto profession-div">
          <h1 className="display-6 mb-5">Meet Our Professional Team Members</h1>
        </div>
        <div className="row g-4">
        {data && data.map((Data) =>(

          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item rounded">
            <img className="" src={`http://localhost:5173/src/assets/img/${Data.image}`} alt=""   
            style={{ height: "200px", width: "260px" }} />
            <div className="text-center p-4">
              <h5>{Data.name}</h5>
              <span>Designation</span>
            </div>
            <div className="team-text text-center bg-white p-4">
              <div className="d-flex justify-content-center">
                <a className="btn btn-square btn-light m-1" href=""
                  ><i className="fab fa-twitter"></i
                ></a>
                <a className="btn btn-square btn-light m-1" href=""
                  ><i className="fab fa-facebook-f"></i
                ></a>
                <a className="btn btn-square btn-light m-1" href=""
                  ><i className="fab fa-youtube"></i
                ></a>
                <a className="btn btn-square btn-light m-1" href=""
                  ><i className="fab fa-linkedin-in"></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        ))}
         
        </div>
      </div>
    </div>
  
    </div>
  )
}
  }

export default Profession