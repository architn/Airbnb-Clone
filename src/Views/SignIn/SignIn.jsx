import React from 'react'
import '../SignIn/SignIn.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from '../../components/FormControl/Input';

function SignIn() {
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
                      <Input type='email' className='form-control' id='txtUsername' placeholder='Email' 
                      onBlur={validateInputs}
                      />
                    </div>

                    <div id="errorMsgEmail">
                    Invalid Email Address!
                    <br /><br />
                    </div>

                    <div className="form-floating mb-3">
                      <Input type='password' className='form-control' id='txtPassword' placeholder='Password' />
                    </div>
      
                    <div className="form-check mb-3">
                      <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                      <label className="form-check-label" htmlFor="rememberPasswordCheck">
                        Remember password
                      </label>
                    </div>
                    <div className="d-grid">
                      <button className="btn btn-primary btn-login text-uppercase fw-bold" id='signin' type="submit">Sign
                        in</button>

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
  )
}

export default SignIn


