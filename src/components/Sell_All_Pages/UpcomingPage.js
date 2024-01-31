import React, { useState, useEffect } from "react";
import "../../assets/style/see_All/see_All_upcoming.scss";
import events from "../../assets/images/Event1.png";
import axios from "axios";
import BASE_URL from "../../Api.js";
import { useNavigate } from "react-router-dom";

function UpcomingPage() {
  const [upcomingData, setUpcomingData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${BASE_URL}/events`)
      .then((response) => {
        setUpcomingData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="see_All_upcoming">
        <div className="contanerss">
          <div className="see_all_title">
            <h1>Up coming Events</h1>
          </div>
          <section className="all_card_section">
            <div className="see_All_Upcoming_card">
              {upcomingData.map((item) => {
                return (
                  <>
                    <div
                      className="see_All_Upcoming_card-bodys"
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                      key={item.id}
                      onClick={() => {
                        navigate(`/details/${item._id}`);
                      }}
                    >
                      <div className="see_all_upComingCardDetais">
                        <h2 className="see_all_text-title">{item.title}</h2>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default UpcomingPage;
