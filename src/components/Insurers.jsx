import React, { useState, useEffect } from "react";
import "../assets/styles.css";
import jsonData from "../assets/data/insurers.json";


const Insurers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [servicesPerPage] = useState(8);
  const [selectedService, setSelectedService] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    Promise.resolve(jsonData)
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  if (selectedService) {
    return <ServiceDetails service={selectedService} />;
  }

  // Get current services
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = data.slice(indexOfFirstService, indexOfLastService);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (!currentServices) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <hr />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto profession-div">
            <h1 className="display-6 mb-5"> Partners </h1>
            <hr />
          </div>

          <div className="row g-4">
            {currentServices &&
              currentServices.map((Data) => (
                <div
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="team-item rounded">
                    <div
                      style={{
                        justifyContent: "center",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        className=""
                        src={`http://localhost:5173/src/assets/img/${Data.image}`}
                        alt=""
                        style={{ height: "200px", width: "260px" }}
                      />
                    </div>

                    <div className="team-text text-center bg-white p-4">
                      <h5>{Data.name}</h5>
                      <div className="d-flex justify-content-center">
                        <a
                          className="btn btn-square btn-light m-1"
                          href={`https://www.${Data.url}`}
                        >
                        <i className="fa fa-search"></i>
                        </a>
                        <a
                          className="btn btn-square btn-light m-1"
                          href={`mailto:${Data.email}`}
                        >
                        <i className="fa fa-envelope"></i>
                        </a>
                        <a
                          className="btn btn-square btn-light m-1"
                          href={`https://www.google.com/maps/search/${Data.address}`}
                        >
                        <i className="fa fa-location-arrow"></i>
                        </a>
                        <a
                          className="btn btn-square btn-light m-1"
                          href={`tel:${Data.tell}`}
                        >
                        <i className="fa fa-mobile"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div class="row mt-5">
            <div class="col">
              <nav>
                <ul class="pagination justify-content-center">
                  {[
                    ...Array(Math.ceil(data.length / servicesPerPage)).keys(),
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
      </div>
    </div>
  );
};

export default Insurers;
