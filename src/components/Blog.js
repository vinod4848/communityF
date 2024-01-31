import React, { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../Api";
import "../assets/style/blog.scss";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Blog() {
  const [upcomingData, setUpcomingData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${BASE_URL}/blogs`)
      .then((response) => {
        setUpcomingData(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="main-blog-page">
        <div className="contanersss">
          <div className="blog-title ">
            <h1 className="blog-title-text">All Blogs</h1>
          </div>
          <section className="blog-section">
            <div className="blog-main-card">
              {upcomingData.map((item) => {
                return (
                  <>
                    <div className="blog-card-body">
                      <img
                        src={item.image}
                        alt="blog images"
                        className="blog-images"
                      />
                      <div className="blog-card-text-Detais">
                        <h2 className="blog-card-text-title">{item.title}</h2>
                        {/* <p
                          className="blog-text-discription"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        ></p> */}
                        <Link
                          to={`/blogdetails/${item._id}`}
                          className="read-more-button"
                          // onClick={() => {
                          //   navigate(`/blogdetails/${item._id}`);
                          // }}
                        >
                          Read More
                          <FaLongArrowAltRight />
                        </Link>
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

export default Blog;
