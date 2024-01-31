import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import BASE_URL from "../../Api";

function Announcement() {
  const [dataFetch, setDataFetch] = useState([]);
  const date = moment().format("YYYY-MM-DD");

  console.log(date, "data  of date ");

  useEffect(() => {
    axios
      .get(`${BASE_URL}/announcements`)
      .then((response) => {
        setDataFetch(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div className="container_main flex flex-col w-[80%] m-auto">
        <div className="upComing p-1">
          <div className="heading flex justify-between px-2 py-2">
            <h3 className="capitalize">up coming</h3>
            <a
              href="#complete"
              className="text-current flex gap-1 items-center"
            >
              <h3 className="capitalize cursor-pointer">completed</h3>
            </a>
          </div>
          <div className="map_the_data_here flex flex-col gap-1 ">
            {dataFetch &&
              dataFetch
                .filter((item) => item.isActive && item.date > date)
                .map((items, i) => (
                  <div
                    className="flex border-2 h-[216px] border-gray-200 rounded cursor-pointer"
                    key={i}
                  >
                    <div className="img w-[40%] h-full">
                      <img
                        className="rounded-l object-fill h-full w-full"
                        src={items.image}
                        alt=""
                      />
                    </div>
                    <div className="info flex flex-col justify-center w-[60%] pl-2 hover:bg-gray-100 ">
                      <h3 className="capitalize">{items.announcementType}</h3>
                      <h5 className="capitalize">{items.createdBy.username}</h5>
                      <h6>
                        {items.description && (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: `${items.description
                                .split(" ")
                                .slice(0, 10)
                                .join(" ")}${
                                items.description.split(" ").length > 6
                                  ? "..."
                                  : ""
                              }`,
                            }}
                          />
                        )}
                      </h6>
                      <p>{items.date}</p>
                    </div>
                  </div>
                ))}
          </div>
        </div>
        {/* part first of up coming */}
        <div className="competed p-1">
          <div className="heading flex justify-between px-2 py-2 ">
            <h3 className="capitalize" id="complete">
              completed
            </h3>
            {/* <button
              className="capitalize  bg-[#1387bd] hover:border hover:border-1 hover:border-[#1387bd] hover:bg-transparent hover:text-[#1387bd] hover:ease-in-out duration-500  px-2 py-1 rounded-full"
              onClick="#"
            >
              Add more
            </button> */}
          </div>
          {/* <div className="map_the_data_here flex flex-col gap-1"> */}
          <div
            className="map_the_data_here grid grid-cols-3 gap-2"
            id="complete"
          >
            {dataFetch &&
              dataFetch
                .filter((item) => item.isActive && item.date < date)
                .map((items, i) => (
                  <div
                    className="flex flex-col  border-2 h-full border-gray-200 rounded cursor-pointer"
                    key={i}
                  >
                    <div className="img w-full h-[60%] ">
                      <img
                        className="rounded-l object-fill h-full w-full"
                        src={items.image}
                        alt=""
                      />
                    </div>
                    <div className="info flex flex-col justify-center w-full h-[40%]  p-2 hover:bg-gray-100 ">
                      <h3 className="capitalize">{items.announcementType}</h3>
                      <h5 className="capitalize">{items.createdBy.username}</h5>
                      <h6>
                        {items.description && (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: `${items.description
                                .split(" ")
                                .slice(0, 6)
                                .join(" ")}${
                                items.description.split(" ").length > 6
                                  ? " ..."
                                  : ""
                              }`,
                            }}
                          />
                        )}
                      </h6>
                      <p>{items.date}</p>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Announcement;
