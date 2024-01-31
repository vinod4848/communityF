import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../Api";
import { useParams } from "react-router-dom";
import "../../assets/style/all_Detail_page/blogDetail.scss";
import moment from "moment";

function BlogDetails() {
  const [upcomingData, setUpcomingData] = useState({});
  const { blogId } = useParams();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/blogs/${blogId}`)
      .then((response) => {
        setUpcomingData(response.data);
        console.log(response.data, "data");
      })
      .catch((error) => console.log(error));
  }, [blogId]);

  return (
    <>
      <div className="blog-details-main">
        <div className="contaners">
          {upcomingData && (
            <>
              <h2 className="blog-card-text-title">{upcomingData.title}</h2>
              <img
                src={upcomingData.image}
                alt="blog images"
                className="blog-detail-images"
              />
              <p className="blog-card-text-description">
                Post date :
                {moment().format(
                  " Do MMMM   YYYY ,dddd LT ",
                  upcomingData.createdTimestamp
                )}
              </p>
              <p
                className="blog-card-text-description"
                dangerouslySetInnerHTML={{ __html: upcomingData.description }}
              >
                {/* {upcomingData.description} */}
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default BlogDetails;
