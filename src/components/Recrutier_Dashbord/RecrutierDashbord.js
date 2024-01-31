import React, { useState } from "react";
import "../../assets/style/recrutier_Dashbord/jobRecrutierDashbord.scss";
import ManageJobList from "./ManageJobList";
import JobPostList from "./JobPostList";
import { IoSearchCircle } from "react-icons/io5";
import { MdOutlinePostAdd } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { GrOverview } from "react-icons/gr";

function RecrutierDashbord() {
  const [selectcomponet, setSelectComponet] = useState(1);

  const handleComponentChange = (selectedComponent) => {
    setSelectComponet(selectedComponent);
  };

  return (
    <>
      <div className="job-recrutierDashboardMain">
        <div className="post-job-ontaner">
          <div>
            <h3 className="job-deshbord-title-text">Recrutier Dashbord</h3>
          </div>
          <div className="search-dashbord-form">
            <input
              type="text"
              class="search-dashbord-input"
              placeholder="Search"
            />
            <IoSearchCircle className="search-dashbord-bar-icons" />
          </div>
        </div>
        <div className="job-recrutier-contaner flex">
          <section className="job-recrter-sideBar flex">
            <div className="recrutier-dashbord-menu">
              <MdManageAccounts className="job-recruiter-icon" />
              <a
                href="#"
                onClick={() => handleComponentChange(1)}
                className="recrutier-dashbord-title"
              >
                ManagePost
              </a>
            </div>
            <div className="recrutier-dashbord-menu">
              <MdOutlinePostAdd className="job-recruiter-icon" />
              <a
                href="#"
                onClick={() => handleComponentChange(2)}
                className="recrutier-dashbord-title"
              >
                Creates Job
              </a>
            </div>
            <div className="recrutier-dashbord-menu">
              <GrOverview className="job-recruiter-icon" />
              <a
                href="#"
                onClick={() => handleComponentChange(3)}
                className="recrutier-dashbord-title"
              >
                View Application
              </a>
            </div>
          </section>
          <section className="job-recrter-contentBar">
            {selectcomponet === 1 && <ManageJobList />}
            {selectcomponet === 2 && <JobPostList />}
            {/* Add other conditions for more components */}
          </section>
          <section className="job-recrter-right-fliterBar"></section>
        </div>
      </div>
    </>
  );
}

export default RecrutierDashbord;
