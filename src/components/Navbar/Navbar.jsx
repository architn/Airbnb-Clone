/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function pageRefresh() {
  window.location.reload(true);
}
const LoggedInMenu = () => {
  return (
    <>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li>
          <a className="dropdown-item" onClick={pageRefresh}>
            <Link className="navigation" to="/host">
              List New Property
            </Link>
            {"   "}
          </a>
        </li>
        <li>
          <a className="dropdown-item" onClick={pageRefresh}>
            <Link className="navigation" to="/personalinfo">
              Edit Profile
            </Link>
            {"   "}
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" onClick={pageRefresh}>
            <Link className="navigation" to="/hosting">
              Your Properties
            </Link>
            {"   "}
          </a>
          <a className="dropdown-item" onClick={pageRefresh}>
            <Link className="navigation" to="/hosting">
              Your Reservations
            </Link>
            {"   "}
          </a>
          <a className="dropdown-item" onClick={pageRefresh}>
            <Link className="navigation" to="/events">
              Events near You
            </Link>
            {"   "}
          </a>
          <a className="dropdown-item" onClick={pageRefresh}>
            <Link
              className="navigation"
              to="/homes?searchCity=New+York%2C+NY%2C+USA"
            >
              View Properties near you
            </Link>
            {"   "}
          </a>
          <a className="dropdown-item" onClick={pageRefresh}>
            <Link className="navigation" to="/logout">
              Logout
            </Link>
            {"   "}
          </a>
        </li>
      </ul>
    </>
  );
};

const NormalMenu = () => {
  return (
    <>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li>
          <a className="dropdown-item" onClick={pageRefresh}>
            <Link className="navigation" to="/login">
              Login
            </Link>
            {"   "}
          </a>
        </li>
        <li>
          <a className="dropdown-item" onClick={pageRefresh}>
            <Link className="navigation" to="/signup">
              Sign Up
            </Link>
            {"   "}
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" onClick={pageRefresh}>
            <Link
              className="navigation"
              to="/homes?searchCity=New+York%2C+NY%2C+USA"
            >
              View Properties near you
            </Link>
            {"   "}
          </a>
          <a className="dropdown-item" onClick={pageRefresh}>
            <Link className="navigation" to="/events">
              Events near You
            </Link>
            {"   "}
          </a>
          <a className="dropdown-item" onClick={pageRefresh}>
            <Link className="navigation" to="/personalinfo">
              Help
            </Link>
            {"   "}
          </a>
        </li>
      </ul>
    </>
  );
};
const Navbar = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({ search: "" });

  const [isUserLoggedIn, setUserLogin] = useState(false);

  useEffect(() => {
    const isUserLoggedIn = sessionStorage.getItem("isUserLoggedIn") === "true";
    setUserLogin(isUserLoggedIn);
  }, [sessionStorage.getItem("isUserLoggedIn")]);

  return (
    <div id="navcolor">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="https://static.dezeen.com/uploads/2014/07/Airbnb-rebrand-by-DesignStudio_dezeen_468_8.jpg"
              className="logo"
              alt="logo"
            />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="col-12 col-md-6">
              <ul className="navbar">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://i.ibb.co/M67rc88/134216-menu-lines-hamburger-icon.png"
                      alt="hamburger"
                      className="hamburger"
                    />
                    <img
                      src="https://i.ibb.co/31GNtkq/profile.png"
                      alt="profile"
                      id="profileLogo"
                      className="hamburger"
                    />
                  </a>
                  {isUserLoggedIn ? <LoggedInMenu /> : <NormalMenu />}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <form className="d-flex align-items-center" action="/homes">
              <input
                className="form-control me-2"
                id="myInput"
                type="text"
                placeholder="Start your search"
                aria-label="Search"
                name="searchCity"
              />

              <button type="submit" className="btn btn-light">
                <img
                  src="https://i.ibb.co/pbSM5Jb/3688454-find-lens-search-magnifier-magnifying-icon.png"
                  alt="magnifier"
                  className="magnifier"
                />
              </button>
            </form>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <br />
    </div>
  );
};

export default Navbar;
