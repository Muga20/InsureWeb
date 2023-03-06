import React, { Component } from 'react';
import "../assets/styles.css";
import { Link } from "react-router-dom";
import jsonData from '../assets/data/data.json';


class OurServiceIndex extends Component {
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
      <div className="container-xxl py-5 background-color">
      <div className="container">
        <div className="text-center mx-auto profession-div">
          <h1 className="display-6 mb-5">Meet Our Professional Team Members</h1>
        </div>
        <div className="row g-4">
          {data && data.slice(0,8).map((Data) =>(
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item rounded">
            <img className=" img-fluid-" src={`http://localhost:5173/src/assets/img/${Data.image}`} alt="" 
            style={{ height: "200px", width: "260px" }} />
            <div className="text-center p-4">
              <h5>{Data.name}</h5>
             
            </div>
            <div className="team-text text-center bg-white p-4">
           
              <div className="d-flex justify-content-center">
                <Link className="btn btn-square- btn-light m-1"
                  to={`/services/${Data.id}`}
                 
                  onClick={() => setSelectedService(service)}
                >
                    Read More
                  </Link>

                  <Link className="btn btn-square- btn-light m-1"
                  to={`/getInsured/${Data.id}`}
                 
                  onClick={() => setSelectedService(service)}
                >
                   Get Insured
                  </Link>
               
               
              </div>
            </div>
          </div>
        </div>
   

        ))}
         
        </div>
      </div>
    </div>
      </div>
    );
  }
}

export default OurServiceIndex;
