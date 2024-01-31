import React from "react";

function Mobile() {
  return (
    <>
      <div className="main_container Roboto text-[#002f34]">
        <div className="heading my-[1.25rem]">
          <h2 className="text-center uppercase font-bold text-[1.5rem]">
            post your ad
          </h2>
        </div>
        <div className="contain border-1 border-red-500 mx-[12.813rem]">
          <div className="first_div ">
            <div className="my-4 px-4">
              <h3 className="uppercase font-bold text-[1.25rem]">
                select category
              </h3>
            </div>
            <div className="flex gap-2 text-[0.75rem] text-[#002f34] cursor-pointer px-4 pb-4">
              <span className="capitalize font-normal ">mobiles</span>
              <span className="capitalize font-normal ">/</span>
              <span className="capitalize font-normal ">mobiles phones</span>
              <span className="capitalize font-bold text-[0.875rem]  underline hover:no-underline">
                change
              </span>
            </div>
          </div>
        </div>
        <div className="container_2  border-1 border-green-500 mx-[12.813rem]">
          <div className="parent w-[50%] border-1 border-blue-500 p-8">
            <div className="heading ">
              <h3 className="uppercase font-bold text-[1.25rem] mb-[1rem]">
                include some details
              </h3>
            </div>
            <div className="details">
              <div className="child_info_1 flex flex-col mb-[1.75rem]">
                <span className="name capitalize">brand *</span>
                <select
                  name=""
                  id=""
                  value=""
                  className="border-1 border-[#2f4f4f] hover:border-[#002f34] h-[2.813rem] rounded"
                >
                  <option value=""> --- Select the option ---</option>
                  <option className="capitalize font-bold" value="">
                    Popular Brand
                  </option>
                  <option className="" value="">
                    iPhone{" "}
                  </option>
                  <option className="" value="">
                    Samsung
                  </option>
                  <option className="" value="">
                    Mi
                  </option>
                  <option className="" value="">
                    Vivo
                  </option>
                  <option className="" value="">
                    Oppo
                  </option>
                  <option className="" value="">
                    Realme
                  </option>
                  <option className="capitalize font-bold" value="">
                    All Brand
                  </option>
                  <option className="" value="">
                    Asus
                  </option>
                  <option className="" value="">
                    BlackBerry
                  </option>
                  <option className="" value="">
                    Gionee
                  </option>
                  <option className="" value="">
                    Google Pixel
                  </option>
                  <option className="" value="">
                    Honor
                  </option>
                  <option className="" value="">
                    HTC
                  </option>
                  <option className="" value="">
                    Huawei
                  </option>
                  <option className="" value="">
                    Infinix
                  </option>
                  <option className="" value="">
                    Intex
                  </option>
                  <option className="" value="">
                    iPhone
                  </option>
                  <option className="" value="">
                    Karbonn
                  </option>
                  <option className="" value="">
                    Lava
                  </option>
                  <option className="" value="">
                    Lenovo
                  </option>
                  <option className="" value="">
                    LG
                  </option>
                  <option className="" value="">
                    Mi
                  </option>
                  <option className="" value="">
                    Micromax
                  </option>
                  <option className="" value="">
                    Motorola
                  </option>
                  <option className="" value="">
                    Nokia
                  </option>
                  <option className="" value="">
                    One Plus
                  </option>
                  <option className="" value="">
                    Oppo
                  </option>
                  <option className="" value="">
                    Realme
                  </option>
                  <option className="" value="">
                    Samsung
                  </option>
                  <option className="" value="">
                    Sony
                  </option>
                  <option className="" value="">
                    Techno
                  </option>
                  <option className="" value="">
                    Vivo
                  </option>
                  <option className="" value="">
                    Other Mobiles
                  </option>
                </select>
              </div>
              <div className="child_info_2 flex flex-col  mb-[1.75rem]">
                <span className="name capitalize">ad title *</span>
                <input
                  type="text"
                  className="border-1 border-[#2f4f4f] hover:border-[#002f34] h-[2.813rem] rounded"
                />
                <div className="indicator_container flex justify-between">
                  <span className="font-normal text-[12px]">
                    Mention the key features of your item (e.g. brand, model,
                    age, type)
                  </span>
                  <span className="font-normal text-[12px]" id="#">
                    0 / 70
                  </span>
                </div>
              </div>
              <div className="child_info_3 flex flex-col  mb-[1.75rem]">
                <span className="name capitalize">description *</span>
                <textarea
                  className="border-1 border-[#2f4f4f] hover:border-[#002f34]  rounded h-[6rem]"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  maxLength="4096"
                  autoComplete=""
                ></textarea>
                <div className="indicator_container flex justify-between">
                  <span className="font-normal text-[12px]">
                    Include condition, features and reason for selling
                  </span>
                  <span className="font-normal text-[12px]" id="#">
                    0 / 4096
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container_sell_price  border-1 border-red-950 mx-[12.813rem]">
          <div className="child_price border-1 flex flex-col border-yellow-300  w-[29.625rem] p-8">
            <span className="heading_sell uppercase text-[20px] font-bold mb-[0.938rem]">
              set a price
            </span>
            <span className="name capitalize text-[12px] font-normal mb-[0.438rem]">
              price *
            </span>
            <div className="child_icon_input flex justify-between border-1 border-black p-2 rounded">
              <i class="p">₹</i>
              <input type="text" className="border-l-2 w-[23.25rem]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mobile;
