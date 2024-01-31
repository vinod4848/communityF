// this is simple search

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Directory from "./components/Directory";

function Directory_Simple_Search() {
  const navigate = useNavigate();
  // if false  == simple search
  // if true == advance search
  const [toggled, setValue] = useState(false);

  return (
    <>
      {toggled === false && (
        <div className="font-sans my-5 w-full">
          <div className="head py-10 px-16 bg-gray-600">
            <h3 className=" text-uppercase text-white font-medium tracking-normal">
              find a member
            </h3>
          </div>
          <div className="info w-[90%]  m-auto">
            <div className="h4_text py-2">
              <h6>locate a BNI member in any of our chapter worldwide</h6>
            </div>
            <div className="btn_input w-[85%] max-sm:w-full">
              <div className="btn_section">
                <button className="simp_btn capitalize bg-[#E5E4E2] font-light  px-6 py-3 max-sm:w-[50%]">
                  simple search
                </button>
                <button
                  className="adv_btn capitalize text-white bg-[#1387bd] font-light px-6 py-3 max-sm:w-[50%]"
                  onClick={() => {
                    setValue(true);
                  }}
                >
                  advance search
                </button>
              </div>
              <form className="input_section bg-[#E5E4E2] w-[75%] max-sm:w-full flex flex-wrap  gap-3 px-3 py-7">
                <input
                  className="border-2 border-gray-500 w-[42rem] py-[0.375rem] px-[0.625rem]"
                  type="text"
                  placeholder="Please enter a keyword"
                />
                <button
                  type="submit"
                  className="bg-[#1387bd] font-light text-white capitalize px-4 py-2 rounded-3xl"
                  onClick={() => {
                    navigate(`/directory`);
                  }}
                >
                  search
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {toggled === true && (
        <div className="font-sans my-5 w-full">
          <div className="head py-10 px-16 bg-gray-600">
            <h3 className=" text-uppercase text-white font-medium tracking-normal">
              find a member
            </h3>
          </div>
          <div className="info w-[90%] m-auto  text-[16px] font-normal">
            <div className="h4_text py-2">
              <h6>locate a BNI member in any of our chapter worldwide</h6>
            </div>
            {/* 1387bd     E5E4E2*/}
            <div className="btn_input text-[16px] max-sm:text-[14px] font-medium">
              <div className="btn_section">
                <button
                  className="simp_btn capitalize text-white bg-[#1387bd] font-light  px-6 py-3 max-sm:w-[50%]"
                  onClick={() => {
                    setValue(false);
                  }}
                >
                  simple search
                </button>
                <button className="adv_btn capitalize text-black bg-[#E5E4E2] font-light px-6 py-3 max-sm:w-[50%]">
                  advance search
                </button>
              </div>
              {/* bg-[#E5E4E2] */}
              <form className="input_section grid grid-cols-3 max-sm:grid-cols-1 gap-3  bg-[#E5E4E2]  w-full  px-4 py-7 text-[12px] font-normal">
                <div className="section_tag max-sm:flex max-sm:flex-col max-sm:gap-1 justify-center">
                  <div className="form_row_section flex flex-col gap-2  max-sm:w-[90%] max-sm:m-auto">
                    <label htmlFor="" className="label_1 uppercase">
                      community area
                    </label>
                    <select
                      value=""
                      name=""
                      className="w-[90%] p-1 rounded-3xl"
                    ></select>
                  </div>
                  <div className="form_row_section flex flex-col gap-2 max-sm:w-[90%] max-sm:m-auto">
                    <label htmlFor="" className="label_1 uppercase">
                      city
                    </label>
                    <select
                      value=""
                      name=""
                      className="w-[90%] p-1 rounded-3xl"
                    ></select>
                  </div>
                  <div className="form_row_section flex flex-col gap-2 max-sm:w-[90%] max-sm:m-auto">
                    <label htmlFor="" className="label_1 uppercase">
                      area
                    </label>
                    <select
                      value=""
                      name=""
                      className="w-[90%] p-1 rounded-3xl"
                    ></select>
                  </div>
                </div>
                <div className="input_tag_1 max-sm:flex max-sm:flex-col max-sm:gap-1 justify-center">
                  <div className="child_1 flex flex-col gap-2 max-sm:w-[90%] max-sm:m-auto">
                    <label htmlFor="" className="label_3 uppercase">
                      first name
                    </label>
                    <input
                      type="text"
                      className="input_1 p-1  max-sm:w-[90%]"
                    />
                  </div>
                  <div className="child_2 flex flex-col gap-2 max-sm:w-[90%] max-sm:m-auto">
                    <label htmlFor="" className="label_3 uppercase">
                      last name
                    </label>
                    <input
                      type="text"
                      className="input_1 p-1  max-sm:w-[90%]"
                    />
                  </div>
                </div>
                <div className="input_tag_2 max-sm:flex max-sm:flex-col max-sm:gap-1 justify-center">
                  <div className="child_2_1 flex flex-col gap-2 max-sm:w-[90%] max-sm:m-auto">
                    <label htmlFor="" className="label_3 uppercase">
                      keywords
                    </label>
                    <input
                      type="text"
                      className="input_2 p-1  max-sm:w-[90%]"
                    />
                  </div>
                  <div className="child_2_2 flex flex-col gap-2 max-sm:w-[90%] max-sm:m-auto">
                    <label htmlFor="" className="label_3 uppercase">
                      company
                    </label>
                    <input
                      type="text"
                      className="input_2 p-1  max-sm:w-[90%]"
                    />
                  </div>
                </div>
                <div className="btn_tag  max-sm:w-[90%] max-sm:m-auto text-[16px]">
                  <button className="bg-[#1387bd] font-light text-white capitalize px-4 py-2 rounded-3xl ">
                    search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Directory_Simple_Search;
