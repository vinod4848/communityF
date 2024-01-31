import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../Api";
import logo from "../../assets/images/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [functionToggle, setFunctionToggle] = useState(false);
  const [OtpResponse, setOtpResponse] = useState({ otp: "" });

  // this is for signup
  const [signUpData, setSignUpData] = useState({
    relationship: "",
    membershipId: "",
    phone: "",
  });

  const otpFunction = () => {
    if (
      signUpData.membershipId &&
      signUpData.phone &&
      signUpData.relationship !== null
    ) {
      console.warn(toggle, "toggle:false");
      setToggle(true);
      console.warn(toggle, "toggle:true");
    } else {
      return;
    }
  };
  console.log(toggle);
  const handleDataSignup = async () => {
    console.warn("function call");
    try {
      const response = await axios.post(`${BASE_URL}/signup`, signUpData);
      setOtpResponse({ ...setOtpResponse, otp: response.data.otp });
      setFunctionToggle(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSignupNavigate = () => {
    navigate("/login");
  };
  return (
    <div className="w-full my-3 ">
      <div className="w-[80%] m-auto  ">
        <div className="w-[80%] m-auto  flex justify-center items-center">
          <img src={logo} alt="img" />
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="w-[40%] m-auto  my-3 shadow-2xl py-2"
        >
          <h2 className="text-center my-2">Sign Up</h2>

          {/* membershipId id */}

          <div className=" w-[70%]  m-auto flex flex-col">
            <label className="font-semibold" htmlFor="Phone">
              membershipId Id
            </label>
            <input
              className=" w-full m-2 h-12 text-xl p-2  border-solid border-[1px] rounded-lg outline-none border-gray-400 focus:border-[3px] focus:border-blue-600"
              type="text"
              required
              onChange={(e) =>
                setSignUpData({ ...signUpData, membershipId: e.target.value })
              }
            />
          </div>

          {/* relationship */}

          <div className=" w-[70%]  m-auto flex flex-col">
            <label className="font-semibold" htmlFor="Phone">
              relationship
            </label>

            <select
              required
              onChange={(e) =>
                setSignUpData({ ...signUpData, relationship: e.target.value })
              }
              className=" w-full m-2 h-12 text-xl p-2  border-solid border-[1px] rounded-lg outline-none border-gray-400 focus:border-[3px] focus:border-blue-600"
            >
              <option value="Father">Father</option>
              <option value="Mother">Mother</option>
              <option value="Daughter">Daughter</option>
              <option value="Son">Son</option>
              <option value="other">other</option>
            </select>
          </div>

          {/* phone number */}
          <div className=" w-[70%]  m-auto flex flex-col">
            <label className="font-semibold" htmlFor="Phone">
              Phone Number
            </label>
            <input
              className=" w-full m-2 h-12 text-xl p-2  border-solid border-[1px] rounded-lg outline-none border-gray-400 focus:border-[3px] focus:border-blue-600"
              type="text"
              maxLength="10"
              required
              onChange={(e) => {
                setSignUpData({ ...signUpData, phone: e.target.value });
              }}
            />
          </div>
          {toggle && (
            <div className=" w-[70%]  m-auto flex flex-col">
              <label className="font-semibold" htmlFor="Phone">
                Otp
              </label>
              <input
                className=" w-full m-2 h-12 text-xl p-2  border-solid border-[1px] rounded-lg outline-none border-gray-400 focus:border-[3px] focus:border-blue-600"
                type="text"
                value={OtpResponse.otp}
              />
            </div>
          )}

          <div
            className="w-[50%] bg-[#1387bd] my-2  m-auto"
            onClick={otpFunction}
          >
            {!functionToggle ? (
              <button
                className=" w-full h-12 text-white "
                onClick={!toggle ? handleDataSignup : null}
              >
                Sign Up
              </button>
            ) : (
              <button
                className=" w-full h-12 text-white "
                onClick={handleSignupNavigate}
              >
                Sign Up
              </button>
            )}
          </div>

          {/* other login */}
          <div className="flex flex-col w-[70%] my-2 m m-auto">
            <span
              className="cursor-pointer"
              onClick={() => {
                navigate("/login");
              }}
            >
              Already Registered? Sign In Now
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
