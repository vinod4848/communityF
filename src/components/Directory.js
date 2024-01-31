import React, { useState, useEffect } from "react";
import "../assets/style/directory.scss";
import axios from "axios";
import BASE_URL from "../Api";

function Directory() {
  const [deiectory, setDeictory] = useState([]);
  const [query, setQuery] = useState("");

  console.log(query);
  // let keys = ["firstName", "name", "username"];

  // const handelSearch = (data) => {
  //   return data.filter(
  //     (
  //       item //console.log("items", item.userId)
  //     ) =>
  //       keys.some((key) => item[key].toLowerCase().includes(query)) ||
  //       keys.some((key) => item.userId[key].toLowerCase().includes(query))
  //   );
  // };

  const handleSearch = (data, input, keys) => {
    const lowerCaseQuery = input.toLowerCase();
    console.log(lowerCaseQuery);
    return data.filter((item) => {
      return (
        keys.some((key) => {
          const propertyValue = item[key];
          // console.log(propertyValue, "propertyValue");

          // Check if propertyValue is defined and a string
          if (propertyValue && typeof propertyValue === "string") {
            return propertyValue.toLowerCase().includes(lowerCaseQuery);
          }

          return false;
        }) ||
        keys.some((key) => {
          const nestedPropertyValue = item.userId && item.userId[key];
          // console.log(nestedPropertyValue, "nestedPropertyValue");

          // Check if nestedPropertyValue is defined and a string
          if (nestedPropertyValue && typeof nestedPropertyValue === "string") {
            return nestedPropertyValue.toLowerCase().includes(lowerCaseQuery);
          }

          return false;
        })
      );
    });
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/directories`)
      .then(({ data }) => {
        setDeictory(data);
      })
      .catch((error) => console.log(error));
  }, []);

  // console.log("directory clg:-", deiectory);
  return (
    <>
      <div className="directory">
        <div className="contanet">
          <div className="deiectory_nav">
            {/* <h3 className="search-title">Search Here</h3> */}
            {/* <input
              type="text"
              placeholder="Search here..."
              className="search_input"
            /> */}
            <input
              type="text"
              placeholder="Search keyword.."
              className="search_input"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            {/* handelSearch */}
            <button
              className="Seach-bar"
              onClick={() => {
                handleSearch(deiectory, query, [
                  "firstName",
                  "name",
                  // "username",
                ]);
              }}
            >
              Search
            </button>
          </div>
          <>
            <>
              {/*Table*/}
              <table className="table table-striped w-100">
                {/*Table head(*/}
                <thead>
                  <tr>
                    <th>Sr.No</th>
                    <th>CompanyLogo</th>
                    <th>Locality</th>
                    <th>GstNumber</th>
                    <th>Address</th>
                    <th>Website</th>
                    <th>Company Name</th>
                    <th>Email Id </th>
                    <th>Phone No.</th>
                    <th>Description</th>
                  </tr>
                </thead>
                {/*Table head*/}

                {/*Table body*/}
                <tbody>
                  {deiectory.map((item, id) => {
                    return (
                      <>
                        <tr key={id} className="">
                          <td>{id + 1}</td>
                          <td>
                            <img src={item.companyLogo} alt="" />
                          </td>
                          <td>{item.locality}</td>
                          <td>{item.gstNumber}</td>
                          <td>{item.address}</td>
                          <td>{item.website}</td>
                          <td>{item.companyName}</td>
                          <td>{item.companyEmail}</td>
                          <td>{item.contactNumber}</td>
                          <td>{item.description}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
                {/*Table body*/}
              </table>
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex={-1}>
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
              {/*Table*/}
            </>
          </>
        </div>
      </div>
    </>
  );
}

export default Directory;
