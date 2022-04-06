import React from 'react';
import '../SignUp/SignUp.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from '../../components/FormControl/Input';

function SignUp() {

  function validateInputs() {
    var regExEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var object = document.getElementById('txtUsername')
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
    var password1 = document.getElementById('txtPassword')
    var password2 = document.getElementById('txtConfirmPassword')
    if(password1.value !== password2.value ) {
      password1.style.border = "2px solid red";
      password2.style.border = "2px solid red";
      document.getElementById("errorMsgPassword").style.display = "block";
      password1.value = ""
      password2.value = ""
    }
    else {
      password1.style.border = "";
      password2.style.border = "";
      document.getElementById("errorMsgPassword").style.display = "none";
    }
  }

  return (
    <div id='signInComponent'>
    <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card border-0 shadow-lg p-3 mb-5 bg-white rounded rounded-3 my-5" >
                <div className="card-body p-4 p-sm-5" id='loginbox'>
                  <h5 className="card-title text-center mb-5 fw-light fs-5"><img src="images/airbnbLogo.png" alt="logo" /></h5>
                  <form>
                  <div className="form-floating mb-3">
                      <Input type='text' className='form-control' id='txtName' placeholder='Name'/>
                    </div>

                    <div className="form-floating mb-3">
                      <Input type='email' className='form-control' id='txtUsername' placeholder='Email' onBlur={validateInputs}/>
                    </div>

                    <div id="errorMsgEmail">
                    Invalid Email Address!
                    <br /><br />
                    </div>

                    <div className="form-floating mb-3">
                      <Input type='password' className='form-control' id='txtPassword' name = 'txtPassword' placeholder='Password' />
                    </div>

                    <div className="form-floating mb-3">
                      <Input type='password' className='form-control' id='txtConfirmPassword' name='txtConfirmPassword' placeholder='Confirm Password' 
                      onBlur={validatePassword}/>
                    </div>
                    <div id="errorMsgPassword">
                    Passwords do not match!
                    <br /><br />
                    </div>
                     
                    <button className="btn btn-danger" id='signup'>Sign Up</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
 
  )
}

export default SignUp