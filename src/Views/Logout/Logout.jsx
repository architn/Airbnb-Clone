import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import SignIn from '../SignIn/SignIn';

function Logout() {
    sessionStorage.removeItem("userid");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("email");
    sessionStorage.setItem("isUserLoggedIn", false);
    sessionStorage.removeItem("name");
  return (
    <div>
        <SignIn />
    </div>
  )
}

export default Logout