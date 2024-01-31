import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../Api";
import logo from "../../assets/images/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [functionToggle, setFunctionToggle] = useState(false);
  const [OtpResponse, setOtpResponse] = useState("");
  // const [OtpInput, setOtpInput] = useState("");

  const otpFunction = () => {
    setToggle(true);
  };

  // this is login  schema

  const [loginData, setLoginData] = useState({
    phone: "",
  });

  const handleDataLogin = async () => {
    console.log("this is login func handleDataLogin");
    try {
      const response = await axios.post(`${BASE_URL}/login`, loginData);
      setOtpResponse(response.data.otp);
      alert(response.data.message);
      setFunctionToggle(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // otp function
  const otpVerify = async () => {
    console.log("this is login func otpVerify");
    const response = await axios.post(`${BASE_URL}/verify-login`, {
      phone: loginData.phone,
      otp: OtpResponse,
    });
    navigate("/");
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
          <h2 className="text-center my-2"> Login</h2>

          {/* phone number */}
          <div className=" w-[70%]  m-auto flex flex-col">
            <label className="font-semibold" htmlFor="Phone">
              Phone Number
            </label>
            <input
              className=" w-full m-2 h-12 text-xl p-2  border-solid border-[1px] rounded-lg outline-none border-gray-400 focus:border-[3px] focus:border-blue-600"
              type="text"
              required
              maxLength="10"
              onChange={(e) => {
                setLoginData({ ...setLoginData, phone: e.target.value });
              }}
            />
          </div>
          {toggle && (
            <div className=" w-[70%]  m-auto flex flex-col">
              <label className="font-semibold" htmlFor="Phone">
                Otp
              </label>
              <input
                required
                className=" w-full m-2 h-12 text-xl p-2  border-solid border-[1px] rounded-lg outline-none border-gray-400 focus:border-[3px] focus:border-blue-600"
                type="text"
                value={OtpResponse}
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
                onClick={handleDataLogin}
              >
                Login
              </button>
            ) : (
              <button className=" w-full h-12 text-white" onClick={otpVerify}>
                Login
              </button>
            )}
          </div>

          {/* other login */}
          <div className="flex flex-col w-[70%] my-2 m m-auto">
            <span
              className="cursor-pointer"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Do not have an account ? Sign Up Now
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
