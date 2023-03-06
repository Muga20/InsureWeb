import React, { useState, useEffect } from 'react';
import ServiceDetails from '../ourService/ServiceDetails';
import "../assets/styles.css";
import { Link } from "react-router-dom";
import jsonData from '../assets/data/health.json';
import Facts from '../layouts/Facts';

function HealthInsure() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Promise.resolve(jsonData)
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  console.log(data)

  
  const [currentPage, setCurrentPage] = useState(1);
  const [servicesPerPage] = useState(6);
  const [selectedService, setSelectedService] = useState(null);


  if (!data) {
    return <div>Loading...</div>;
  }

  if (selectedService) {
    return <ServiceDetails service={selectedService} />;
  }


  // Get current services
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = data.slice(
    indexOfFirstService,
    indexOfLastService
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (!currentServices) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }



    return (
    
      <div>
 
    
      <div
        class="container-fluid page-header-health py-5 mb-3 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container py-5">
          <h1 class="display-4 animated slideInDown mb-4 text-cent">Health Insurance</h1>
          {/**
           <nav aria-label="breadcrumb animated slideInDown">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li class="breadcrumb-item">
                <Link to="">Pages</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
               Health Insurance
              </li>
            </ol>
          </nav>
        
        */}
       
        </div>
      </div>
  
      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center mx-auto container-div-style">
            <h1 class="display-6 mb-5">
              We Provide professional   Health Insurance  Services
            </h1>
          </div>
          <div class="row g-4 justify-content-center"> 
            {currentServices && currentServices.map((service) => (
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={service.id}>
                <div class="service-item rounded h-100 p-5">
                  <div class="d-flex align-items-center ms-n5 mb-4">
                    <div class="service-icon flex-shrink-0 back-ground rounded-end me-4">
                    <img className="img-fluid" src={`http://localhost:5173/src/assets/img/${service.image}`} alt="image" />
  
                    </div>
                    <h4 class="mb-0">{service.name}</h4>
                  </div>
                  <p class="mb-4">{service.info}</p>
                  <Link
                  className="btn btn-light px-3"
                  to={`/dataTwo/${service.id}`}
                 
                  onClick={() => setSelectedService(service)}
                >
                    Read More
                  </Link>
                  <Link className="btn  btn-light m-1"
                  to={`/getInsured/${service.id}`}
                 
                  onClick={() => setSelectedService(service)}

                  style={{width:'100px'}}
                >
                   GetInsured
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div class="row mt-5">
            <div class="col">
              <nav>
                <ul class="pagination justify-content-center">
                  {[
                    ...Array(
                      Math.ceil(data.length / servicesPerPage)
                    ).keys(),
                  ].map((pageNumber) => (
                    <li
                      class={`page-item ${
                        pageNumber + 1 === currentPage ? "active" : ""
                      }`}
                      key={pageNumber}
                    >
                      <button
                        class="page-link"
                        onClick={() => paginate(pageNumber + 1)}
                      >
                        {pageNumber + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <hr/>
      </div>
  <Facts/>
    </div>
    );
  }

export default HealthInsure;
