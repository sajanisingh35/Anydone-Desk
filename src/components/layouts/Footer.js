 import React from "react";
 import anydonelogo from '../images/anydonelogo.png';
 import facebook from '../images/facebook.png';
 import instagram from '../images/instagram.png';
 import twitter from '../images/twitter.png';
 import linkedin from '../images/linkedin.png';
const Footer = () => {
    return(
        <div className="container-fluid">
            <div className="row px-2 px-lg-5">
                <div className="col-lg-3 col-md-12 mb-sm-4 text-center text-lg-left">
                <img src= {anydonelogo}  alt='anydonelogo'/>
                <p className="color-description pt-2 text-center pr-4">
                     Ready to serve customers. Anywhere, Anytime! 
                </p>
                </div>
                <div className="col-6 col-lg-2 col-md-4">
                <div className="d-flex justify-content-start justify-content-md-around">
                <ul className="pl-0 pl-md-4">
 								<p className="footer-title">Usability</p>
                                
 								<a className="list" href="solutions/education.html">Education</a><br/>
 						        <a  className="list" href="solutions/software-and-it.html">Software and IT</a><br/>
 								<a  className="list" href="solutions/telecommunications.html">Telecommunications</a><br/>
 								<a className="list"  href="solutions/financial-institutions.html">Financial Institutions</a><br/>
 								<a className="list" href="solutions/government.html">Government</a><br/>
 								<a className="list" href="solutions/health-care.html">Health Care</a><br/>
 								<a className="list" href="solutions/manufacturing.html">Manufacturing</a><br/>
 								<a className="list" href="solutions/media.html">Media</a><br/>
 								<a className="list" href="solutions/retail.html">Retail</a><br/>
                                
 							</ul> 
                </div>
            </div>
            <div className="col-6 col-lg-2 col-md-4">
						<div className="d-flex justify-content-start justify-content-md-around">
							<ul className="pl-0 pl-md-4">
								<p className="footer-title">Company</p>
									<a className="list" href="about-us.html">About Us</a><br/>
									<a className="list" href="company/v1/privacy-policy.html">Privacy Policy</a><br/>
									<a className="list" href="company/v1/terms-of-service.html">Terms of Service</a><br/>
									<a className="list" href="blogs/blogs.html">Blogs</a><br/>
									<a className="list" href="company/career.html">Career</a><br/>
									<a className="list" href="company/contact-us.html">Contact Us</a><br/>
							</ul>
						</div>
					</div>
                    <div className="col-6 col-lg-2 col-md-4">
						<div className="d-flex justify-content-start justify-content-md-around">
							<ul className="pl-0 pl-md-4">
								<p className="footer-title">Product</p>
								<a className="list" href="features.html">Features</a><br/>
								<a className="list" href="pricing.html">Pricing</a><br/>
								                     
							</ul>
						</div>
					</div>
					
				<div className="col-6 col-lg-3">
					<div className="d-flex flex-column align-items-lg-center justify-content-md-center pl-md-4">
						<div className="d-flex mb-3">
							<span className="footer-title">Connect with Anydone Desk</span>
						</div>
						<div className="row">
							<div className="col-md-12">
							<div className="row mb-3 mb-md-4 icon-arrangement ml-2 ml-lg-0">
								
										<div className="left d-flex flex-row flex-lg-column align-items-center">
											<a className="mr-md-2" href="https://www.facebook.com/anydone.us" target="_blank">
												<img className="img-fluid mb-3 mr-2 mr-md-1"src= {facebook}  alt="Facebook"/>
											</a>
											<a className="mr-md-2" href="https://twitter.com/AnydoneUs" target="_blank">
												<img className="img-fluid mb-3 mr-2 mr-md-1" src= {twitter} alt="Twitter"/>
											</a>
										</div>
										<div className="right d-flex flex-row flex-lg-column align-items-center">
											<a className="mr-md-2" href="https://www.instagram.com/anydone.us/" target="_blank">
												<img className="img-fluid mb-3 mr-2 mr-md-1" src= {instagram} alt="Instagram"/>
											</a>
											<a className="mr-md-2" href="https://www.linkedin.com/company/anydone/" target="_blank">
												<img className="img-fluid mb-3 mr-sm-2 mr-md-1" src= {linkedin} alt="LinkedIn"/>
											</a>
										</div>
										
									</div>

							</div>
						</div>
					</div>


				</div>
				<div className="copyright text-center text-white fixed-bottom ">
					<div className="text-center p-3">©2021 Anydone Desk. All Rights Reserved .
	
					</div>
			</div>
				
        </div >

        </div>
		

		
    );

}
      
       
			
export default Footer;

