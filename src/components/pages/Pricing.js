import React from "react";
import bgRedLine from "../images/bgRedLine.png";
import available from "../images/pricing/available.png";
import unavailable from "../images/pricing/unavailable.png";

export const Pricing = () => {
  return (
    <div className="container-fluid">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-12">
          <div className="pricing">
            <div className=" d-flex flex-column align-items-center px-5">
              <h1 className="pricing-header text-header text-center ">
                Anydone Desk Pricing Plans
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="top row px-5 justify-content-center align-items-center">
        <div className="col">
          <table className="table table-bordered mb-5">
            <thead>
              <tr className="anydone-pricing-table">
                <th scope="col" className="service align-middle ">
                  <div className="text-quote  d-flex flex-column justify-content-center align-items-center">
                    <span className="text-center">Choose your plan</span>
                  </div>
                </th>
                <th scope="col" className="align-baseline">
                  <div className="d-flex flex-column">
                    <div className="row text-center">
                      <div className="col-12">
                        <h2 className="table-heading text-quote">Starter</h2>
                      </div>
                      <div className="col-12">
                        <span className="anydone-primary-color">
                          <sup className="service-price-text">$</sup>
                          <span className="text-uote">25</span>
                          <sub className="service-price-text">/ month</sub>
                        </span>
                      </div>
                      <div className="col-12">
                        <div className="d-flex flex-column align-items-center 	py-3 service-key-text">
                          <span>Includes 1 member</span>
                          <span>Additional $5/mo/member</span>
                          <span>Max 5 members</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1 text-center">
                      <a
                        className=" pbutton btn btn-primary cta-button-primary_rounded btn-pricing text-capitalize "
                        href="https://desk.anydone.com/register/company/starter"
                        target="_blank"
                      >
                        Try Now
                      </a>
                    </div>
                  </div>
                </th>
                <th scope="col" className="align-baseline">
                  <div className="d-flex flex-column">
                    <div className="row text-center">
                      <div className="col-12">
                        <h2 className="table-heading text-quote">Basic</h2>
                      </div>
                      <div className="col-12">
                        <span className="anydone-primary-color">
                          <sup className="service-price-text">$</sup>
                          <span className="text-uote">70</span>
                          <sub className="service-price-text">/ month</sub>
                        </span>
                      </div>
                      <div className="col-12">
                        <div className="d-flex flex-column align-items-center 	py-3 service-key-text">
                          <span>Includes 5 member</span>
                          <span>Additional $5/mo/member</span>
                          <span>Max 25 members</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1 text-center">
                      <a
                        className=" pbutton btn btn-primary cta-button-primary_rounded btn-pricing text-capitalize "
                        href="https://desk.anydone.com/register/company/starter"
                        target="_blank"
                      >
                        Try Now
                      </a>
                    </div>
                  </div>
                </th>
                <th
                  scope="col"
                  className="align-baseline"
                  style={{
                    "border-top": "25px solid #376af5",

                    "border-radius": "8px 8px 0 0",
                  }}
                >
                  <div className="d-flex flex-column">
                    <div className="row text-center">
                      <div className="col-12">
                        <h2 className="table-heading text-quote">Standard</h2>
                      </div>
                      <div className="col-12">
                        <span className="anydone-primary-color">
                          <sup className="service-price-text">$</sup>
                          <span className="text-uote">400</span>
                          <sub className="service-price-text">/ month</sub>
                        </span>
                      </div>
                      <div className="col-12">
                        <div className="d-flex flex-column align-items-center 	py-3 service-key-text">
                          <span>Includes 10 member</span>
                          <span>Additional $5/mo/member</span>
                          <span>Max 100 members</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1 text-center">
                      <a
                        className=" pbutton btn btn-primary cta-button-primary_rounded btn-pricing text-capitalize "
                        href="https://desk.anydone.com/register/company/starter"
                        target="_blank"
                      >
                        Try Now
                      </a>
                    </div>
                  </div>
                </th>

                <th
                  scope="col"
                  className="align-baseline"
                  style={{
                    "border-top": "25px solid #253ca6",

                    "border-radius": "8px 8px 0 0",
                  }}
                >
                  <div className="d-flex flex-column">
                    <div className="row text-center">
                      <div className="col-12">
                        <h2 className="table-heading text-quote">Enterprise</h2>
                      </div>
                      <div className="col-12">
                        <a
                          className=" arrowg btn cta-button-outline	cta-button-primary_rounded f-sm mb-5 mb-lg-0"
                          href="#"
                        >
                          Contact Us
                        </a>
                      </div>
                      <div className="col-12"></div>
                    </div>
                    <div className="gap flex-grow-1 text-center">
                      <a
                        className=" pbutton btn btn-primary cta-button-primary_rounded btn-pricing text-capitalize "
                        href="https://desk.anydone.com/register/company/starter"
                        target="_blank"
                      >
                        Try Now
                      </a>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
          </table>
          <table className="table table-bordered mb-5">
            <thead>
              <tr className="anydone-pricing-table">
                <th scope="col" className="align-middle service">
                  <span className="left">Free Trial</span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    1 Month
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    1 Month
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    1 Month
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    1 Month
                  </span>
                </th>
              </tr>
              <tr className="anydone-pricing-table">
                <th scope="col" className="align-middle service">
                  <span className="service-key-text">Projects</span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">1</span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">1</span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">3</span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    Unlimited
                  </span>
                </th>
              </tr>
            </thead>
          </table>
          <h1 className="service-value-text font-weight-bolder">
            Channel/Customer Conversation
          </h1>
          <table className="table table-bordered mb-5">
            <thead>
              <tr className="anydone-pricing-table">
                <th
                  scope="col"
                  className="align-middle service"
                >
                  <span className="service-key-text">Integrations</span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">1</span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">2</span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    Unlimited
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    Unlimited
                  </span>
                </th>
              </tr>
              <tr className="anydone-pricing-table">
                <th
                  scope="col"
                  className="align-middle service"
                >
                  <span className="service-key-text">Calls</span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
              </tr>
              <tr className="anydone-pricing-table">
                <th
                  scope="col"
                  className="align-middle service"
                >
                  <span className="service-key-text">Call Recording</span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={unavailable} alt="unavailable" />
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={unavailable} alt="unavailable" />
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
              </tr>
              <tr className="anydone-pricing-table">
                <th
                  scope="col"
                  className="align-middle service"
                >
                  <span className="service-key-text">
                    Real Time Collaboration
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
              </tr>
              <tr className="anydone-pricing-table">
                <th
                  scope="col"
                  className="align-middle service"
                >
                  <span className="service-key-text">Analytics Dashboard</span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    Basic
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    Basic
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    Advanced
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    Advanced
                  </span>
                </th>
              </tr>
            </thead>
          </table>
          <h1 className="service-value-text font-weight-bolder">Automation</h1>
          <table className="table table-bordered mb-5">
            <thead>
              <tr className="anydone-pricing-table">
                <th
                  scope="col"
                  className="align-middle service-table-head-background"
                >
                  <span className="service-key-text">Bots</span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">1</span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">2</span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    20
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    40
                  </span>
                </th>
              </tr>
              <tr className="anydone-pricing-table">
                <th
                  scope="col"
                  className="align-middle service-table-head-background"
                >
                  <span className="service-key-text">Fulfillment API</span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">1</span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">2</span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    10
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    50
                  </span>
                </th>
              </tr>
              <tr className="anydone-pricing-table">
                <th
                  scope="col"
                  className="align-middle service"
                >
                  <span className="service-key-text">Language</span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    One language
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    One language
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    Multi language
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    Multi language
                  </span>
                </th>
              </tr>
              <tr className="anydone-pricing-table">
                <th
                  scope="col"
                  className="align-middle service"
                >
                  <span className="service-key-text">Automated Replies</span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={unavailable} alt="unavailable" />
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
              </tr>
              <tr className="anydone-pricing-table">
                <th
                  scope="col"
                  className="align-middle service"
                >
                  <span className="service-key-text">
                    Auto Ticket Suggestion
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={unavailable} alt="unavailable" />
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={unavailable} alt="unavailable" />
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
              </tr>
            </thead>
          </table>
          <h1 className="service-value-text font-weight-bolder">Tickets</h1>
          <table className="table table-bordered mb-5">
            <thead>
              <tr className="anydone-pricing-table">
                <th
                  scope="col"
                  className="align-middle service"
                >
                  <span className="service-key-text">Ticket Management</span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
              </tr>
              <tr className="anydone-pricing-table">
                <th
                  scope="col"
                  className="align-middle service"
                >
                  <span className="service-key-text">
                    Real Time Collaboration
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
              </tr>
              <tr className="anydone-pricing-table">
                <th
                  scope="col"
                  className="align-middle service"
                >
                  <span className="service-key-text">Analytics Dashboard</span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    Basic
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    Basic
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    Advanced
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    Advanced
                  </span>
                </th>
              </tr>
            </thead>
          </table>
          <table className="table table-bordered mb-5">
            <thead>
              <tr className="anydone-pricing-table">
                <th
                  scope="col"
                  className="align-middle service"
                >
                  <span className="service-key-text">Team Inbox</span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
              </tr>

              <tr className="anydone-pricing-table">
                <th
                  scope="col"
                  className="align-middle service"
                >
                  <span className="service-key-text">API/SDK/Plugins</span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    <img src={available} alt="available" />
                  </span>
                </th>
              </tr>
              <tr className="anydone-pricing-table">
                <th
                  scope="col"
                  className="align-middle service-table-head-background"
                >
                  <span className="service-key-text">
                    Customer Support Desk{" "}
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    Email / Customer Support Desk
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    Email / Customer Support Desk
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    Phone and Email / Customer Support Desk
                  </span>
                </th>
                <th scope="col" className="align-middle text-center">
                  <span className="service-value-text font-weight-bold">
                    24 / 7 Phone and Email / Customer Support Desk
                  </span>
                </th>
              </tr>
            </thead>
          </table>
          <table className="table mb-5">
            <thead>
              <tr className="anydone-pricing-table">
                <th scope="col" className="align-middle border-0"></th>
                <th scope="col" className="align-middle text-center border-0">
                  <button
                    type="button"
                    className="pricing-button btn btn-primary text-capitalize"
                  >
                    Try Now
                  </button>
                </th>
                <th scope="col" className="align-middle text-center border-0">
                  <button
                    type="button"
                    className="pricing-button btn btn-primary text-capitalize"
                  >
                    Try Now
                  </button>
                </th>
                <th scope="col" className="align-middle text-center border-0">
                  <button
                    type="button"
                    className="pricing-button btn btn-primary text-capitalize"
                  >
                    Try Now
                  </button>
                </th>
                <th scope="col" className="align-middle text-center border-0">
                  <button
                    type="button"
                    className="pricing-button btn btn-primary text-capitalize"
                  >
                    Try Now
                  </button>
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <div className="row h-100 align-items-center justify-content-center ">
        <div className="col">
          <div className=" sidebar d-flex flex-column align-items-center px-md-5">
            <h1 className=" text-banner cta-area-top-label color-header1 bold	text-center	px-4">
              <b>Customers look for solutions, a rather permanent one.</b>
              <img src={bgRedLine} alt="bgRedLine" />
            </h1>
            <h1 className=" text-banner color-header1	text-center	mb-4">
              <b>
                Anydone Desk helps you build a conversational bridge to fill the
                gap.
              </b>
            </h1>

            <div className="pricing ">
              <a
                className=" arrowf back btn cta-button-primary	cta-button-primary_lg cta-button-primary_rounded_lg  text-uppercase f-sm mb-5 mb-lg-0"
                href="#"
              >
                Try Now
              </a>
              <a
                className=" arrowf btn cta-button-outline	cta-button-primary_rounded f-sm mb-5 mb-lg-0"
                href="#"
              >
                Watch Video
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
