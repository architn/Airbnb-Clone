import React, { useState } from "react";
import "../SignUp/SignUp.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Input from "../../components/FormControl/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

function SignUp() {
  const [details, setDetails] = useState({ email: "", password: "", name: "" });
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

  function validatePassword() {
    var password1 = document.getElementById("txtPassword");
    var password2 = document.getElementById("txtConfirmPassword");
    if (password1.value !== password2.value) {
      password1.style.border = "2px solid red";
      password2.style.border = "2px solid red";
      document.getElementById("errorMsgPassword").style.display = "block";
      password1.value = "";
      password2.value = "";
    } else {
      password1.style.border = "";
      password2.style.border = "";
      document.getElementById("errorMsgPassword").style.display = "none";
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(details);
    axios
      .post("http://localhost:3002/userSignUp", details)
      .then((response) => {
        if (response.status === 201) {
          console.log("Logged IN!");
          setUser({
            name: details.name,
            email: details.email,
          });
          window.location.reload(true);
          navigate("/login");
        }
      })
      .catch((err) => {
        // console.log(err.response.data.errors[0].msg);
        setError(err.response.data.errors[0].msg);
      });
  };

  return (
    <div className="container" id="signInComponent">
      <Navbar />
      <div>
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div>
              <div className="card-body p-4 p-sm-5" id="loginbox">
                <h5 className="card-title text-center mb-5 fw-light fs-5">
                  <img src="images/airbnbLogo.png" alt="logo" />
                </h5>
                <form onSubmit={submitHandler}>
                  <div className="form-floating mb-3">
                    {error != "" ? <div className="error">{error}</div> : ""}
                    <Input
                      type="text"
                      className="form-control"
                      id="txtName"
                      placeholder="Name"
                      onChange={(e) =>
                        setDetails({ ...details, name: e.target.value })
                      }
                      value={details.name}
                    />
                  </div>

                  <div className="form-floating mb-3">
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
                      name="txtPassword"
                      placeholder="Password"
                    />
                  </div>

                  <div className="form-floating mb-3">
                    <Input
                      type="password"
                      className="form-control"
                      id="txtConfirmPassword"
                      name="txtConfirmPassword"
                      placeholder="Confirm Password"
                      onBlur={validatePassword}
                      onChange={(e) =>
                        setDetails({ ...details, password: e.target.value })
                      }
                      value={details.password}
                    />
                  </div>
                  <div id="errorMsgPassword">
                    Passwords do not match!
                    <br />
                    <br />
                  </div>

                  <button className="btn btn-danger" id="signup">
                    SIGN UP
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default SignUp;
