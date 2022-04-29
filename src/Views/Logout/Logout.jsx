import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import SignIn from '../SignIn/SignIn';
import axios from "axios";

function Logout() {
  
  axios.get("http://localhost:3002/logout", {
      withCredentials: true,
    })
    .then((response) => {
      if (response.status === 200) { 
        sessionStorage.removeItem("userid");
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("email");
        sessionStorage.setItem("isUserLoggedIn", false);
        sessionStorage.removeItem("name");
      }
    })
    .catch((err) => {
      console.log(err.response.data.msg);
    });

  useEffect(() => {
    
  }, []);
  

  return (
    <div>
        <SignIn />
    </div>
  )
}

export default Logout