// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useState } from "react";
import { Collapse } from "react-bootstrap";
import "./Navbar.css";

const Navbar = () => {
  const [showSignIn, setShowSignIn] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  const toggleSignIn = () => {
    setShowSignIn(!showSignIn);
    setShowProfile(false);
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
    setShowSignIn(false);
  };

  const toggleNavbar = () => {
    setCollapsed(!collapsed); // Toggle collapsed state
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="bg">
            {/* <nav className="rowsdisplay">
              <div className="d-flex flex-row align-items-center">
                <div className="logo">
                  <img src="logo2.jpg" alt="Logo" />
                </div>
                <div className="col-12 col-md-5 col-sm-3"></div>
                <div className="col-12 col-md-1">
                  <ul className="nav-links">
                    <li>
                      <a href="#">Home</a>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-1">
                  <ul className="nav-links">
                    <li>
                      <a href="#">Reviews</a>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <ul className="nav-links">
                    <li>
                      <a href="#">About</a>
                    </li>
                  </ul>
                </div>
                <div className=" d-flex flex-row">
                  <ul className="nav-links-profile">
                    {showSignIn && (
                      <button onClick={toggleProfile} className="profile-button bg-primary">Sign Up/Sign In</button>
                    )}
                    {showProfile && (
                      <ul className="nav-links-profile ">
                        <li>
                          <a href="/">
                            <span class="material-symbols-outlined">
                              account_circle
                            </span>
                          </a>
                          <h6 className="profile-name">Profile</h6>
                        </li>
                      </ul>
                    )}
                  </ul>
                  <div>
                    <ul className="nav-links-profile">
                      <li>
                       
                          <span className="material-symbols-outlined profile mx-4">
                            circle_notifications
                          </span>
                       
                        <h6 className="notification">notification</h6>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  <img src="logo2.jpg" alt="Logo" className="w-25"/>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Reviews
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        About
                      </a>
                    </li>
                  </ul>
                  <div className="d-flex align-items-center">
                    {/* Toggle for Profile */}
                    <button
                      onClick={toggleProfile}
                      className="btn btn-primary me-2"
                    >
                      Sign Up/Sign In
                    </button>
                    {/* Toggle for Notifications */}
                    <div className="position-relative">
                      <button className="btn btn-link">
                        <span className="material-icons-outlined">
                          notifications
                        </span>
                      </button>
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        9{/* You can dynamically change the number */}
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="container1"></div>
      <footer id="Contact">
        <div class="footer0">
          <h1>Raja</h1>
        </div>
        <div class="footer1 ">
          Connect with us at
          <div class="social-media">
            <a href="https://www.facebook.com/">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="https://www.linkedin.com/">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a href="https://www.youtube.com/">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
            <a href="https://www.instagram.com/">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="https://twitter.com/">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </div>
        </div>
        <div class="footer2">
          <div class="product">
            <div class="heading">Products</div>
            <div class="div">Sell your Products</div>
            <div class="div">Advertise</div>
            <div class="div">Pricing</div>
            <div class="div">Product Buisness</div>
          </div>
          <div class="services">
            <div class="heading">Services</div>
            <div class="div">Return</div>
            <div class="div">Cash Back</div>
            <div class="div">Affiliate Marketing</div>
            <div class="div">Others</div>
          </div>
          <div class="Company">
            <div class="heading">Company</div>
            <div class="div">Complaint</div>
            <div class="div">Careers</div>
            <div class="div">Affiliate Marketing</div>
            <div class="div">Support</div>
          </div>
          <div class="Get Help">
            <div class="heading">Get Help</div>
            <div class="div">Help Center</div>
            <div class="div">Privacy Policy</div>
            <div class="div">Terms</div>
            <div class="div">Login</div>
          </div>
        </div>
        <div class="footer3">
          Copyright © <h4>Raja</h4> 2020-2048
        </div>
      </footer>
      <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
    </div>
  );
};

export default Navbar;
