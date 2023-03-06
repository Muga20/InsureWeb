import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any fields are empty
    if (!name || !email || !subject || !message) {
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
        subject,
        message,
      });

      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      setIsError(true);
    }

    setIsLoading(false);
  };

  return (
    <div>
    <div
    className="container-fluid page-header-contact py-5  wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <h1 className="display-4 animated slideInDown mb-4 text-center">Contact Us</h1>
      {/**
     <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item"><Link to="">Pages</Link></li>
          <li className="breadcrumb-item active" aria-current="page">
            Contact Us
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

          {/**
        <h1 className="display-6 mb-5">
        </h1>
        */}
            
            <p className="mb-4">
            If you have any questions or concerns regarding our insurance policies, please do not hesitate to contact us. Our customer service representatives are available to assist you in any way possible.           
            </p>
            <hr/>
            <p className="mb-4 text-center">
            We will respond as soon as possible
            </p>
            <hr/>
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      value={name} onChange={(e) => setName(e.target.value)}
                    />
                    <label for="name">Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                      value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                    <label for="email">Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                      value={subject} onChange={(e) => setSubject(e.target.value)}
                    />
                    <label for="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control text-area-style"
                      placeholder="Leave a message here"
                      id="message"
                      value={message} onChange={(e) => setMessage(e.target.value)}
                 
                    ></textarea>
                    <label for="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary py-3 px-5"  type="submit" disabled={isLoading}>
                  {isLoading ? 'Sending...' : 'Send'}
                </button>
        
                </div>
              </div>
            </form>

            {isSuccess && <p>Message sent successfully!</p>}
            {isError && <p>Oops, something went wrong. Please try again.</p>}

          </div>
          <div
            className="col-lg-6 wow fadeIn"
            data-wow-delay="0.5s"
          >
            <div className="position-relative rounded overflow-hidden h-100">

              <iframe
                className="position-relative w-100 h-100 map-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default Contact