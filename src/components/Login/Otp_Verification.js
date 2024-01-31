import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Otp_Verification(props) {
  // function handleOtp(e) {
  //   const input = e.target;
  //   let value = input.value;
  //   let isValidInput = value.match(/[0-9a-z]/gi);
  //   input.value = "";
  //   input.value = isValidInput ? value[0] : "";
  //   let fieldIndex = input.dataset.index;
  //   if (fieldIndex < inputs.current.length - 1 && isValidInput) {
  //     inputs.current[fieldIndex + 1].focus();
  //   }
  //   if (e.key === "Backspace" && fieldIndex > 0) {
  //     inputs.current[fieldIndex - 1].focus();
  //   }
  //   if (fieldIndex === inputs.current.length - 1 && isValidInput) {
  //     submit();
  //   }
  // }

  // function handleOnPasteOtp(e) {
  //   const data = e.clipboardData.getData("text");
  //   const value = data.split("");
  //   if (value.length === inputs.current.length) {
  //     inputs.current.forEach((input, index) => (input.value = value[index]));
  //     submit();
  //   }
  // }

  // function submit() {
  //   console.log("Submitting...");
  //   let otp = "";
  //   inputs.current.forEach((input) => {
  //     otp += input.value;
  //     input.disabled = true;
  //     input.classList.add("disabled");
  //   });
  //   console.log(otp);
  //   // Call your API here with the OTP value
  // }
  return (
    <div className="border-1 border-red-500 w-[50%] m-auto flex flex-col justify-center items-center p-4 my-5">
      <h1 class="text-4xl ">Enter OTP</h1>
      <div class="flex otp-field">
        {[...Array(4)].map((_, index) => (
          <input
            key={index}
            // ref={(el) => (inputs.current[index] = el)}
            type="text"
            maxLength="1"
            className="w-10 h-10 text-2xl bg-gray-800 border-2 border-gray-700 rounded-md px-4 mr-2 focus:border-purple-500 focus:outline-none"
          />
        ))}
      </div>
    </div>
  );
}

export default Otp_Verification;

{
  /* <div className="border-1 border-red-500 w-[50%] m-auto flex flex-col justify-center items-center p-4 my-5">
<h1 class="text-4xl ">Enter OTP</h1>
<div class="flex otp-field">
<input
type="text"
maxlength="1"
class="w-10 h-10 text-2xl bg-gray-800 border-2 border-gray-700 rounded-md px-4 mr-2 focus:border-purple-500 focus:outline-none"
/>
<input
type="text"
maxlength="1"
class="w-10 h-10 text-2xl bg-gray-800 border-2 border-gray-700 rounded-md px-4 mr-2 focus:border-purple-500 focus:outline-none"
/>
<input
type="text"
maxlength="1"
class="w-10 h-10 text-2xl bg-gray-800 border-2 border-gray-700 rounded-md px-4 mr-2 space focus:border-purple-500 focus:outline-none"
/>
<input
type="text"
maxlength="1"
class="w-10 h-10 text-2xl bg-gray-800 border-2 border-gray-700 rounded-md px-4 mr-2 focus:border-purple-500 focus:outline-none"
/>
</div>
</div> */
}
