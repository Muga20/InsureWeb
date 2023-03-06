import React from 'react'
import '../assets/styles.css'
import icon from '../assets/img/icon/icon-04-primary.png'
import icon2 from '../assets/img/icon/icon-03-primary.png'
import image from '../assets/img/profile.jpg'
import image2 from '../assets/img/WhatsApp Image 2023-03-02 at 13.49.40.jpeg'

function HomeAbout() {
  return (
    <div>
    <div className="container-xxl py-5 background-color">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div
              className="position-relative overflow-hidden rounded ps-5 pt-5 h-100 style-one"
            
            >
              <img
                className="position-absolute w-100 h-100 style-two"
                src={image2}
                alt=""
               
              />
              <div
                className="position-absolute top-0 start-0 bg-white rounded pe-3 pb-3 style-three"
               
              >
                <div
                  className="d-flex flex-column justify-content-center text-center back-ground rounded h-100 p-3"
                >
                  <h1 className="text-white mb-0">30</h1>
                  <h2 className="text-white">Years</h2>
                  <h5 className="text-white mb-0">Experience</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="h-100">
              <h1 className="display-6 mb-5">
                We're Here To Assist You With Exploring Protection
              </h1>
              <p className="fs-5 text-primary-color  mb-4">
              We have a reputation for reliability and trustworthiness. Our customers can rely on us to provide the protection they need when they need it most.
              </p>
              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <h5 className="mb-0">Directors</h5>
                    
                  </div>
                  <ul>
                    <li>Samuel Waweru Gikuru Chairman</li>
                    <li>Nellie Wambui Waweru Director</li>
                    <li>Monicah Waweru Directer</li>
                    </ul>
                </div>
                <div className="col-sm-6">
                <div className="d-flex align-items-center">
                  
                  <h5 className="mb-0">Secretary</h5>
                 
                </div>
                <ul>
                <li>Mutahi Muranga & Associates</li>
                <li>Kimathi house 1st floor</li>
              
             </ul>
              </div>
              <div className="col-sm-6">
              <div className="d-flex align-items-center">
               
                <h5 className="mb-0">Bankers</h5>
               
              </div>
              <ul>
              <li>Giro</li>
              <li>Commercial Bank</li>
 
           </ul>
            </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <h5 className="mb-0">Lawyers</h5>
                    
                  </div>
                     <ul>
                       <li>Gichuki King'ara & Company</li>
                     </ul>
                </div>
              </div>
              <p className="mb-4">
              We offer a wide range of coverage options to meet the unique needs of each individual or business. Our policies are tailored to provide the right amount of coverage at an affordable price.
              </p>
              <div className="border-top mt-4 pt-4">
                <div className="d-flex align-items-center">
              
                  <h5 className="mb-0">Get in touch: <span className='mb-0 span-details'> info@samnel.com </span></h5>
                 
                  

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

export default HomeAbout




// import React from 'react'
// import '../assets/styles.css'
// import icon from '../assets/img/icon/icon-04-primary.png'
// import icon2 from '../assets/img/icon/icon-03-primary.png'
// import image from '../assets/img/profile.jpg'
// import image2 from '../assets/img/about.jpg'

// function HomeAbout() {
//   return (
//     <div>
//     <div className="container-xxl py-5">
//       <div className="container">
//         <div className="row g-5">
//           <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
//             <div
//               className="position-relative overflow-hidden rounded ps-5 pt-5 h-100 style-one"
            
//             >
//               <img
//                 className="position-absolute w-100 h-100 style-two"
//                 src={image2}
//                 alt=""
               
//               />
//               <div
//                 className="position-absolute top-0 start-0 bg-white rounded pe-3 pb-3 style-three"
               
//               >
//                 <div
//                   className="d-flex flex-column justify-content-center text-center back-ground rounded h-100 p-3"
//                 >
//                   <h1 className="text-white mb-0">25</h1>
//                   <h2 className="text-white">Years</h2>
//                   <h5 className="text-white mb-0">Experience</h5>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
//             <div className="h-100">
//               <h1 className="display-6 mb-5">
//                 We're Here To Assist You With Exploring Protection
//               </h1>
//               <p className="fs-5 text-primary-color  mb-4">
//               We have a reputation for reliability and trustworthiness. Our customers can rely on us to provide the protection they need when they need it most.
//               </p>
//               <div className="row g-4 mb-4">
//                 <div className="col-sm-6">
//                   <div className="d-flex align-items-center">
//                     <img
//                       className="flex-shrink-0 me-3"
//                       src={icon}
//                       alt=""
//                     />
//                     <h5 className="mb-0">Directors</h5>
//                   </div>
//                 </div>
//                 <div className="col-sm-6">
//                 <div className="d-flex align-items-center">
//                   <img
//                     className="flex-shrink-0 me-3"
//                     src={icon}
//                     alt=""
//                   />
//                   <h5 className="mb-0">Secretary</h5>
//                 </div>
//               </div>
//               <div className="col-sm-6">
//               <div className="d-flex align-items-center">
//                 <img
//                   className="flex-shrink-0 me-3"
//                   src={icon}
//                   alt=""
//                 />
//                 <h5 className="mb-0">Bankers</h5>
//               </div>
//             </div>
//                 <div className="col-sm-6">
//                   <div className="d-flex align-items-center">
//                     <img
//                       className="flex-shrink-0 me-3"
//                       src={icon2}
//                       alt=""
//                     />
//                     <h5 className="mb-0">Lawyers</h5>
//                   </div>
//                 </div>
//               </div>
//               <p className="mb-4">
//                 Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
//                 Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
//                 sed stet lorem sit clita duo justo magna dolore erat amet
//               </p>
//               <div className="border-top mt-4 pt-4">
//                 <div className="d-flex align-items-center">
//                   <img
//                     className="flex-shrink-0 rounded-circle me-3"
//                     src={image}
//                     alt=""
//                   />
//                   <h5 className="mb-0">Call Us: +012 345 6789</h5>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
    
    
//     </div>
//   )
// }

// export default HomeAbout