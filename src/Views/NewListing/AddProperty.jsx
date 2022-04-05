import React from "react";
import '../NewListing/AddProperty.css'

function increaseValue() {
  var value = document.getElementById("number").value;
  console.log(value);
  value++;
  document.getElementById("number").value = value;
}

function decreaseValue() {
  var value = document.getElementById("number").value;
  if(validateIfNotNegative()){
    value = 0;
    document.getElementById("number").value = value;
  }else{
    value--;
    document.getElementById("number").value = value;
  }
}

function validateIfNotNegative(){
  var value = document.getElementById("number").value;
  if(value < 1){
    return true;
  }
}

function AddProperty() {
  return (
    <div className="container">
      <form>
        <label for="aptType">What kind of place will you host?</label>
        <select name="aptType" id="aptType">
          <option value="chooseApt">Choose Apartment Type</option>
          <option value="apt">Apartment</option>
          <option value="house">House</option>
          <option value="secUnit">Secondary Unit</option>
          <option value="uniqueSpace">Unique space</option>
          <option value="BednBreak">Bed and breakfast</option>
          <option value="Boutique hotel">Boutique hotel</option>
        </select>

        <br></br>
        <br></br>

        <label for="spaceType">Which of this best describes your place</label>
        <select name="spaceType" id="spaceType">
          <option value="chooseRS">Choose Space Type</option>
          <option value="rentalUnit">Rental Unit</option>
          <option value="condo">Condo</option>
          <option value="Loft">Loft</option>
          <option value="serApt">Serviced apartment</option>
          <option value="casaPart">Casa particular</option>
          <option value="boutiqueHotel">Vacation home</option>
        </select>
        <br></br>
        <br></br>

        <label for="spaceType">What kind of space will guests have?</label>
        <select name="spaceType" id="spaceType">
          <option value="chooseRS">Choose Space</option>
          <option value="rentalUnit">An entire place</option>
          <option value="condo">A private room</option>
          <option value="Loft">A shared room</option>
        </select>

        <br></br>
        <br></br>

        <label for="noOfGuests">Where is the property located?</label>
        <div class="form-group">
          {" "}
          <input
            type="street"
            class="form-control"
            id="autocomplete"
            placeholder="Street"
          />
          <input
            type="city"
            class="form-control"
            id="inputCity"
            placeholder="City"
          />
          <input
            type="state"
            class="form-control"
            id="inputState"
            placeholder="State"
          />
          <input
            type="zip"
            class="form-control"
            id="inputZip"
            placeholder="Zip"
          />
          <input
            type="county"
            class="form-control"
            id="inputCounty"
            placeholder="County"
          />
          <input
            type="country"
            class="form-control"
            id="inputCountry"
            placeholder="Country"
          /><br></br>

          <label for="noOfGuests">How many guests would you like to welcome?</label>
          <button type="button" className="value-button" id="decrease" onClick={decreaseValue} value="Decrease Value">
            -
          </button>

          <input type="number" id="number" value="0" min={0} max={10} onChange={validateIfNotNegative} />

          <button type="button" className="value-button" id="increase" onClick={increaseValue} value="Increase Value">
            +
          </button>



          <label for="noOfGuests">How many beds would you like in your space?</label>
          <button type="button" className="value-button" id="decrease" onClick={decreaseValue} value="Decrease Value">
            -
          </button>

          <input type="number" id="number" value="0" min={0} max={10} onChange={validateIfNotNegative} />

          <button type="button" className="value-button" id="increase" onClick={increaseValue} value="Increase Value">
            +
          </button>



          <label for="noOfGuests">How many bathrooms would you like in your space?</label>
          <button type="button" className="value-button" id="decrease" onClick={decreaseValue} value="Decrease Value">
            -
          </button>

          <input type="number" id="number" value="0" min={0} max={10} onChange={validateIfNotNegative} />

          <button type="button" className="value-button" id="increase" onClick={increaseValue} value="Increase Value">
            +
          </button>

        </div>
      </form>
    </div>
  );
}

export default AddProperty;
