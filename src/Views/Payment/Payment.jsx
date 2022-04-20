import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "../Payment/Payment.css";

function Payment(props) {
  return (
    <div className="container px-5">
      <Navbar />

      <form>
        <h3 className="mb-3">Payment</h3>

        <label className="mb-3" for="fname">
          Accepted Cards
        </label>

        <div class="icon-container">
          <div className="col-50">
            <i class="fa fa-credit-card" style={{ color: "blue" }}></i>
            <i class="fa fa-credit-card" style={{ color: "blue" }}></i>
            <i class="fa fa-credit-card" style={{ color: "red" }}></i>
            <i class="fa fa-credit-card" style={{ color: "orange" }}></i>
          </div>
        </div>

        <div className="row g-2 my-2">
          <div className="col-6">
            <label for="cname">Name on Card</label>
            <input
              className="form-control"
              type="text"
              id="cname"
              name="cardname"
              placeholder="John More Doe"
            ></input>
          </div>

          <div className="col-6">
            <label for="ccnum">Credit card number</label>
            <input
              className="form-control"
              type="text"
              id="ccnum"
              name="cardnumber"
              placeholder="1111-2222-3333-4444"
            ></input>
          </div>
        </div>

        <div className="row g-2 my-2">
          <div className="col-4">
            <label for="expmonth">Exp Month</label>
            <input
              className="form-control"
              type="text"
              id="expmonth"
              name="expmonth"
              placeholder="September"
            ></input>
          </div>

          <div className="col-4">
            <label for="expyear">Exp Year</label>
            <input
              className="form-control"
              type="text"
              id="expyear"
              name="expyear"
              placeholder="2018"
            ></input>
          </div>

          <div className="col-4">
            <label for="cvv">CVV</label>
            <input
              className="form-control"
              type="text"
              id="cvv"
              name="cvv"
              placeholder="352"
            ></input>
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
              id="fname"
              name="firstname"
              placeholder="John M. Doe"
            ></input>
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
            ></input>
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
            ></input>
          </div>

          <div className="row g-2 my-2">
            <div className="col-6">
              <label for="state">State</label>
              <input
                className="form-control"
                type="text"
                id="state"
                name="state"
                placeholder="NY"
              ></input>
            </div>

            <div className="col-6">
              <label for="zip"> Zip</label>
              <input
                className="form-control"
                type="text"
                id="zip"
                name="zip"
                placeholder="10001"
              ></input>
            </div>
          </div>

          <div className="row g-2 text-center justify-content-center my-4">
          <div className="col-2 subButton">
            <button className="btn btn-danger" id="payment">
              Confirm Payment
            </button>
          </div>
          </div>
        </div>
      </form>
      <br></br>
    </div>
  );
}

export default Payment;
