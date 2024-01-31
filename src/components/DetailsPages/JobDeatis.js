import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../../Api";
import moment from "moment";
import Maps from "../../assets/images/map-pin.svg";
import { useParams } from "react-router-dom";
import "../../assets/style/all_Detail_page/jobdetail.scss";
import { IoLocationOutline } from "react-icons/io5";
import { BsCalendar4Event } from "react-icons/bs";
import { BsCardText } from "react-icons/bs";

function JobDeatis() {
  const [jobpage, setJobPage] = useState({});
  const { jobsId } = useParams();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/jobs/${jobsId}`)
      .then((response) => {
        setJobPage(response.data);
        console.log(response.data, "data");
      })
      .catch((error) => console.log(error));
  }, [jobsId]);

  return (
    <>
      <div className="job-detail-section">
        <div className="contaner">
          {jobpage && (
            <>
              <div className="job_detail-card " key={jobpage._id}>
                <div className="job-main-page-logo">
                  <h5 className="job-card-title-text">
                    {/* {jobItems.title} */}
                    Front End Developer
                  </h5>

                  <h5 className="job-companylogo">
                    {" "}
                    Xtended Space Technology Private Limited
                  </h5>

                  {/* <div className="postd">
                          <p>
                            <span style={{ color: "black", fontWeight: "500" }}>
                              {" "}
                              Post Date:
                            </span>

                            {moment().format("lll", jobItems.createdAt)}
                          </p>
                        </div> */}
                </div>
                <div className="job-card-titile-description">
                  <span className="job-card-small-texts">
                    <BsCalendar4Event /> 1-3 Yrs
                  </span>
                  |
                  <span className="job-card-small-texts">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-currency-rupee"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                    </svg>
                    3-5 Lacs PA
                  </span>
                  |
                  <span className="job-card-small-texts">
                    <IoLocationOutline />
                    {jobpage.location}
                  </span>
                </div>
                <h6 className="job-card-small-text">
                  <BsCardText
                    style={{
                      fontSize: "16px",
                      outline: "none",
                      border: "none",
                      marginRight: "10px",
                    }}
                  />
                  We are looking for a Front-End Web Developer who is motivated
                  to combin
                </h6>
                <div className="job-card-skil-item">
                  <span className="job-card-skil-text"> Ui/Ux</span>
                  <span className="job-card-skil-text">
                    Frontend Development
                  </span>
                  <span className="job-card-skil-text">User InterfacesApi</span>
                  <span className="job-card-skil-text">
                    IntegrationWordpress
                  </span>
                </div>

                {/* <a href="3">{jobItems.employmentType}</a> */}
                <div className="apply flex">
                  <a href="#" className="job-card-post-date">
                    2 Days Ago
                  </a>
                  <a href="#" className="apply-buttonaa">
                    Apply Now
                  </a>
                </div>
              </div>
              <div className="discription">
                <h6 className="job-detail-description-title">
                  Job Description
                </h6>
                <h6 className="job-detail-description-title">
                  Who we are looking for :
                </h6>
                <p className="job-detail-description-text">
                  We are looking for a developer, with at least 2 years of
                  experience on back-end and/or front-end technologies (MEAN or
                  MERN Stack).
                  {jobpage.description}
                </p>
                <h6 className="job-detail-description-title">About us</h6>
                <p className="job-detail-description-text">
                  Lynkit is a technology product company and we specialize in
                  digitally transforming supply chains using deep tech like IoT,
                  blockchain, AI, machine learning, OCR, AR and process
                  automation. To read more about Lynkit, go to www.lynkit.in.
                  Lynkit is an award winning startup, with notable recognitions
                  including the National Startup Award 2022, Startup of the Year
                  Award by Entrepreneur India, Best Company by Internet 2.0 at
                  Dubai Expo'22, Entrepreneurial Excellence Award from TiE and
                  Lumis Partners and the Leadership Excellence Award from
                  Economic Times.
                  {jobpage.description}
                </p>
                <p className="job-detail-description-title">
                  Role:
                  <span className="job-detail-description-text">
                    UI / UX - Other
                  </span>
                </p>
                <p className="job-detail-description-title">
                  Industry Type:
                  <span className="job-detail-description-text">
                    Courier / Logistics (Logistics Tech)
                  </span>
                </p>
                <p className="job-detail-description-title">
                  Department:
                  <span className="job-detail-description-text">
                    UX, Design & Architecture
                  </span>
                </p>
                <p className="job-detail-description-title">
                  Employment Type:
                  <span className="job-detail-description-text">
                    Full Time, Permanent
                  </span>
                </p>
                <p className="job-detail-description-title">
                  Role Category:
                  <span className="job-detail-description-text">UI / UX</span>
                </p>
                <p className="job-detail-description-title">
                  Education :
                  <span className="job-detail-description-text">
                    B.Tech/B.E. in Information Technology
                  </span>
                </p>
                <div className="job-detail-skil-item">
                  <p className="job-detail-description-title">
                    Key Skills:
                    <span className="job-detail-description-text">
                      Skills highlighted with ‘‘ are preferred keyskills
                    </span>
                  </p>
                  <div className="job-detail-skil-card">
                    <a href="#" className="job-detail-skils">
                      Frontend Development
                    </a>
                    <a href="#" className="job-detail-skils">
                      User Interfaces
                    </a>
                    <a href="#" className="job-detail-skils">
                      Api Integration
                    </a>
                    <a href="#" className="job-detail-skils">
                      Wordpress Development
                    </a>
                    <a href="#" className="job-detail-skils">
                      UI Development
                    </a>
                    <a href="#" className="job-detail-skils">
                      Web Markup
                    </a>
                    <a href="#" className="job-detail-skils">
                      React.Js
                    </a>
                    <a href="#" className="job-detail-skils">
                      JQuer
                    </a>
                  </div>
                </div>

                {/* <p>{jobpage.description}</p>
                <p>{jobpage.educationLevel}</p>
                <p>{jobpage.experienceLevel}</p>
                <p>{jobpage.location}</p>
                <p>{jobpage.qualifications}</p>
                <p>{jobpage.responsibilities}</p>
                <p>{jobpage.salary}</p> */}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default JobDeatis;
