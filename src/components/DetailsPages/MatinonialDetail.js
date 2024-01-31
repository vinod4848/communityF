import React, { useEffect, useState } from "react";
import "../../assets/style/all_Detail_page/matimonial-details.scss";
import profile from "../../assets/images/Matrimoniya.jpg";
import BASE_URL from "../../Api";
import { IoLocation } from "react-icons/io5";
import { MdColorLens } from "react-icons/md";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { LuPersonStanding } from "react-icons/lu";
import { MdOutlineCall } from "react-icons/md";
import { GiMusicalNotes } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { BiSolidDrink } from "react-icons/bi";
import { GiTomato } from "react-icons/gi";
import { GrRestroomWomen } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { FaPersonFalling } from "react-icons/fa6";
import { FaWalking } from "react-icons/fa";
import swiperimage5 from "../../assets/images/Matrimoniya.jpg";

function MatinonialDetail() {
  const [matrimonialdetail, setMatrimonaildetail] = useState({});
  const [age, setAge] = useState(null);

  const { matimonialId } = useParams();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/matrimonial/profiles/${matimonialId}`)
      .then((response) => {
        const birthYear = new Date(
          response.data.profileId.dateOfBirth
        ).getFullYear();
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;
        setAge(age);
        setMatrimonaildetail(response.data);
        console.log(response.data, "matrimonial");
      })
      .catch((error) => console.log(error));
  }, [matimonialId]);

  return (
    <>
      <div className="matimonail-detail-page">
        <div className="matimonial-contaner flex">
          <section className="matimonail-profile-section">
            {matrimonialdetail && <img src={matrimonialdetail.images} alt="" />}
          </section>
          <section className="matimonail-content-section">
            {matrimonialdetail && (
              <>
                <div className="matimonial-detail-list">
                  <div className="matimonila_details-content">
                    <h5>
                      {matrimonialdetail.profileId?.firstName}
                      <span style={{ marginLeft: "8px" }}>
                        {matrimonialdetail.profileId?.lastName}
                      </span>
                    </h5>
                    <div className="detail-pages-flexbox">
                      <div className="left-detail">
                        <h6>
                          {age}yrs
                          <span>|{matrimonialdetail.height}ht</span>
                        </h6>
                        <h6>
                          {matrimonialdetail.religiousBackground?.community}
                          <span>
                            {" "}
                            ,
                            {
                              matrimonialdetail.religiousBackground
                                ?.subCommunity
                            }
                          </span>
                        </h6>
                        <h6>
                          {matrimonialdetail.religiousBackground?.motherTongue}
                        </h6>

                        <h6>
                          {
                            matrimonialdetail.educationAndCareer
                              ?.highestQualification
                          }
                          <span style={{ marginLeft: "8px" }}>
                            {
                              matrimonialdetail.educationAndCareer
                                ?.collegeAttended
                            }
                          </span>
                        </h6>
                      </div>
                      <div className="right-detail-page">
                        <h6>{matrimonialdetail.maritalStatus}</h6>
                        <h6>
                          {matrimonialdetail.locationOfGroom?.stateLivingIn}
                          <>
                            ,
                            <span>
                              {matrimonialdetail.locationOfGroom?.cityLivingIn}
                            </span>
                          </>
                        </h6>
                        <h6>Doesn't wish to specify her income</h6>
                        <h6>
                          {matrimonialdetail.partnerPreferences?.profession && (
                            <>
                              {/* <RiCalendarEventFill /> */}
                              {matrimonialdetail.partnerPreferences.profession}
                            </>
                          )}
                        </h6>
                      </div>
                    </div>
                    {/* <h6>
                      <MdAttachMoney />
                      {matimonialItems.income}rs
                    </h6> */}
                  </div>

                  <div className="matrimonail-connect-page">
                    <div className="connect-div">
                      <div className="like-content">
                        <p>like this Profile?</p>
                        {/* <img src={check} alt=" check" className="check" /> */}
                        <FaHeart className="check" />
                        <p>Conncet Now</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            <div className="matrimonail-detail-about-main-page">
              <div className="matrimonial-detail-list-page">
                <h6 className="matrimonail-detail-titls">Detailed Profile</h6>
                <div className="about-us">
                  <div className="flexbox">
                    <LuPersonStanding className="matrimodial-text-icon" />
                    <h5 className="text-about-title">About Adarsh M</h5>
                  </div>
                  <div style={{ marginLeft: "45px" }}>
                    <p>
                      I have pursued my Masters in Law. I've been an active
                      student throughout my academic years. Post my academics, I
                      work as a Lawyer. My dreams and aspirations constantly
                      drive me toward success. I expect my life partner to hold
                      similar values and would wish that the person stands by me
                      through thick and thin. Thank you very much for your time!
                    </p>
                  </div>

                  <div className="flexbox">
                    <MdColorLens className="matrimodial-text-icon" />
                    <h5 className="text-about-title">Hobbies & Interests</h5>
                  </div>
                  <div className="flexbox hobbi">
                    <a href="#" className=" hobbi-icon">
                      <FaPersonFalling />
                      Dancing
                    </a>
                    <a href="#" className=" hobbi-icon">
                      <GiMusicalNotes />
                      Music
                    </a>

                    <a href="#" className=" hobbi-icon">
                      <FaWalking />
                      Walking
                    </a>
                    <a href="#" className=" hobbi-icon">
                      Pets
                    </a>
                  </div>
                  <div className="flexbox">
                    <MdOutlineCall className="matrimodial-text-icon" />
                    <h5 className="text-about-title">Contact Details</h5>
                  </div>

                  <div className="matrimonial-contact-detail flex">
                    <div className="checkonly">
                      <span className="span-tab">
                        <MdOutlineCall />
                      </span>
                      <span>
                        {" "}
                        Contact Number :<span> 7267058044</span>
                        <br></br>
                      </span>
                    </div>
                    <div className="checkonly">
                      <span className="span-tab">
                        <MdOutlineEmail />
                      </span>
                      <span>
                        {" "}
                        Email Id :<span> adarshmauryas@gmail.com</span>
                        <br></br>
                      </span>
                    </div>
                  </div>
                  <div className="flexbox">
                    <BiSolidDrink className="matrimodial-text-icon" />
                    <h5 className="text-about-title">Lifestyle</h5>
                  </div>

                  <div className="matrimonial-contact-veggiteren flex">
                    <div className="matrimonial-contact-veggiteren-icon">
                      <GiTomato className="matrimodial-text-icon" />
                      <p className="vegetrain-text">Vegetarian</p>
                    </div>
                  </div>
                  <div className="flexbox">
                    <MdColorLens className="matrimodial-text-icon" />
                    <h5 className="text-about-title">Background</h5>
                  </div>
                  <div className=" background-icon ">
                    <a href="#" className=" ">
                      <GiMusicalNotes className="background-item-icon" />
                      {matrimonialdetail.religiousBackground?.community}
                      <span>
                        {" "}
                        ,{matrimonialdetail.religiousBackground?.subCommunity}
                      </span>
                    </a>
                    <a href="#" className=" ">
                      <GrRestroomWomen className="background-item-icon" />
                      {matrimonialdetail.religiousBackground?.motherTongue}
                    </a>

                    <a href="#" className="">
                      <IoLocation className="background-item-icon" />
                      {matrimonialdetail.locationOfGroom?.stateLivingIn}
                      <>
                        ,
                        <span>
                          {matrimonialdetail.locationOfGroom?.cityLivingIn}
                        </span>
                      </>
                    </a>
                  </div>
                  <div className="flexbox">
                    <FaHome className="matrimodial-text-icon" />
                    <h5 className="text-about-title">Family Details</h5>
                  </div>

                  <p style={{ marginLeft: "45px" }}>
                    {matrimonialdetail.moreAboutYourselfPartnerAndFamily}
                  </p>
                  <div className="flexbox">
                    <MdColorLens className="matrimodial-text-icon" />
                    <h5 className="text-about-title">Education & Career</h5>
                  </div>
                  <div className=" background-icon ">
                    <a href="#" className=" ">
                      <GiMusicalNotes className="background-item-icon" />
                      {
                        matrimonialdetail?.educationAndCareer
                          ?.highestQualification
                      }
                    </a>
                    <a href="#" className=" ">
                      <GrRestroomWomen className="background-item-icon" />
                      Law
                    </a>

                    <a href="#" className="">
                      <IoLocation className="background-item-icon" />
                      {matrimonialdetail.partnerPreferences?.profession}
                    </a>
                    <a href="#" className="">
                      <IoLocation className="background-item-icon" />
                      Earns INR{" "}
                      {matrimonialdetail?.educationAndCareer?.annualIncome} Lakh
                      to 10 Lakh annually
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="matimonail-ads-section">
            <img src={swiperimage5} alt="" />
          </section>
        </div>
      </div>
    </>
  );
}

export default MatinonialDetail;
