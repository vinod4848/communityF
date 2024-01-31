import React, { useState, useEffect } from "react";
import "../assets/style/eventsDetails.scss";
// import EventsImages from "../assets/images/8794d36030d9c5d830e431721e08ddd7.png";
import { FaLocationDot } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import axios from "axios";
import BASE_URL from "../Api";
import { useParams } from "react-router-dom";
import { FaRegAddressBook } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import moment from "moment";

function EventsDetalisPages() {
  const [upcomingData, setUpcomingData] = useState({});
  const { eventId } = useParams();
  console.log(eventId, "useparams");
  useEffect(() => {
    axios
      .get(`${BASE_URL}/events/${eventId}`)
      .then((response) => {
        setUpcomingData(response.data);
      })
      .catch((error) => console.log(error));
  }, [eventId]);

  return (
    <div className="event-details">
      {upcomingData && (
        <>
          <div className="event-images">
            <img src={upcomingData.image} alt="" />
          </div>

          <div className="events-details container">
            <h1 className="event-titles">{upcomingData.title}</h1>
            <p className="event-date">
              <MdDateRange className="event-icons" />

              {moment().format(" Do MMMM   YYYY ,dddd LT ", upcomingData.date)}
            </p>
            <p className="event-date">
              <FaMapLocationDot className="event-icons" />
              {upcomingData.address}
            </p>
          </div>
          <div className="events-about-details container">
            <h5 className="event-titles event-about-tilte">Event About</h5>
            <p
              className="event-about-text"
              dangerouslySetInnerHTML={{ __html: upcomingData.description }}
            ></p>
          </div>
        </>
      )}
    </div>
  );
}

export default EventsDetalisPages;
