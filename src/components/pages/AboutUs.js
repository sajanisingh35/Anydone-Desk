import React from "react";
import ashok from '../images/boss/ashok.png';
import dipak from '../images/boss/dipak.png';
import yakov from '../images/boss/yakov.png';

const AboutUs = ()=> {
    return(
        <div className="about">
            <div className="container-fluid">
				<div className="row align-items-center justify-content-center mb-4 mb-lg-5 pt-5">
					<h1 className="text-header1 font-weight-bolder">About Us</h1>
				</div>
				<div className="aboutus row h-100 px-2 px-lg-5 justify-content-center">
					<div className="col-11 col-sm-9 col-lg-4">
						<p className="color-header font-weight-bolder about-us-title">
							So it all started with a bad customer service experience.
						</p>
					</div>
					<div className="col-12 col-lg-8">
						<div className="color-description about-us-desc	text-justify font-weight-bold">
							We’ve all been there, right? We, as end users have spent a
							significant amount of time in mind numbing phone calls with
							support agents for minor issues - and we’ve experienced the
							discomfort of explaining the same situation to their ever changing
							agents. And the process never ends.
						</div>
					</div>
					<div className="col-12 pt-4 pt-lg-5">
						<div className="color-description about-us-desc text-justify font-weight-bold">
							We desperately needed to work this out! There had to be a faster,
							simpler, and more enjoyable way businesses handle their customer
							support. To take on this challenge, we created a team of
							passionate problem-solvers with expertise in artificial
							intelligence and machine learning.
						</div>
					</div>
					<div className="col-12 pt-4 pt-lg-5">
						<div className="
								color-description
								about-us-desc
								text-justify
								font-weight-bold
							">
							We did our homework, and to eliminate the distasteful customer
							support experience, we created Anydone Desk– an AI powered bot
							system that learns your customer’s pain points, prioritizes their
							issues, and promptly gets the right team to solve the problem.
						</div>
					</div>
				</div>
			</div>
           
			<div className="container-fluid">
				<div className="row h-100 px-0 px-md-5">
					<div className="col-12">
						<div className="about-us-area d-flex flex-column justify-content-center	align-items-center">
							<h1 className="pb-2 pb-md-4 text-header1 text-center"><b>Our Mission</b></h1>
							<p className="text-header-desc">
								<b>No matter how technically advanced the world may have become,
								there still seems to be a huge gap between the customers and
								their service providers. It is to eliminate those problems, we
								have come up with a permanent solution. Anydone Desk aspires to
								provide its customers with top-notch customer service with the
								latest AI tools that ensure high customer satisfaction and
								retention rate.</b>
							</p>
						</div>
					</div>
				</div>
			</div>

         
			<div class="container-fluid">
				<div class="row align-items-center justify-content-center mb-3 mb-md-5">
					<h1 class="text-header font-weight-bolder color-header">Our Team</h1>
				</div>
				<div className="row h-100 align-items-center justify-content-center">
					<div className="col-xl-4 px-5 mb-4">
						<div className="d-flex flex-column align-items-center">
							<img className="img-team img-fluid mb-3" src= {yakov} alt="Yakov Mermelstein"/>
							<p className="text-quote font-weight-bold text-center">
								Yakov Mermelstein
							</p>
							<p className="
									list-text-desc
									color-description
									font-weight-bold
									text-center
								">
								C.E.O
							</p>
						</div>
					</div>
					<div className="col-xl-4 px-5 mb-4">
						<div className="d-flex flex-column align-items-center">
							<img className="img-team img-fluid mb-3" src= {dipak} alt="Dipak Malla"/>
							<p className="text-quote font-weight-bold text-center">Dipak Malla</p>
							<p className="
									list-text-desc
									color-description
									font-weight-bold
									text-center
								">
								Managing Director
							</p>
						</div>
					</div>
					<div className="col-xl-4 px-5 mb-4">
						<div className="d-flex flex-column align-items-center">
							<img className="img-team img-fluid mb-3" src= {ashok}  alt="Ashok Kumar Pant"/>
							<p className="text-quote font-weight-bold text-center">
								Ashok Kumar Pant
							</p>
							<p className="
									list-text-desc
									color-description
									font-weight-bold
									text-center
								">
								C.T.O
							</p>
						</div>
					</div>
				</div>
			</div>
            <div className="row h-100 align-items-center justify-content-center">
				<div className="col" >
					<div className=" sidebar d-flex flex-column align-items-center px-md-5">
					<h1 className=" text-banner cta-area-top-label color-header	text-center	px-4">
                    Your journey to a better customer relation begins here!
					</h1>
							<div className="pricing-btn-group" >
								<a className=" button
									btn btn-primary cta-button-primary_rounded
										cta-button-primary_lg cta-button-primary_rounded_lg
										text-uppercase
										mb-0 mb-sm-0
										mt-2 pl-20
									" href="#">Try Now</a>

								<a className="button1
										btn btn-outline-primary
										btn-primary-rounded_lg
										text-uppercase
										mb-0 mb-sm-0
										mt-2 pl-40 pr-20" 
                                        href="#" data-mdb-ripple-color="dark" onclick="openVideo()">Watch Video</a>
										</div>
										
					</div>

				</div>

			</div>
	
        </div>

    );
}   

export default AboutUs;

