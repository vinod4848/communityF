import React, { useState, useEffect } from "react";
import "../assets/style/job.scss";
import { IoSearch } from "react-icons/io5";
import { IoFilterCircleOutline } from "react-icons/io5";
import background from "../assets//images/job.jpg";
import axios from "axios";
import BASE_URL from "../Api";
import moment from "moment";
import Maps from "../assets/images/map-pin.svg";
import { useNavigate } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { BsCalendar4Event } from "react-icons/bs";
// import { TiDocumentText } from "react-icons/ti";
import { IoSearchCircle } from "react-icons/io5";
import { BsCardText } from "react-icons/bs";
import CompanyImage from "../assets/images/db87753a7685b0758792da046372c959.jpg";
function Job() {
  const navigate = useNavigate();
  const [jobpage, setJobPage] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/jobs`)
      .then((response) => {
        setJobPage(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="jobmainpage">
        <div className="job-section">
          <div className="search-contaner">
            <div className="search-form">
              <input type="text" class="search-input" placeholder="Search" />
              <IoSearchCircle className="search-bar-icons" />
            </div>
            <div className="recruiter-desbord">
              <button
                className="recruiter-button"
                onClick={() => {
                  navigate("/recrutierDasbord");
                }}
              >
                Recruiter dashboard
              </button>
            </div>
          </div>
          <div className="job-contaner flex">
            <div className="job-filter-section">
              <div className="job-filter-conater">
                <div className="job-filter-title">
                  <h5>All Filters</h5>
                </div>
                <h5 className="job-filter-title-text">Work mode</h5>
                <div>
                  <input type="checkbox" id="red" onclick="check()" />
                  <label htmlFor="red" className="job-lable-text">
                    {" "}
                    Work from office
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="blue" onclick="check()" />
                  <label htmlFor="blue" className="job-lable-text">
                    Remote
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="green" onclick="check()" />
                  <label htmlFor="green" className="job-lable-text">
                    Hybrid
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="purple" onclick="check()" />
                  <label htmlFor="purple" className="job-lable-text">
                    Temp. WFH due to covid
                  </label>
                </div>

                <h5 className="job-filter-title-text">Location</h5>
                <div>
                  <input type="checkbox" id="circle" onclick="check()" />
                  <label htmlFor="circle" className="job-lable-text">
                    Noida
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="circle" onclick="check()" />
                  <label htmlFor="circle" className="job-lable-text">
                    Greater Noida
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="square" onclick="check()" />
                  <label htmlFor="square" className="job-lable-text">
                    Mumbail
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="square" onclick="check()" />
                  <label htmlFor="square" className="job-lable-text">
                    Bengaluru
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="square" onclick="check()" />
                  <label htmlFor="square" className="job-lable-text">
                    Patna
                  </label>
                </div>
                <h5 className="job-filter-title-text">Department</h5>
                <div>
                  <input type="checkbox" id="square" onclick="check()" />
                  <label htmlFor="square" className="job-lable-text">
                    Engineering - Softw.
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="square" onclick="check()" />
                  <label htmlFor="square" className="job-lable-text">
                    UX, Design & Archit
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="square" onclick="check()" />
                  <label htmlFor="square" className="job-lable-text">
                    IT & Information Sec
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="square" onclick="check()" />
                  <label htmlFor="square" className="job-lable-text">
                    Other
                  </label>
                </div>
                <h5 className="job-filter-title-text">Salary</h5>
                <div>
                  <input type="checkbox" id="square" onclick="check()" />
                  <label htmlFor="square" className="job-lable-text">
                    3-6 Lakhs
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="square" onclick="check()" />
                  <label htmlFor="square" className="job-lable-text">
                    6-10 Lakhs
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="square" onclick="check()" />
                  <label htmlFor="square" className="job-lable-text">
                    10-15 Lakhs
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="square" onclick="check()" />
                  <label htmlFor="square" className="job-lable-text">
                    15-25 Lakhs
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="square" onclick="check()" />
                  <label htmlFor="square" className="job-lable-text">
                    20-30 Lakhs
                  </label>
                </div>
                <h5 className="job-filter-title-text">Company type</h5>
                <div>
                  <input type="checkbox" id="square" onclick="check()" />
                  <label htmlFor="square" className="job-lable-text">
                    Corporate
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="square" onclick="check()" />
                  <label htmlFor="square" className="job-lable-text">
                    Foreign MNC
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="square" onclick="check()" />
                  <label htmlFor="square" className="job-lable-text">
                    Indian MNC
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="square" onclick="check()" />
                  <label htmlFor="square" className="job-lable-text">
                    Startup
                  </label>
                </div>

                <h5 className="job-filter-title-text">Salary</h5>
                <div>
                  <input type="checkbox" id="square" onclick="check()" />
                  <label htmlFor="square" className="job-lable-text">
                    3-6 Lakhs
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="square" onclick="check()" />
                  <label htmlFor="square" className="job-lable-text">
                    6-10 Lakhs
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="square" onclick="check()" />
                  <label htmlFor="square" className="job-lable-text">
                    10-15 Lakhs
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="square" onclick="check()" />
                  <label htmlFor="square" className="job-lable-text">
                    15-25 Lakhs
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="square" onclick="check()" />
                  <label htmlFor="square" className="job-lable-text">
                    20-30 Lakhs
                  </label>
                </div>
              </div>
            </div>

            <div className="job-post-section">
              {jobpage.map((jobItems) => {
                return (
                  <>
                    <div
                      className="post_card"
                      key={jobItems._id}
                      onClick={() => {
                        navigate(`/jobdetails/${jobItems._id}`);
                      }}
                    >
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
                          {jobItems.location}
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
                        We are looking for a Front-End Web Developer who is
                        motivated to combin
                      </h6>
                      <div className="job-card-skil-item">
                        <span className="job-card-skil-text"> Ui/Ux</span>
                        <span className="job-card-skil-text">
                          Frontend Development
                        </span>
                        <span className="job-card-skil-text">
                          User InterfacesApi
                        </span>
                        <span className="job-card-skil-text">
                          IntegrationWordpress
                        </span>
                      </div>

                      {/* <a href="3">{jobItems.employmentType}</a> */}
                      <div className="apply flex">
                        <a href="#" className="job-card-post-date">
                          2 Days Ago
                        </a>
                        {/* <a href="#" className="apply-button">
                          Apply Now
                        </a> */}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="job-ads-section">
              <div className="job-ads-content">
                <img src={CompanyImage} alt="CompanyImage" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Job;
