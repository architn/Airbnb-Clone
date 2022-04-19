/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Navbar/Navbar.css'
import { Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom"



function Navbar() {
  const navigate = useNavigate();
  const [details, setDetails] = useState({ search: "" });

  var [isUserLoggedIn, setUserLogin] = useState(false); 
  useEffect( () => {
    
    return setUserLogin(sessionStorage.getItem("isUserLoggedIn"));
  }, [isUserLoggedIn]);
  return (
    <div  id = 'navcolor'>
     
        <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container-fluid'>
        <a className="navbar-brand" href='/'>
        <img src = {process.env.PUBLIC_URL + "images/airbnbLogo.png"} className='logo' alt='logo' />
        </a>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <div className='col-12 col-md-6'>
                <ul className='navbar'>
                    

                    <li className='nav-item dropdown'>
                    <a
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                    <img src="images/134216_menu_lines_hamburger_icon.png" alt='hamburger' className='hamburger' />
                    <img src="images/profile.png" alt='profile' id='profileLogo' className='hamburger' />
                
                    </a>
                    {isUserLoggedIn ? 
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item"><Link className='navigation' to='/host'>List New Property</Link>{"   "}</a></li>
                        <li><a className="dropdown-item"><Link className='navigation' to='/personalinfo'>Edit Profile</Link>{"   "}</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li>
                          <a className="dropdown-item"><Link className='navigation' to='/events'>Your Properties</Link>{"   "}</a>
                          <a className="dropdown-item"><Link className='navigation' to='/events'>Your Reservations</Link>{"   "}</a>
                          <a className="dropdown-item"><Link className='navigation' to='/events'>Events near You</Link>{"   "}</a>
                          <a className="dropdown-item"><Link className='navigation' to='/logout'>Logout</Link>{"   "}</a>
                        </li>
                    </ul>
                     : 
                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                     <li><a className="dropdown-item"><Link className='navigation' to='/login'>Login</Link>{"   "}</a></li>
                     <li><a className="dropdown-item"><Link className='navigation' to='/signup'>Sign Up</Link>{"   "}</a></li>
                     <li><hr className="dropdown-divider" /></li>
                 <li>
                     <a className="dropdown-item"><Link className='navigation' to='/homes?searchCity=New+York%2C+NY%2C+USA'>View Properties near you</Link>{"   "}</a>
                     <a className="dropdown-item"><Link className='navigation' to='/events'>Events near You</Link>{"   "}</a>
                     <a className="dropdown-item"><Link className='navigation' to='/personalinfo'>Help</Link>{"   "}</a>
                  </li>
             </ul>
                     }
                    </li>
                </ul>
            </div>
        </div>
        <div className="col-12 col-md-6">
                <form className="d-flex align-items-center" action='/homes'>
            <input
              className="form-control me-2"
              id="myInput"
              type="text"
              placeholder="Start your search"
              aria-label="Search"
              name="searchCity"
            />
           
            <button type="submit" className="btn btn-light">
              <img src="images/3688454_find_lens_search_magnifier_magnifying_icon.png"  alt="magnifier" className='magnifier' />
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
       
        <br/>
    </div>
  )
}

export default Navbar;