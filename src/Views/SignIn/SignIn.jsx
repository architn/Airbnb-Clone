import React, { useState } from "react";
import "../SignIn/SignIn.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Input from "../../components/FormControl/Input";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar";

function SignIn() {
  
  const [details, setDetails] = useState({ email: "", password: "" });
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  

  function validateInputs() {
    var regExEmail =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var object = document.getElementById("txtUsername");
    if (!object.value.match(regExEmail)) {
      object.style.border = "2px solid red";
      document.getElementById("errorMsgEmail").style.display = "block";
      object.value = "";
    } else {
      object.style.border = "";
      document.getElementById("errorMsgEmail").style.display = "none";
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    // Login(details);
    axios
      .post("http://localhost:3002/userSignIn", details, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("Logged IN!");
          const user = response.data;
          sessionStorage.setItem("userid", user._id);
          sessionStorage.setItem("email", user.email);
          sessionStorage.setItem("isUserLoggedIn", true);
          sessionStorage.setItem("name", user.name);
          setUser({
            name: details.name,
            email: details.email,
          });
          if(user.isAdministrator === false)
            navigate("/hosting");
            else navigate("/admin"); 
        }
      })
      .catch((err) => {
        // console.log(err.response.data.msg);
        setError(err.response.data.msg);
      });
  };

  return (
      <div id="signInComponent" className="container">
      <Navbar />
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="">
              <div className="card-body p-4 p-sm-5" id="loginbox">
                <h5 className="card-title text-center mb-5 fw-light fs-5">
                  <img src="images/airbnbLogo.png" alt="logo" />
                </h5>
                <form onSubmit={submitHandler}>
                  <div className="form-floating mb-3">
                    {error != "" ? <div className="error">{error}</div> : ""}
                    <Input
                      type="email"
                      className="form-control"
                      id="txtUsername"
                      placeholder="Email"
                      onBlur={validateInputs}
                      onChange={(e) =>
                        setDetails({ ...details, email: e.target.value })
                      }
                      value={details.email}
                    />
                  </div>

                  <div id="errorMsgEmail">
                    Invalid Email Address!
                    <br />
                    <br />
                  </div>

                  <div className="form-floating mb-3">
                    <Input
                      type="password"
                      className="form-control"
                      id="txtPassword"
                      placeholder="Password"
                      onChange={(e) =>
                        setDetails({ ...details, password: e.target.value })
                      }
                      value={details.password}
                    />
                  </div>
                  <div>
                    <button
                      className="btn btn-primary btn-login text-uppercase fw-bold"
                      id="signin"
                      type="submit"
                      value="Login"
                    >
                      SIGN IN
                    </button>
                  </div>
                </form>
               
              </div>
            </div>
          </div>
        </div>
        <br /> <br /> <br />
      </div>
  );
}

export default SignIn;
