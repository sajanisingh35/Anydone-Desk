import React from "react";
import homepage from '../images/homepage.png';
import arrow from '../images/arrow.png';
import proactiveSolutions from '../images/proactiveSolutions.png';
import simplifyWork from '../images/simplifyWork.png';
import saveTime from '../images/saveTime.png';
import Header from '../layouts/Header';
import bgRedLine from '../images/bgRedLine.png';
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';



const Home = () => {
return(
	
		<div>
			<Header/>
        <div className="container-fluid h-150">
				<div className="homepage">
					 <img src= {homepage}  alt='homepage'/>
				</div>
				<div className="row h-100 align-items-center justify-content-center align-items-lg-start"> 
				<div className="col-md-12 col-lg-7 order-1 ">
					<div className="d-flex flex-column align-items-lg-start px-2 px-md-4  ">
				<p className="text-title color-header1 mb-1 mb-md-5 "><b>Proactive Solutions</b> </p>
				  </div>
				<div className="proactive-quote-label d-flex flex-column  align-items-center align-items-lg-start
            		px-9 px-md-6">
						<p className="text-quote mb-4  text-lg-left"><b>"Wouldn't it be <span className="color"><b>AWESOME</b></span> if your problems were<br/> Solved before you even realize they existed.</b>
						</p>
						<p className=" paragraph mb-4 text-desc-sm font-weight color-description text-center text-lg-left home-subtext ">										
								
								Interactively address known customer support issues, resolve, and update flutter even before your customers reach you.
							</p>
							<a className=" arrow btn cta-button-outline	cta-button-primary_rounded f-sm mb-5 mb-lg-0" href="features.html">Learn more<span><img src= {arrow}  alt='arrow'/></span>
						</a>
				</div>			
				</div>
				<div className="col-md-12 col-lg-4 order-2 text-center">
				<img className="proactive" src= {proactiveSolutions} alt='proactiveSolutions'/>
					</div>	
	         </div>
			 <div className="row h-100 align-items-center justify-content-center">
				 <div className="col-md-12 col-lg-4 order-2 order-lg-1 text-center">
				 <img className="simplify" src= {simplifyWork}  alt='simplifyWork'/>
				 </div>
				 <div className="col-md-12 col-lg-7 order-1 order-lg-2">
					 <div className="d-flex flex-column align-items-center align-items-lg-start px-2 px-md-4">
						<h1 className="text-title color-header mb-1 mb-md-5">
							<b>Simplify Work</b>
						</h1>
					 </div>
					 <div className="simply-quote-label d-flex flex-column  align-items-center align-items-lg-start px-9 px-md-6">
						<p className="text-quote mb-3 text-center text-lg-left simplify-quote-label">
             			<b> "Satisfying every customer can be challenging. But, with "<span className="color"><b>Anydone Desk</b></span>, we help you break that ice.</b>
            			</p>
						<p className=" paragraph1 mb-4 text-desc-sm font-weight color-description	text-center text-lg-left home-subtext">
								
								Let the AI-powered bots handle conversational and personalized
								customer support while your agents can focus on quality service.
							</p>
							<a className=" arrow btn cta-button-outline	cta-button-primary_rounded f-sm mb-5 mb-lg-0" href="features.html">Learn more<span><img src= {arrow}  alt='arrow'/></span>
						</a>
						</div>
				 </div>
			 </div> 

			 <div className="row mt-10 h-100 align-items-center justify-content-center">
			 	<div className="col-md-12 col-lg-7 order-1">
				 <div className="d-flex flex-column align-items-center align-items-lg-start px-2 px-md-4">
				 <h1 className="text-title color-header mb-2 mb-md-6">
							<b>Save Time</b>
						</h1>
				</div>
				

				<div className="d-flex	flex-column	align-items-center align-items-lg-start	px-8 px-md-5">
					<p className="text-quote-save mb-2 font-weight text-center text-lg-left save-time-quote-label">
            			 <b> "Highly responsive and" <span className="dolor"><b>ERRORLESS</b></span> customer service at your fingertips.</b>
            	    </p>
					<p className=" paragraph mb-4 text-desc-sm font-weight  color-description  text-center text-lg-left   home-subtext">
						Give your customers the gift of time and prompt support with real-time solution bots (answer bots and resolution bots).
					</p>
					<a className=" arrow btn cta-button-outline	cta-button-primary_rounded f-sm mb-5 mb-lg-0" href="features.html">Learn more<span><img src= {arrow}  alt='arrow'/></span>
					</a>
				</div>				
			</div>
        
	    	<div className="col-md-12 col-lg-4 order-2 text-center">
			 <img className="saveTime" src= {saveTime}  alt='saveTime'/>
		</div>
		</div>

			<div className="row h-100 align-items-center justify-content-center">
				<div className="col" >
					<div className=" sidebar d-flex flex-column align-items-center px-md-5">
					<h1 className=" text-banner cta-area-top-label color-header1 bold	text-center	px-4 										">
								<b>Customers look for solutions, a rather permanent one.</b>
								<img className="bgRedLine" src={bgRedLine} alt="bgRedLine"/>
					</h1>
							<h1 className=" text-banner color-header1	text-center	mb-4">
								<b>Anydone Desk helps you build a conversational
								bridge to fill the gap.</b>
							</h1>
							
							<div className="pricing" >
							<a className=" arrowf back btn cta-button-primary	cta-button-primary_lg cta-button-primary_rounded_lg  text-uppercase f-sm mb-5 mb-lg-0" href="#">
								Try Now
							</a>
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


export default Home;