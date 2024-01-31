import React, { useState } from "react";
import "../../assets/style/recrutier_Dashbord/job_post_list.scss";

function JobPostList() {
  return (
    <div className="jobPostMain">
      <div className="job-post-contaner">
        <h3>Create Job Post</h3>
        <form
          className="job-post-form shadow-sm p-3 mb-5 bg-white rounded"
          action="#"
        >
          <div className="form-group mt-3">
            <label className="job-post-form-title-text">Job Title</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=" Job tilte"
            />
          </div>
          <div className="form-group mt-3">
            <label className="job-post-form-title-text">Company Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Company Name"
            />
          </div>
          <div className="form-group d-flex justify-content-between align-items-center mt-4">
            <label className="job-post-form-title-text">Exprience </label>
            <select
              className="form-control ms-2"
              id="exampleFormControlSelect1"
              placeholder="Exprience"
            >
              <option>Select</option>
              <option>0-1 years</option>
              <option>1-2 years</option>
              <option>2-3 years</option>
              <option>3-4 years</option>
              <option>4-5 years</option>
              <option>5-6 years</option>
              {/* <option>5</option> */}
            </select>
            <label className="job-post-form-title-text">Salary </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Salary"
            />
          </div>
          <div className="form-group d-flex justify-content-between align-items-center mt-4">
            <label className="job-post-form-title-text">Exprience Level</label>
            <select
              className="form-control ms-2"
              id="exampleFormControlSelect1"
            >
              <option>Select</option>
              <option>0-1 years</option>
              <option>1-2 years</option>
              <option>2-3 years</option>
              <option>3-4 years</option>
              <option>4-5 years</option>
              <option>5-6 years</option>
              {/* <option>5</option> */}
            </select>
          </div>
          <div className="form-group d-flex justify-content-between align-items-center mt-4">
            <label className="job-post-form-title-text">Education level</label>
            <select
              className="form-control ms-2"
              id="exampleFormControlSelect1"
            >
              <option>Select</option>
              <option>0-1 years</option>
              <option>1-2 years</option>
              <option>2-3 years</option>
              <option>3-4 years</option>
              <option>4-5 years</option>
              <option>5-6 years</option>
              {/* <option>5</option> */}
            </select>
          </div>

          <div className="form-group mt-4">
            <label className="job-post-form-title-text">Skils</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Skils"
            />
          </div>
          <div className="form-group mt-4">
            <label className="job-post-form-title-text">Select Date</label>
            <input
              type="date"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Select Date"
            />
          </div>

          <div className="form-group mt-4">
            <label className="job-post-form-title-text">
              Role and Resposblity
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Role and Resposblity"
            />
          </div>
          <div className="form-group mt-4">
            <label className="job-post-form-title-text">location</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="location"
            />
          </div>
          <div className="form-group mt-4">
            <label className="job-post-form-title-text">Qulification</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Qulification"
            />
          </div>

          <div className="form-group mt-4">
            <label className="job-post-form-title-text">Job Description</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={""}
              placeholder="Job Description"
            />
          </div>
          <button className="btn btn-primary mt-2 text-center btn-job-post ">Post</button>
        </form>
      </div>
    </div>
  );
}

export default JobPostList;
