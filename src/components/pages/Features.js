import React from 'react';
import Embrace from '../images/features/Embrace.png';
import performance from '../images/features/performance.gif';
import project from '../images/features/project.gif';
import proactive from '../images/features/proactive.gif';



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
				<a className=" arrowf back btn cta-button-primary	cta-button-primary_lg cta-button-primary_rounded_lg  text-uppercase f-sm mb-5 mb-lg-0" href="#">
								Try Now
				</a>
				<a className=" arrowf btn cta-button-outline	cta-button-primary_rounded f-sm mb-5 mb-lg-0"  href="#">Watch Video
				</a>
				</div>
				</div>
				
			
				</div>
				<div className="col-md-12 col-lg-5	order-2	text-center	pr-5 top-image-blob backg">
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
						<h1 className="accordion-header  color-header pb-5 proactive-features-accordion-label">
							Proactive Features
						</h1>	

  							<div className="accordion-card">
  							 
    						  <a className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       							 Performance Insights
      						  </a>
                        
   							 <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
     						 <div className="accordion-body">
	 							 Use AI-driven data to improve your customer service. Browse
								through Anydone Desk Analytics to get an overview of your
								team’s and bot’s performance, results, and client’s
								historical data.
     					 	</div>
    					 	</div>
 					 		</div>
  							<div className="accordion-card">
    						
     							 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      					  			Activity Log
      							</button>
   						
   						 		<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
   						   			<div className="accordion-body">
							  		Improve employee time management, productivity, and maximize
									efforts on action plans to salvage a customer situation with
									proper insights from the activity log.
     					 		</div>
  						  		</div>
  							</div>
  							<div className="accordion-card">
   	   				 		 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
   					  			 Contact Managements
   					   		</button>
  
   				   			 <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
     						 <div className="accordion-body">
	 						 Apply Anydone Desk's fully integrated contact-centric
							 database to track, manage, and automate activities based on
							 communication linked to active and slipping away contacts.
     				 		</div>
    						</div>
 							</div>
 							<div className="accordion-card">
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
				
						<div className="container-fluid h-100">
						<div className="row h-100 align-items-center justify-content-center">
					
						<div className="col-md-12 col-xl-6 order-1">
						<div className="d-flex flex-column px-2 px-md-5 accordion" id="accordionTwo">
							<h1 className="accordion-header color-header pb-5 simplify-work-accordion-label">
								Simplify Works
							</h1>
  							<div className="accordion-card">
  								 
     								 <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
     								  Project Planning
      								</button>
   							
    								<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
     								 <div className="accordion-body">
	 									 Streamline your projects using Anydone Desk to plan, manage, and track progress. Keep your team in the loop for project progress without using tedious traditional procedures.
    								 </div>
   									</div>
  								</div>
 							<div className="accordion-card">
   									 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      								  Contribute Collaborate
     								 </button>
    						
    							<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
     						 	<div className="accordion-body">
								  Collaborate using private notes in ticket threads, manage multiple emails in one place, create automated assignment rules, and contribute to an existing project to form a smart workflow.
     						 	</div>
   							 	</div>
  							</div>
  							<div className="accordion-card">
    							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
     							 Multiple Bots
     							 </button>
    							
   								 <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
     							 <div className="accordion-body">
								 Automate repetitive tasks by creating and assigning multiple AI bots. Allow the bots to answer known queries, assign tickets to the right team, and accelerate your response time.
     							 </div>
   							 	 </div>
  							</div>
  							<div className="accordion-card">
       						  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      							 Task Management Tool
     						 </button>
   						
   							 <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      							<div className="accordion-body">
	 								 Bring your team together to collaborate, plan, and organize all daily tasks. Increase productivity by simplifying work channels and track progress for maximum efficiency.
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

			<div className="container-fluid h-100">
				<div className="row h-100 align-items-center justify-content-center">
					<div className="col-md-12 col-xl-6 order-2 order-xl-1 text-center" id="accordionOneSvg">
					<img src= {proactive} className="display-image-area img-fluid" id="accordionOneImage" alt="Proactive Accordion Image"/>
					</div>
					<div className="col-md-12 col-xl-6 order-1 order-xl-2">
						<div className="d-flex flex-column accordion" id="accordionOne">
						<h1 className=" accordion-header color-header pb-5 proactive-features-accordion-label">
							Save Time
						</h1>	
  							<div className="accordion-card">
    				
      							<div className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="true" aria-controls="collapseNine">
       							 Resolution Bots
     							 </div>
   							
   								 <div id="collapseNine" className="accordion-collapse collapse show" aria-labelledby="headingNine" >
     								 <div className="accordion-body">
	 									 Use the extra set of hands to eliminate wait times to handle low-priority tickets. Our bots are easy to set up and stay on duty 24/7 with their smart Automated Replies.
      								</div>
    							</div>
 						    </div>
 							 <div className="accordion-card">
   								
      							<a className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
      								 Multilingual
     							 </a>
   							
    							<div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" >
    						  	<div className="accordion-body">
								  Improve employee time management, productivity, and maximize efforts on action plans to salvage a customer situation with proper insights from the activity log.
     						 	</div>
   								 </div>
 							 </div>
  							<div className="accordion-card">
   								 
      							<a className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
       								Audio/Video Assistance
     							 </a>
    							
    							<div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" >
      							<div className="accordion-body">
	 							 Apply Anydone Desk's fully integrated contact-centric database to track, manage, and automate activities based on communication linked to active and slipping away contacts.
    							  </div>
    							</div>
 								 </div>
								  <div className="accordion-card">
   								
      							<a className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
								 On Call Drawing
     							 </a>
    							
    							<div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" >
      							<div className="accordion-body">
	 							 Improve employee time management, productivity, and maximize efforts on action plans to salvage a customer situation with proper insights from the activity log.
    							  </div>
    							</div>
 								 </div>
								  <div className="accordion-card">
   								
      							<a className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
								 App  Integration
     							 </a>
    						
    							<div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen" >
      							<div className="accordion-body">
								  Improve employee time management, productivity, and maximize efforts on action plans to salvage a customer situation with proper insights from the activity log.
    							  </div>
    							</div>
 								 </div>
							


					</div>
				</div>


					</div>
				</div>
				<div className='part'>
				<div className="row h-100 align-items-center justify-content-center">
				<div className="col" >
					<div className=" sidebara d-flex flex-column align-items-center px-md-5">
					<h1 className=" text-banner cta-area-top-label color-header1 bold	text-center	px-4">
								<b>Experience Anydone Desk's instant and powerful bots to handle your customer support</b>
					</h1>
							
							<div className="pricing" >
							<a className=" arrowf back btn cta-button-primary	cta-button-primary_lg cta-button-primary_rounded_lg  text-uppercase f-sm mb-5 mb-lg-0" 
										
										href="#">Try Now</a>
   

   										<a className=" arrowf btn cta-button-outline	cta-button-primary_rounded f-sm mb-5 mb-lg-0"  href="#">Watch Video
										</a>
										</div>
										
					</div>

				</div>
			</div>
			</div>
			
			
			</div>
			

    );
};

export default Features;

