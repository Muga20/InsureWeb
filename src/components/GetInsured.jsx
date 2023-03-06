import React, { useState ,useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import image from '../assets/img/getInsured.jpg'
import jsonData from '../assets/data/insurers.json'


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const { serviceId } = useParams();
  const [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any fields are empty
    if (!name || !email || !subject || !message || !serviceId) {
      setIsError(true);
      return;
    }

    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      await axios.post('http://localhost:3000/send-email', {
        name,
        email,
       
        message,
        serviceId,
      });

      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      setIsError(true);
    }

    setIsLoading(false);
  };


  useEffect(() => {
    Promise.resolve(jsonData)
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  
 
  return (
    <div>
    <div
    className="container-fluid page-header-get-Insured py-5 mb-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <h1 className="display-4 animated slideInDown mb-4 text-center">Get Insured</h1>

      {/**
    
     <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item"><Link to="">Pages</Link></li>
          <li className="breadcrumb-item active" aria-current="page">
            Get Insured
          </li>
        </ol>
      </nav>
    */}
     
    </div>
  </div>

    <div className="container-xxl py-5 background-color">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <h1 className="display-6 mb-5">
              Get Insured By  . . . . . . .
            </h1>
            <p className="mb-4">
                Providing your personal details bellow 
            </p>
            <br/>
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="First Name"
                      value={name} onChange={(e) => setName(e.target.value)}
                    />
                    <label for="name">First Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Last Name"
                     
                    />
                    <label for="email">Last Name </label>
                  </div>
                </div>
                <div className="col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control text-area-style"
                    placeholder="Email"
                    id="email"
                
                  ></input>
                  <label for="message">Email</label>
                </div>
              </div>
              <div className="col-6">
              <div className="form-floating">
                <input
                  type="phone"
                  className="form-control text-area-style"
                  placeholder="Phone"
                  id="phone"
                 
                ></input>
                <label for="message">Phone</label>
              </div>
            </div>

               
                <div className="col-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control text-area-style"
                      placeholder="Address"
                      id="Address"
                     
                 
                    ></input>
                    <label for="message">Address</label>
                  </div>
                </div>
                <div className="col-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="Country" 
                    placeholder="Country"
                    value={subject} onChange={(e) => setSubject(e.target.value)}
                  />
                  <label for="subject">Country</label>
                </div>
              </div>
      
              <div className="col-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control text-area-style"
                  placeholder="Age"
                  id="Age"
                 
                ></input>
                <label for="message">Age</label>
              </div>
            </div>
            <div className="col-12">
            <select className="form-select">
             <option> Chose Insurer </option>
              {data.map((insurer) => (
              
                <option className="text-area-style" key={insurer.id} value={insurer.id}>
                  {insurer.name}
                </option>
            
              
              ))}
            </select>
          </div>
          

           <p className="mb-4">
               Samnel Insurance Brokers LTD
           </p>
                <div className="col-12 ">
                  <button className="btn btn-primary py-3 px-5 col-6 "  type="submit" disabled={isLoading}>
                  {isLoading ? 'Sending...' : 'Submit'}
                </button>
        
                </div>
              </div>
            </form>
            <br/>
            <div className="mb-4">
            {isSuccess && <p> We will get Back to you soon with an email thanks </p>}
            {isError && <p>Oops, something went wrong.</p>}
            </div>
            

          </div>
          <div
            className="col-lg-6 wow fadeIn"
            data-wow-delay="0.5s"
          >
            <div className="position-relative rounded overflow-hidden h-100">

            <img src={image} alt='' className='img-fluid mb-4 w-70 rounded h-70 h-70 position-absolute top-50 start-50 translate-middle' />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default Contact