import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import SignIn from '../SignIn/SignIn';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/logout`, {
        withCredentials: true,
      });
      if (response.status === 200) { 
        sessionStorage.removeItem("userid");
        sessionStorage.removeItem("email");
        sessionStorage.setItem("isUserLoggedIn", false);
        sessionStorage.removeItem("name");
        navigate('/');
        window.location.reload(true);
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    logout();
  }, []);
  

  return (
    <div>
        <SignIn />
    </div>
  )
}

export default Logout