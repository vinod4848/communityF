import React, { useEffect, useState } from "react";
import "../assets/style/matimonial.scss";
import { IoLocation } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
import swiperimage5 from "../assets/images/Matrimoniya.jpg";
import { Pagination } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../Api";
function Matimonial() {
  const [mationoladata, setMatrimonialData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${BASE_URL}/matrimonial/profiles`)
      .then((response) => {
        setMatrimonialData(response.data);
        console.log(response.data, "matrimonail");
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="job-sections">
        <div className="contanerssss flex">
          <div className="filter-section ">
            <>
              <h5>Marital Status</h5>
              <div>
                <input type="checkbox" id="red" onclick="check()" />
                <label htmlFor="red" className="lable-check-box">
                  {" "}
                  Never Married
                </label>
              </div>
              <div>
                <input type="checkbox" id="blue" onclick="check()" />
                <label htmlFor="blue" className="lable-check-box">
                  Divorced
                </label>
              </div>
              <div>
                <input type="checkbox" id="green" onclick="check()" />
                <label htmlFor="green" className="lable-check-box">
                  Awaiting Divor
                </label>
              </div>
              <div>
                <input type="checkbox" id="purple" onclick="check()" />
                <label htmlFor="purple" className="lable-check-box">
                  Annulled
                </label>
              </div>
              All
              <h5> Religions</h5>
              <div>
                <input type="checkbox" id="circle" onclick="check()" />
                <label htmlFor="circle" className="lable-check-box">
                  All
                </label>
              </div>
              <div>
                <input type="checkbox" id="circle" onclick="check()" />
                <label htmlFor="circle" className="lable-check-box">
                  Hindu
                </label>
              </div>
              <div>
                <input type="checkbox" id="square" onclick="check()" />
                <label htmlFor="square" className="lable-check-box">
                  Jain
                </label>
              </div>
              <div>
                <input type="checkbox" id="square" onclick="check()" />
                <label htmlFor="square" className="lable-check-box">
                  No Religion
                </label>
              </div>
              <div>
                <input type="checkbox" id="square" onclick="check()" />
                <label htmlFor="square" className="lable-check-box">
                  Sikh
                </label>
              </div>
              <h5>Working With</h5>
              <div>
                <input type="checkbox" id="square" onclick="check()" />
                <label htmlFor="square" className="lable-check-box">
                  Business / Sel...
                </label>
              </div>
              <div>
                <input type="checkbox" id="square" onclick="check()" />
                <label htmlFor="square" className="lable-check-box">
                  Non Working
                </label>
              </div>
              <div>
                <input type="checkbox" id="square" onclick="check()" />
                <label htmlFor="square" className="lable-check-box">
                  Government / P...
                </label>
              </div>
              <div>
                <input type="checkbox" id="square" onclick="check()" />
                <label htmlFor="square" className="lable-check-box">
                  Private Compan..
                </label>
              </div>
              <h5>Education Level</h5>
              <div>
                <input type="checkbox" id="square" onclick="check()" />
                <label htmlFor="square" className="lable-check-box">
                  Bachelor
                </label>
              </div>
              <div>
                <input type="checkbox" id="square" onclick="check()" />
                <label htmlFor="square" className="lable-check-box">
                  Master
                </label>
              </div>
              <div>
                <input type="checkbox" id="square" onclick="check()" />
                <label htmlFor="square" className="lable-check-box">
                  Honours
                </label>
              </div>
              <div>
                <input type="checkbox" id="square" onclick="check()" />
                <label htmlFor="square" className="lable-check-box">
                  Diploma
                </label>
              </div>
              <div>
                <input type="checkbox" id="square" onclick="check()" />
                <label htmlFor="square" className="lable-check-box">
                  High school
                </label>
              </div>
              {/* <div className="right">
                <div id="shapes" className="wrap">
                  <div id="no-results">No filter results.</div>
                  <div className="object circle red" />
                  <div className="object square blue" />
                  <div className="object circle blue" />
                  <div className="object square green" />
                  <div className="object circle green" />
                  <div className="object square blue" />
                  <div className="object square purple" />
                  <div className="object square red" />
                </div>
              </div> */}
            </>
          </div>
          <div className="matinmonial_content">
            <h5 className="matinmonial_content-title">
              Members that match your Partner Preferences
            </h5>
            {mationoladata.map((matimonialItems) => {
              const birthYear = new Date(
                matimonialItems.profileId.dateOfBirth
              ).getFullYear();
              const currentYear = new Date().getFullYear();
              const age = currentYear - birthYear;

              const aboutMe = matimonialItems.aboutMe.split("", 100);
              if (aboutMe.lenght == 100) {
                aboutMe.pop();
                aboutMe.push("....");
              }
              console.log(matimonialItems, "matrimonial list");
              return (
                <div
                  className="matimonial_list"
                  key={matimonialItems._id}
                  onClick={() => {
                    navigate(`/matimonial-profile/${matimonialItems._id}`);
                  }}
                >
                  <img src={matimonialItems.images} alt="" />

                  <div className="matimonila_details">
                    <h5>{matimonialItems.profileId.firstName}</h5>
                    <div className="detail-flexbox">
                      <div className="left-detail">
                        <h6>
                          {age}yrs
                          <span>|{matimonialItems.height}ht</span>
                        </h6>
                        {/* <h6>
                          <IoLocation />
                          Pune
                        </h6> */}
                        <h6>
                          {matimonialItems.religiousBackground.community}
                          <span>
                            {" "}
                            ,{matimonialItems.religiousBackground.subCommunity}
                          </span>
                        </h6>
                        <h6>
                          {matimonialItems.religiousBackground.motherTongue}
                        </h6>
                      </div>
                      <div className="right-detail">
                        <h6>{matimonialItems.maritalStatus}</h6>
                        <h6>
                          {matimonialItems.locationOfGroom.stateLivingIn}
                          <>
                            ,
                            <span>
                              {matimonialItems.locationOfGroom.cityLivingIn}
                            </span>
                          </>
                        </h6>
                        <h6>
                          {matimonialItems.partnerPreferences?.profession && (
                            <>
                              {/* <RiCalendarEventFill /> */}
                              {matimonialItems.partnerPreferences.profession}
                            </>
                          )}
                        </h6>
                      </div>
                    </div>

                    {/* <h6>
                      <MdAttachMoney />
                      {matimonialItems.income}rs
                    </h6> */}
                    <p className="Mationial-about-us">
                      {aboutMe.join("")}
                      <a href="#">...More</a>
                    </p>
                  </div>

                  <div className="like_close">
                    <div className="like">
                      <div className="like-content">
                        <p>like this Profile?</p>
                        {/* <img src={check} alt=" check" className="check" /> */}
                        <FaHeart className="check" />
                        <p>Conncet Now</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* <div className="slidrimage">
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide className="swipermain">
                  <img src={swiperimage} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={swiperimage2} />
                  Slide 2
                </SwiperSlide>
                <SwiperSlide>
                  <img src={swiperimage3} />
                  Slide 3
                </SwiperSlide>
                <SwiperSlide>
                  <img src={swiperimage4} />
                  Slide 4
                </SwiperSlide>
                <SwiperSlide>
                  <img src={swiperimage5} />
                  Slide 5
                </SwiperSlide>
                <SwiperSlide>
                  <img src={swiperimage6} />
                  Slide 6
                </SwiperSlide>
                <SwiperSlide>
                  <img src={swiperimage7} />
                  Slide 7
                </SwiperSlide>
              </Swiper>
            </div> */}
          </div>
          <div className="ads">
            <img src={swiperimage5} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Matimonial;
