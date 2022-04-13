import React from "react";
import "../NewListing/AddProperty.css";
import Carousel from "../../components/Carousel/Carousel.jsx";

//No of guests
function increaseValueGuests() {
  var value = document.getElementById("numberGuests").value;
  console.log(value);
  value++;
  document.getElementById("numberGuests").value = value;
}

function decreaseValueGuests() {
  var value = document.getElementById("numberGuests").value;
  if (validateIfNotNegativeGuests()) {
    value = 0;
    document.getElementById("numberGuests").value = value;
  } else {
    value--;
    document.getElementById("numberGuests").value = value;
  }
}

function validateIfNotNegativeGuests() {
  var value = document.getElementById("numberGuests").value;
  if (value < 1) {
    return true;
  }
}


//Number of beds
function increaseValueBeds() {
  var value = document.getElementById("numberBeds").value;
  console.log(value);
  value++;
  document.getElementById("numberBeds").value = value;
}

function decreaseValueBeds() {
  var value = document.getElementById("numberBeds").value;
  if (validateIfNotNegativeBeds()) {
    value = 0;
    document.getElementById("numberBeds").value = value;
  } else {
    value--;
    document.getElementById("numberBeds").value = value;
  }
}

function validateIfNotNegativeBeds() {
  var value = document.getElementById("numberBeds").value;
  if (value < 1) {
    return true;
  }
}


//Number of Bathrooms
function increaseValueBath() {
  var value = document.getElementById("numberBath").value;
  console.log(value);
  value++;
  document.getElementById("numberBath").value = value;
}

function decreaseValueBath() {
  var value = document.getElementById("numberBath").value;
  if (validateIfNotNegativeBath()) {
    value = 0;
    document.getElementById("numberBath").value = value;
  } else {
    value--;
    document.getElementById("numberBath").value = value;
  }
}

function validateIfNotNegativeBath() {
  var value = document.getElementById("numberBath").value;
  if (value < 1) {
    return true;
  }
}

function AddProperty() {
  return (
    <div className="container px-5">
      <div className="row px-5">
        {/* <div className="col-4">
          <Carousel />
        </div> */}

        <div>
          <form action="addProperty" className="form-group px-5">
            <div className="row g-2 my-2">
              <div className="col-3">
                <label for="aptType">What kind of place will you host?</label>
              </div>
              <div className="col-3">
                <select name="aptType" id="aptType">
                  <option value="chooseApt">Choose Apartment Type</option>
                  <option value="apt">Apartment</option>
                  <option value="house">House</option>
                  <option value="secUnit">Secondary Unit</option>
                  <option value="uniqueSpace">Unique space</option>
                  <option value="BednBreak">Bed and breakfast</option>
                  <option value="Boutique hotel">Boutique hotel</option>
                </select>
              </div>
              </div>
              <br></br>

             
            <div className="row g-2 my-2">
              <div className="col-3">
                <label for="spaceType">
                  Which of this best describes your place
                </label>
              </div>

              <div className="col-3">
                <select name="spaceType" id="spaceType">
                  <option value="chooseRS">Choose Space Type</option>
                  <option value="rentalUnit">Rental Unit</option>
                  <option value="condo">Condo</option>
                  <option value="Loft">Loft</option>
                  <option value="serApt">Serviced apartment</option>
                  <option value="casaPart">Casa particular</option>
                  <option value="boutiqueHotel">Vacation home</option>
                </select>
              </div>


            </div>
            <br></br>

            <div className="row g-2 my-2">
              <div className="col-3">
                <label for="spaceType">
                  What kind of space will guests have?
                </label>
              </div>
              <div className="col-9">
                <select name="spaceType" id="spaceType">
                  <option value="chooseRS">Choose Space</option>
                  <option value="rentalUnit">Entire place</option>
                  <option value="condo">Private room</option>
                  <option value="Loft">Shared room</option>
                </select>
              </div>
            </div>
            

            <br></br>
            <div class="row g-2 my-2">
              <div className="col-3">
                <label for="noOfGuests">Where is the property located?</label>
              </div>
              <div class="col-9">
                <div className="form-group">
                  <div className="row g-2 my-2">
                    <div className="col-4">
                      <input
                        type="street"
                        class="form-control"
                        id="autocomplete"
                        placeholder="Street"
                        name="Street"
                      />
                    </div>
                    <div className="col-4">
                      <input
                        type="city"
                        class="form-control"
                        id="inputCity"
                        placeholder="City"
                        name="city"
                      />
                    </div>

                    <div className="col-4">
                      <input
                        type="state"
                        class="form-control"
                        id="inputState"
                        placeholder="State"
                        name="state"
                      />
                    </div>
                  </div>

                  <div className="row g-2 my-2">
                    <div class="col-12 my-2">
                      <input
                        type="zip"
                        class="form-control"
                        id="inputZip"
                        placeholder="Zip"
                        name="zip"
                      />
                    </div>
                    <div class="col-12 my-2">
                      <input
                        type="county"
                        class="form-control"
                        id="inputCounty"
                        placeholder="County"
                        name="county"
                      />
                    </div>
                    <div class="col-12 my-2">
                      <input
                        type="country"
                        class="form-control"
                        id="inputCountry"
                        placeholder="Country"
                        name="country"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br></br>


            <div className="row g-2 my-2">
              <div className="col-md">
                <label for="noOfGuests">
                  How many guests would you like to welcome?
                </label>
              </div>
              <div className="col-md">
                <button
                  type="button"
                  className="value-button"
                  id="decrease"
                  onClick={decreaseValueGuests}
                  value="Decrease Value"
                >
                  -
                </button>
                <input
                  type="number"
                  id="numberGuests"
                  name="guests"
                  value="0"
                  min={0}
                  max={10}
                  onChange={validateIfNotNegativeGuests}
                />
                <button
                  type="button"
                  className="value-button"
                  id="increase"
                  onClick={increaseValueGuests}
                  value="Increase Value"
                >
                  +
                </button>
              </div>
            </div>
            <br></br>


            <div className="row g-2 my-2">
              <div className="col-md">
                <label for="noOfGuests">
                  How many beds would you like in your space?
                </label>
              </div>
              <div className="col-md">
                <button
                  type="button"
                  className="value-button"
                  id="decrease"
                  onClick={decreaseValueBeds}
                  value="Decrease Value"
                >
                  -
                </button>
                <input
                  type="number"
                  id="numberBeds"
                  value="0"
                  name="beds"
                  min={0}
                  max={10}
                  onChange={validateIfNotNegativeBeds}
                />
                <button
                  type="button"
                  className="value-button"
                  id="increase"
                  onClick={increaseValueBeds}
                  value="Increase Value"
                >
                  +
                </button>
              </div>
            </div>
            <br></br>


            <div className="row g-2 my-2">
              <div className="col-md">
                <label for="noOfGuests">
                  How many bathrooms would you like in your space?
                </label>
              </div>
              <div className="col-md">
                <span>
                  
                </span>
                <button
                  type="button"
                  className="value-button"
                  id="decrease"
                  onClick={decreaseValueBath}
                  value="Decrease Value"
                >
                  -
                </button>
                <input
                  type="number"
                  id="numberBath"
                  value="0"
                  min={0}
                  max={10}
                  name ="bath"
                  onChange={validateIfNotNegativeBath}
                />
                <button
                  type="button"
                  className="value-button"
                  id="increase"
                  onClick={increaseValueBath}
                  value="Increase Value"
                >
                  +
                </button>
              </div>
            </div>

            <br></br>
            <div className="row g-2 my-2">
              <div className="form-floating mb-3 col-4">
                <input
                  className="form-control"
                  type="text"
                  id="floatingInput"
                  name="title"
                  placeholder="Create a title"
                />
                <label for="title">Create your title</label>
              </div>
              <div className="form-floating mb-3 col-4">
                <input
                  className="form-control"
                  type="text"
                  name="description"
                  id="floatingInput"
                  placeholder="Describe your property"
                />
                <label for="title">Enter a description</label>
              </div>
              <div className="form-floating mb-3 col-4">
                <input
                  className="form-control"
                  id="floatingInput"
                  name="price"
                  type="number"
                  placeholder="$00 per night"
                />
                <label for="floatingInput">Set property price /night</label>
              </div>
            </div>
            <div className="row g-2 text-center justify-content-center my-4">
              <div className="col-2 subButton">
              <button className="btn btn-danger" id='signup'>Add Property</button>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProperty;
