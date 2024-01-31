import React from "react";
import image from "../../assets/images/image/image_1.png";
import { FaLocationDot } from "react-icons/fa6";

function Profile_Page() {
  return (
    <>
      <div className="container w-90% m-auto border-1 border-red-600 my-5">
        <div className="head flex border-1 border-blue-600 ">
          <div className="image w-[30%]">
            <img src={image} alt="profile_image" className="" />
          </div>
          <div className="info_div w-[70%]">
            <div className="first flex items-center gap-2">
              <div className="name_&_designation w-[33%]">
                <h3 className="capitalize mb-[4px]">jeremy rose</h3>
                <p className="capitalize text-[#0000FF] m-0">
                  production designer
                </p>
              </div>
              <div className="logo_&_city flex gap-1  w-[33%]">
                <FaLocationDot />
                <p className="capitalize text-[#acacac] m-0">new york, NY</p>
              </div>
              <div className="logo_&_bookmarks w-[33%]">
                <h3 className="capitalize mb-[4px]">jeremy rose</h3>
                <p className="capitalize text-[#0000FF]">production designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile_Page;
