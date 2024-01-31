import React, { useState, useEffect } from "react";
// import background from "../assets/images/cardbackground.jpg";
import backgrounds from "../assets/images/cardbackground.jpg";
import Jobsss from "../assets/images/job.jpg";
import Love from "../assets/images/sadi.webp";
import Events from "../assets/images/events.jpg";
import "../assets/style/home.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Maps from "../assets/images/map-pin.svg";
import Matimonal from "../assets/images/Cardimage.png";
import Events1 from "../assets/images/Event1.png";
import Events2 from "../assets/images/pexels-viresh-studio-1444442.jpg";
import Event4 from "../assets/images/Matrimoniya.jpg";
import Saddi from "../assets/images/sadi.webp";
import axios from "axios";
import BASE_URL from "../Api";
import { FaLocationDot } from "react-icons/fa6";
import moment from "moment";
import { MdDateRange } from "react-icons/md";

import { Link, useNavigate } from "react-router-dom";

function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 755 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 450, min: 0 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 450, min: 0 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 450, min: 0 },
      items: 2,
    },
  };
  const [upcomingData, setUpcomingData] = useState([]);
  const [jobdetails, setJobDetails] = useState([]);
  const [matrimonial, setMatrimonial] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${BASE_URL}/events`)
      .then((response) => {
        setUpcomingData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/jobs`)
      .then((response) => {
        setJobDetails(response.data);
        // console.log(response.data, "job data");
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/matrimonial/profiles`)
      .then((response) => {
        setMatrimonial(response.data);
        // console.log(response.data, "matrimonail");
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <>
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={10000}>
              <img src={Events2} className="d-block " alt="background" />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="textTitle">Events</h5>
                {/* <p className="textColor">
                  ome people will be happy to subscribe simply because they
                  appreciate your venue. Your goal, however, should be to
                  collect as many contacts as possible: The more numbers you
                  have, the more effective and profitable your texts become.
                </p> */}
              </div>
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img src={Event4} className="d-block " alt="efef" />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="textTitle">Second slide label</h5>
                <p className="textColor">
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Saddi} className="d-block " alt="ewfe" />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="textTitle">Matrimony</h5>
                {/* <p className="textColor">
                  The biggest and most trusted matrimony service for Indians!
                </p> */}
              </div>
            </div>
            {/* <div className="carousel-item">
              <img src={Events} className="d-block w-100" alt="ewfe" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Four slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div> */}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <section className="Upcoming">
          <div className="containers">
            <div className="UpcomingTitle">
              <h2>Upcoming Events </h2>
              <span
                className="see_All_pages"
                onClick={() => {
                  navigate("/upcomingPages");
                }}
              >
                See All
              </span>
            </div>

            <div className="Upcoming_CardMain">
              <Carousel
                responsive={responsive}
                additionalTransfrom={-20}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className="Upcoming_CarouselList"
                // containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={true}
                infinite={false}
                itemClass="itemsList"
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
              >
                {upcomingData.map((item) => {
                  const titleParts = item.title.split("", 42);
                  const addressParts = item.address.split("", 50);
                  if (titleParts.length === 42) {
                    titleParts.pop();
                    titleParts.push("....");
                  }

                  if (addressParts.length === 50) {
                    addressParts.pop();
                    addressParts.push("....");
                  }
                  return (
                    <div
                      className="Upcoming_card"
                      key={item.id}
                      onClick={() => {
                        navigate(`/details/${item._id}`);
                      }}
                    >
                      <div
                        className="Upcoming_card-bodys"
                        style={{ backgroundImage: `url(${item.image})` }}
                      ></div>
                      <div className="upComingCardDetais">
                        <p className="UpcomingTitle">{titleParts.join("")}</p>

                        {/* <h5 className="UpcomingTitle"></h5> */}
                        <div className="location">
                          <p className="textLocation">
                            <FaLocationDot className=" home-detail-icon" />
                            {addressParts.join("")}
                          </p>
                        </div>
                        <p className="event-home-date">
                          <MdDateRange className="home-detail-icon" />
                          {moment().format(
                            " Do MMMM   YYYY ,dddd LT ",
                            item.date
                          )}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </section>

        <section className="Jobs">
          <div className="containers">
            <div className="JobTileTitle">
              <h2>Jobs Nearby You </h2>
              <span
                className="see_All_pages"
                onClick={() => {
                  navigate("/jobpage");
                }}
              >
                See All
              </span>
            </div>

            <div className="Job_cardMain">
              <Carousel
                responsive={responsive}
                additionalTransfrom={-20}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className="Upcoming_CarouselList"
                // containerClass="container"
                dotListClass="dotListClass"
                draggable
                focusOnSelect={false}
                infinite={false}
                itemClass="itemsList"
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
              >
                {jobdetails.map((jobItem) => {
                  return (
                    <div
                      className=" jobcard "
                      key={jobItem.id}
                      onClick={() => {
                        navigate(`/jobdetails/${jobItem._id}`);
                      }}
                    >
                      <div className="card-bodys">
                        <div className="joblogo">
                          <div className="companylogo">{jobItem.company}</div>
                          <div className="postdate">
                            <p>
                              Post:
                              {moment().format("MMM Do YY", jobItem.createdAt)}
                            </p>
                          </div>
                        </div>
                        <p className="postTitleName">{jobItem.title}</p>
                        {/* <p className="postTitleName">Google</p> */}

                        <div className=" Joblocation">
                          <div className="mapflexbox">
                            <div style={{ width: "60%", fontSize: "12px" }}>
                              <img src={Maps} alt=" " />
                              {jobItem.location}
                            </div>
                            <div style={{ width: "30%", fontSize: "14px" }}>
                              Salar:
                              {jobItem.salary}
                            </div>
                          </div>
                        </div>
                        <div className="jobType">
                          <button className="Fulltime">
                            {jobItem.employmentType}
                          </button>
                          {/* <button className="Hybrid">Hybrid</button> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </section>

        {/* Metimonial Section */}
        <section className="Metimonial">
          <div className="containers">
            <div className="JobTileTitle">
              <h2>Matrimony Service with Millions of Success Stories</h2>
              <span
                className="see_All_pages"
                onClick={() => {
                  navigate("/matimonial");
                }}
              >
                See All
              </span>
            </div>

            <div className="Metimonial_CardMain">
              <Carousel
                responsive={responsive}
                additionalTransfrom={-20}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className="Upcoming_CarouselList"
                // containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={false}
                itemClass="itemsList"
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
              >
                {matrimonial.map((matrimonialItems) => {
                  return (
                    <div className=" matrimony_card " key={matrimonialItems.id}>
                      <div className="matrimony_card-bodys">
                        <img
                          src={matrimonialItems.image}
                          alt=""
                          className="matrimony_card-bodys-img"
                        />

                        <div className="matrimony-home-flexbox">
                          <button className="matrimony_button">
                            {matrimonialItems.profession}
                          </button>

                          <button className="matrimony_button">
                            <img src={Maps} alt=" " />
                            {matrimonialItems.nativePlace}
                          </button>
                        </div>
                      </div>
                      <div className="matrimony_person">
                        <p className="matrimony_name">
                          {matrimonialItems.firstName}
                        </p>
                        <p className="matrimony_age">Age:25yrs</p>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </section>
      </>
    </>
  );
}

export default Home;
