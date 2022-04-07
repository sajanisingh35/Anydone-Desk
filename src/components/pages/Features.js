import React from 'react';
import Embrace from '../images/features/Embrace.png';
import performance from '../images/features/performance.gif';
import project from '../images/features/project.gif';



const Features = () => {
    return(
        <div className="features">
			
			<div className="row h-100 align-items justify-content-center">
			  <div className="col-md-12 col-lg-6 order-1">
				<div className=" d-flex flex-column align-items-lg-start align-items lg start px-2 px-md-5">
				<p className="features-header font-weight-bold mb-4 text-center text-lg-left">
						Embrace Slicker Customer Support with <span className="color"><b>Anydone Desk</b></span>
				</p>
				<p className="mb-4 text-desc-sm font-weight	text-center text-lg-left home-subtext">
								Go beyond the traditional customer support with Anydone Desk and
								its power-packed AI platform that empowers you to deliver an
								exceptional customer experience.
				</p>
				<div className="pricing-btn-group" >
					<a className=" button btn btn-primary cta-button-primary_rounded cta-button-primary_lg cta-button-primary_rounded_lg text-uppercase	mb-0 mb-sm-0 mt-2 pl-20
									" href="#">Try Now</a>
					<a className=" arrowf btn cta-button-outline	cta-button-primary_rounded f-sm mb-5 mb-lg-0"  href="#">Watch Video
						</a>
				</div>
				</div>
				
			
				</div>
				<div className="col-md-12 col-lg-5	order-2	text-center	pr-5	pt-4	top-image-blob-label">
				<img className="embrace" src= {Embrace} alt='Embrace'/> 
			</div>
	 
				
			</div>
			<div className="container-fluid h-100">
				<div className="row h-100 align-items-center justify-content-center">
					<div className="col-md-12 col-xl-6 order-2 order-xl-1 text-center" id="accordionOneSvg">
					<img src= {performance} className="display-image-area img-fluid" id="accordionOneImage" alt="Proactive Accordion Image"/>
					</div>
					<div className="col-md-12 col-xl-6 order-1 order-xl-2">
						<div className="d-flex flex-column px-2 px-md-5 accordion" id="accordionOne">
						<h1 className=" text-description color-header pb-5 proactive-features-accordion-label">
							Proactive Features
						</h1>	

					
						<div className="accordion" id="accordionExample">
  							<div className="accordion-item">
  							  <h2 className="accordion-header" id="headingOne">
    						  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       							 Performance Insights
      						  </button>
                              </h2>
   							 <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
     						 <div className="accordion-body">
	 						 Use AI-driven data to improve your customer service. Browse
							through Anydone Desk Analytics to get an overview of your
							team’s and bot’s performance, results, and client’s
							historical data.
     					 </div>
    					 </div>
 					 </div>
  					<div className="accordion-item">
    					<h2 className="accordion-header" id="headingTwo">
     					 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      					  Activity Log
      					</button>
   						 </h2>
   						 <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
   						   <div className="accordion-body">
							  Improve employee time management, productivity, and maximize
							efforts on action plans to salvage a customer situation with
							proper insights from the activity log.
     					 </div>
  						  </div>
  					</div>
  					<div className="accordion-item">
   					 <h2 className="accordion-header" id="headingThree">
    				  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
   					   Contact Managements
   					   </button>
   					 </h2>
   				    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
     				 <div className="accordion-body">
	 						 Apply Anydone Desk's fully integrated contact-centric
							database to track, manage, and automate activities based on
							communication linked to active and slipping away contacts.
     				 </div>
    				</div>
 					 </div>
 					 <div className="accordion-item">
 						   <h2 className="accordion-header" id="headingFour">
  							    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
   								    Auto Tickets Suggestion
    						  </button>
   						 </h2>
    					<div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      						<div className="accordion-body">
	 								 Improve employee time management, productivity, and maximize efforts on action plans to salvage a customer situation with proper insights from the activity log.
     						 </div>
   						 </div>
  						</div>
					</div>

					</div>
				</div>


					</div>
				</div>
				
			<div className="container-fluid h-100">
				<div className="row h-100 align-items-center justify-content-center">
					{/*  */}
					<div className="col-md-12 col-xl-6 order-1">
						<div className="d-flex flex-column px-2 px-md-5 accordion" id="accordionTwo">
							<h1 className="
									text-description
									color-header
									pb-5
									simplify-work-accordion-label
								">
								Simplify Works
							</h1>

							<div className="accordion" id="accordionExample">
  							<div className="accordion-item">
  								  <h2 className="accordion-header" id="headingOne">
     								 <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
     								  Project Planning
      								</button>
   								 </h2>
    								<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
     								 <div className="accordion-body">
	 									 Streamline your projects using Anydone Desk to plan, manage, and track progress. Keep your team in the loop for project progress without using tedious traditional procedures.
    								 </div>
   									</div>
  							</div>
 							 <div className="accordion-item">
   								 <h2 className="accordion-header" id="headingTwo">
     								 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      								  Contribute Collaborate
     								 </button>
    							</h2>
    						<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
     						 <div className="accordion-body">
								  Collaborate using private notes in ticket threads, manage multiple emails in one place, create automated assignment rules, and contribute to an existing project to form a smart workflow.
     						 </div>
   							 </div>
  							</div>
  							<div className="accordion-item">
    							<h2 className="accordion-header" id="headingThree">
      							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
     							 Multiple Bots
     							 </button>
    							</h2>
   								 <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
     								 <div className="accordion-body">
										 Automate repetitive tasks by creating and assigning multiple AI bots. Allow the bots to answer known queries, assign tickets to the right team, and accelerate your response time.
     							 </div>
   							 </div>
  						</div>
  						<div className="accordion-item">
    						<h2 className="accordion-header" id="headingFour">
    						  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      							 Task Management Tool
     						 </button>
   							</h2>
   							 <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      							<div className="accordion-body">
	 								 Bring your team together to collaborate, plan, and organize all daily tasks. Increase productivity by simplifying work channels and track progress for maximum efficiency.
     							 </div>
   							 </div>
  						</div>
					</div>

				</div>
				</div>
					<div className="col-md-12 col-xl-6 order-2 text-center simplifyStyle-label">
						<img className="display-image-area img-fluid" src= {project} id="accordionTwoImage" alt="Project"/>
					</div>
				</div>
			</div>
			</div>
			

    );
};

export default Features;

