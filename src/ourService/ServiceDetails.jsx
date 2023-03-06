import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import jsonData from '../assets/data/data.json';
import Facts from '../layouts/Facts';
import Suggested from '../views/Suggested';





function ServiceDetails() {

  const { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    Promise.resolve(jsonData)
      .then(data => {
        const item = data.find(item => item.id === Number(id));
        setData(item || {});
      })
      .catch(error => console.error(error));
  }, [id]);

  console.log(data.icon)

  return (
 <div>
  <div
    class="container-fluid page-header-view  py-5 mb-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
   
    <div class="container py-5">
      <h1 class="display-4 animated text-center  slideInDown mb-4" style={{color:"white"}}>{data.name} Insurance</h1>
      
    </div>
  </div>

    <div class="section background-color  ">
		<div class="container">
		
			<div class="row">
				<div class="col-md-8 blog-content pe-5">
					<p class="lead">{data.note}</p>
					 <img  src={`http://localhost:5173/src/assets/img/${data.imageTwo}`} className='img-fluid mb-4 w-70 rounded' alt='' />
					<p>{data.info1}</p>

					<blockquote><p>{data.info2}</p></blockquote>

					<p>{data.info3}</p>

					<blockquote><p>{data.info4}</p></blockquote>


				
				</div>
				<div class="col-md-4 sidebar">
					<div class="sidebar-box">
					</div>
				
					<div class="sidebar-box">
						<img src={`http://localhost:5173/src/assets/img/${data.image}`} alt="" class="img-fluid mb-4 w-70 rounded"/>
						<h3 class="text-black">{data.name}</h3>
						<p><p>{data.info5}</p></p>
						<p>
						<Link className="btn bg-secondary  btn-md text-white"
						to={`/getInsured/${data.id}`}
					   
						onClick={() => setSelectedService(service)}
					  >
						 Get Insured
						</Link></p>
					</div>

					<div class="sidebar-box">
						<h3 class="text-black">Why get {data.name} Insurance </h3>
						<p>{data.note1}</p>
					</div>

					<img  src={`http://localhost:5173/src/assets/img/${data.imageThree}`} className='img-fluid mb-4 w-70 rounded' alt='' />
				</div>
			</div>
		</div>
  
	</div>
 <Suggested/>
 <hr/>
  <Facts/>
 
    </div>
  );
}

export default ServiceDetails;
