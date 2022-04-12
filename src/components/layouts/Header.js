import React from "react";


const Header = () => {
return(

<div className=" heading p-5 text-center bg-light">
  
    <header className="masthead d-flex">
			<div className="container-fluid h-100 my-auto">
				<div className="row h-100 align-items-center justify-content-center">
					<div className="col">
						<div className="d-flex flex-column align-items-center px-3 px-md-5	pt-5 pt-lg-0">
                            <div className="hello px-2 px-md-2 pt-2 pt-lg-0">
                                <p className="text-header text-header-md text-center font-weight-bold">
               				        Deliver Exceptional Customer Service <br/>with Anydone Desk
	 						    </p>
                                 
								 <p className=" paragraph mb-4 text-desc-sm font-weight color-description text-center text-lg-left home-subtext ">		
								        Offer a delightful conversational support that is immediate and
 							            friendly. Exceed your <br/>customer’s expectation with Anydone Desk's AI powered support system.
							    </p>
								<div className="pricing-btn-group" >
								<a className=" arrowf back btn cta-button-primary	cta-button-primary_lg cta-button-primary_rounded_lg  text-uppercase f-sm mb-5 mb-lg-0" 
										
									 href="#">Try Now</a>

								{/* <a className="button1
										btn btn-outline-primary
										btn-primary-rounded_lg
										text-uppercase
										mb-0 mb-sm-0
										mt-2 pl-40 pr-20" 
                                        href="#" data-mdb-ripple-color="dark" onclick="openVideo()">Watch Video</a> */}
										<a className=" arrowf btn cta-button-outline	cta-button-primary_rounded f-sm mb-5 mb-lg-0"  href="#">Watch Video
										</a>
										</div>
										</div>
							</div>
							</div>
                            </div>
                            </div>
                           
        </header>
    </div>

);
}


export default Header;