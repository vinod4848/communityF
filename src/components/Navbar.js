import React, { useState } from "react";
import "../assets/style/navbar.scss";
import BellIcon from "../assets/images/BellIcon.svg";
import User from "../assets/images/logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState();
  const handalHambarger = () => {
    if (open) {
      setOpen(true);
      alert("open");
    } else {
      setOpen(false);
      alert("close");
    }
  };
  return (
    <>
      <>
        <nav className="navbar navbar-expand-lg  ">
          <div className="container">
            <button
              data-mdb-collapse-init=""
              className="navbar-toggler text-primary"
              type="button"
              onClick={handalHambarger}
            >
              <i className="fas fa-bars" />
            </button>

            <div className="navbar-collapse main-navbar ">
              <a className=" mt-2 mt-lg-0 text-white" href="#">
                <img
                  src={User}
                  alt=""
                  style={{
                    backgroundSize: "100% 100%",
                    height: "60px",
                  }}
                ></img>
                {/* CommunityLogo */}
              </a>

              <ul className="navbar-nav  mb-2 mb-lg-0 navbarlist">
                <li className="nav-item ">
                  <a className="nav-link " href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  " href="/directory">
                    Directory
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="/jobpage">
                    Jobs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  " href="/matimonial">
                    Matrimony
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="/blog">
                    Blogs
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link " href="#">
                    Gallery
                  </a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link login-btn " href="/login">
                    Login
                  </a>
                </li>
              </ul>
            </div>

            <div className="d-flex align-items-center justify-content-evenly">
              {/* <FaBell className="bell_Icon" /> */}

              <FaRegUserCircle className="useProfile" />
            </div>
          </div>
        </nav>
      </>
    </>
  );
}

export default Navbar;
