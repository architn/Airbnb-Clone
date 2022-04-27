import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "../Payment/Payment.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import emailjs from 'emailjs-com'
import { useSearchParams } from "react-router-dom";
import Images from '../../data/images'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {useNavigate} from "react-router-dom"


function validateNameFieldIsNotEmpty() {
  var object = document.getElementById("cname");
  if (object.value === "") {
    object.style.border = "2px solid red";
    document.getElementById("NameerrorMsg").style.display = "block";
  } else {
    object.style.border = "";
    document.getElementById("NameerrorMsg").style.display = "none";
  }
}

function validateFullNameFieldIsNotEmpty() {
  var object = document.getElementById("fullName");
  if (object.value === "") {
    object.style.border = "2px solid red";
    document.getElementById("FullNameerrorMsg").style.display = "block";
  } else {
    object.style.border = "";
    document.getElementById("FullNameerrorMsg").style.display = "none";
  }
}

function validateCityFieldIsNotEmpty() {
  var object = document.getElementById("city");
  if (object.value === "") {
    object.style.border = "2px solid red";
    document.getElementById("CityerrorMsg").style.display = "block";
  } else {
    object.style.border = "";
    document.getElementById("CityerrorMsg").style.display = "none";
  }
}

function validateZipFieldIsNotEmpty() {
  var object = document.getElementById("zip");
  var regexZip = /^[0-9]{5}(?:-[0-9]{4})?$/;
  if (!object.value.match(regexZip)) {
    object.style.border = "2px solid red";
    document.getElementById("ZiperrorMsg").style.display = "block";
  } else {
    object.style.border = "";
    document.getElementById("ZiperrorMsg").style.display = "none";
  }
}

function validateEmailFieldIsNotEmpty() {
  var object = document.getElementById("email");
  var regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (!object.value.match(regexEmail)) {
    object.style.border = "2px solid red";
    document.getElementById("EmailerrorMsg").style.display = "block";
  } else {
    object.style.border = "";
    document.getElementById("EmailerrorMsg").style.display = "none";
  }
}

function validateStateFieldIsNotEmpty() {
  var object = document.getElementById("state");
  var str = object.options[object.selectedIndex].value;
  if (str === "-1") {
    object.style.border = "2px solid red";
    document.getElementById("StateerrorMsg").style.display = "block";
  } else {
    object.style.border = "";
    document.getElementById("StateerrorMsg").style.display = "none";
  }
}

function validatCnumFieldIsNotEmpty() {
  var object = document.getElementById("ccnum");
  var regexCCnum = /^\d{16}$/;
  if (!object.value.match(regexCCnum)) {
    object.style.border = "2px solid red";
    document.getElementById("CCerrorMsg").style.display = "block";
  } else {
    object.style.border = "";
    document.getElementById("CCerrorMsg").style.display = "none";
  }
}

function validatCvcFieldIsNotEmpty() {
  var object = document.getElementById("cvc");
  var regexCCnum = /^\d{3}$/;
  if (!object.value.match(regexCCnum)) {
    object.style.border = "2px solid red";
    document.getElementById("CvcerrorMsg").style.display = "block";
  } else {
    object.style.border = "";
    document.getElementById("CvcerrorMsg").style.display = "none";
  }
}

function validatMonthExpFieldIsNotEmpty() {
  var object = document.getElementById("expmonth");
  var regexexpMonth = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  if (!object.value.match(regexexpMonth)) {
    object.style.border = "2px solid red";
    document.getElementById("MerrorMsg").style.display = "block";
  } else {
    object.style.border = "";
    document.getElementById("MerrorMsg").style.display = "none";
  }
}

function Payment() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [totalCost, setTotalCost] = useState(0);
  const [numberOfGuests, setNumberOfGuests] = useState(0);
  let [searchParams] = useSearchParams();
  const [focus, setFocus] = useState("");
  const {propertyid} = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState([]);
  const delay = ms => new Promise(res => setTimeout(res, ms));
  

  const shuffled = Images.sort(() => 0.5 - Math.random());

  // Get sub-array of first n elements after shuffled
  let selected = shuffled.slice(0, 1);

  useEffect( () => {
    setCheckInDate(searchParams.get("checkInDate"));
    setCheckOutDate(searchParams.get("checkOutDate"));
    setTotalCost(searchParams.get("totalCost"));
    setNumberOfGuests(searchParams.get("numberOfGuests"));
    axios
        .get(`http://localhost:3002/property/${propertyid}` ,
          { 
            withCredentials: true,
          }
      )
      .then((response) => {
        if (response.status === 200) {
          setProperty(response.data)
        }
      })
      .catch((err) => {
        console.log(err);
        //setError(err.response.data.msg);
      });
  
     },[propertyid, searchParams] )

  const sendEmail = (e) => {
    // setReservation({
    //   checkInDate: checkInDate,
    //   checkOutDate: checkOutDate,
    //   numberOfGuests: numberOfGuests,
    //   propertyID: propertyid
    // }
      
    // )
    e.preventDefault();
     axios
      .post("http://localhost:3002/addReservation", {
        propertyID: propertyid,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        numberOfGuests: numberOfGuests,
        totalCost: totalCost,
      }, {
        withCredentials: true,
      })
      .then( async (response) => {
        if (response.status === 201) {
           setTimeout(20000);

        }
      });
    // emailjs.sendForm('service_wu950db', 'template_zqp8d76', e.target, '-cF8OdK8pPjA5-1Zz')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
    //   e.target.reset();
    navigate("/hosting")
  };

  return (
    <div className="container px-5">
      <Navbar />
      <div className="row">
        <div className="col-8">
        <h3>Pay and Checkout</h3>
      
      <div className="float-end my-3 mx-3">
        
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />
      </div>
      <form className="form-control" onSubmit={sendEmail}>
        <div className="row g-2 my-2">
          <div className="col-5">
            <label for="cname">Name on Card</label>
            <input
              className="form-control"
              type="text"
              id="cname"
              name="name"
              placeholder="John More Doe"
              value={name}
              onBlur={validateNameFieldIsNotEmpty}
              onChange={(e) => setName(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            ></input>
            <div id="NameerrorMsg">Please enter your name!</div>
          </div>

          <div className="col-5">
            <label for="ccnum">Credit card number</label>
            <input
              className="form-control"
              type="tel"
              id="ccnum"
              name="number"
              placeholder="1111-2222-3333-4444"
              value={number}
              onBlur={validatCnumFieldIsNotEmpty}
              onChange={(e) => setNumber(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            ></input>
            <div id="CCerrorMsg">Please enter a valid 16-digit CC number only!</div>
          </div>
        </div>

        <div className="row g-2 my-2">
          <div className="col-5">
            <label for="expmonth">Expiry</label>
            <input
              className="form-control"
              type="text"
              id="expmonth"
              name="expiry"
              placeholder="MM/YY Expiry"
              value={expiry}
              onBlur={validatMonthExpFieldIsNotEmpty}
              onChange={(e) => setExpiry(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            ></input>
            <div id="MerrorMsg">Please enter in the form of MM/YY digits only!</div>
          </div>

          <div className="col-5">
            <label for="cvv">CVC</label>
            <input
              className="form-control"
              type="tel"
              id="cvc"
              name="cvc"
              placeholder="CVC"
              value={cvc}
              onBlur={validatCvcFieldIsNotEmpty}
              onChange={(e) => setCvc(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            ></input>
            <div id="CvcerrorMsg">Please enter a valid 3 digit CVC number only!</div>
          </div>
        </div>

        <br></br>
        <h3>Billing Address</h3>

        <div className="row g-2 my-2">
          <div className="col-6">
            <label for="fname">
              <i class="fa fa-user"></i> Full Name
            </label>
            <input
              className="form-control"
              type="text"
              id="fullName"
              name="firstname"
              placeholder="John M. Doe"
              onBlur={validateFullNameFieldIsNotEmpty}
            ></input>
            <div id="FullNameerrorMsg">Please enter your name!</div>
          </div>

          <div className="col-6">
            <label for="email">
              <i class="fa fa-envelope"></i>Email
            </label>
            <input
              className="form-control"
              type="text"
              id="email"
              name="email"
              placeholder="john@example.com"
              onBlur={validateEmailFieldIsNotEmpty}
            ></input>
            <div id="EmailerrorMsg">Enter a valid email ID!</div>
          </div>
        </div>

        <div className="row g-2 my-2">
          <div className="col-6">
            <label for="adr">
              <i class="fa fa-address-card"></i> Address
            </label>
            <input
              className="form-control"
              type="text"
              id="adr"
              name="address"
              placeholder="542 W. 15th Street"
            ></input>
          </div>

          <div className="col-6">
            <label for="city">
              <i class="fa fa-city"></i>City
            </label>
            <input
              className="form-control"
              type="text"
              id="city"
              name="city"
              placeholder="New York"
              onBlur={validateCityFieldIsNotEmpty}
            ></input>
            <div id="CityerrorMsg">Please enter your city!</div>
          </div>

          <div className="row g-2 my-2">
            <div className="col-6">
              <label for="state">State</label>
              <select
                className="form-control"
                name="state"
                id="state"
                onBlur={validateStateFieldIsNotEmpty}
              >
                <option value="-1">Select State</option>
                <option value="AL">AL</option>
                <option value="AK">AK</option>
                <option value="AZ">AZ</option>
                <option value="AR">AR</option>
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DE">DE</option>
                <option value="DC">DC</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="HI">HI</option>
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="IA">IA</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="ME">ME</option>
                <option value="MD">MD</option>
                <option value="MA">MA</option>
                <option value="MI">MI</option>
                <option value="MN">MN</option>
                <option value="MS">MS</option>
                <option value="MO">MO</option>
                <option value="MT">MT</option>
                <option value="NE">NE</option>
                <option value="NV">NV</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>
                <option value="NY">NY</option>
                <option value="NC">NC</option>
                <option value="ND">ND</option>
                <option value="OH">OH</option>
                <option value="OK">OK</option>
                <option value="OR">OR</option>
                <option value="PA">PA</option>
                <option value="RI">RI</option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VT">VT</option>
                <option value="VA">VA</option>
                <option value="WA">WA</option>
                <option value="WV">WV</option>
                <option value="WI">WI</option>
                <option value="WY">WY</option>
              </select>
              <div id="StateerrorMsg">Please choose your state</div>
            </div>

            <div className="col-6">
              <label for="zip"> Zip</label>
              <input
                className="form-control"
                type="text"
                id="zip"
                name="zip"
                placeholder="10001"
                onBlur={validateZipFieldIsNotEmpty}
              ></input>
              <div id="ZiperrorMsg">Enter a valid postal code!</div>
            </div>
          </div>
            <input type="hidden" name="checkInDate" value={checkInDate} />
            <input type="hidden" name="propertyID" value={propertyid} />
            <input type="hidden" name="checkOutDate" value={checkOutDate} />
            <input type="hidden" name="numberOfGuests" value={numberOfGuests} />
            <input type="hidden" name="totalCost" value={totalCost} />
          <div className="row g-2 text-center justify-content-center my-4 font-weight-bold">
            <div className="col-2 subButton">
              <button className="btn btn-danger" id="payment">
                CONFIRM RESERVATION
              </button>
            </div>
          </div>
        </div>
      </form>
        </div>
        <div className="col-4">
        <h3>Property Summary</h3>
            <div className="card" id="propertySummary">              
              <div id="propertyDiv">
              <img id="propertyView" class="card-img-top" src={selected[0]} alt="Card cap" />
              </div>
             
          </div>
        </div>
      </div>
      
      
      <br></br>
    </div>
  );
}

export default Payment;
