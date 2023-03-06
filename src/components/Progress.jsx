import React from 'react';
import Facts from '../layouts/Facts';
import Suggested from '../views/Suggested';
import image from '../assets/img/samnelat30 (2).jpeg'



function Progress() {

  return (
    <div>


  <div
    class="container-fluid page-header-view-cong py-5 mb-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
   
    <div class="container py-5">
      <h1 class="display-4 animated text-center  slideInDown mb-4" > </h1>
      
    </div>
  </div>

    <div class="section background-color ">
		<div class="container">
		
			<div class="row">
				<div class="col-md-8 blog-content pe-5">
					<p class="lead">It is with great pleasure that we celebrate 30 years of excellence and success at Samnel Insurance Brokers LTD , a leading insurance broker company. We are thrilled to have had the opportunity to serve you for three decades, and we look forward to continuing to provide you with outstanding insurance services for many years to come.</p>
					 <img  src={image} className='img-fluid mb-4 w-70 rounded' alt='' />

					<p>We take pride in our commitment to delivering personalized and innovative insurance solutions that meet the unique needs of our clients. Our team of highly skilled and experienced professionals has worked tirelessly to build a reputation for exceptional customer service and quality insurance products.</p>

				</div>
				<div class="col-md-4 sidebar">
					<div class="sidebar-box">

					</div>
				
					<div class="sidebar-box">
						<img src={image} alt="" class="img-fluid mb-4 w-70 rounded"/>
						<h3 class="text-black">More</h3>
						<p>Over the past 30 years, we have seen tremendous growth and success, and we are grateful for the trust and loyalty our clients have shown us. We would like to take this opportunity to thank you for your continued support, and we look forward to serving you for many more years to come.</p>

					</div>

					<div class="sidebar-box">
						
						
					</div>

					
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

export default Progress;
