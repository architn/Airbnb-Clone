import React,{useState} from "react";
import "../NewListing/AddProperty.css";
import Carousel from "../../components/Carousel/Carousel.jsx";
import axios from "axios";
// import { response } from "../../../Server/routes/user";
import { Navigate } from "react-router-dom";

function validateIfNotNegativeGuests() {
  var value = document.getElementById("numberGuests").value;
  if (value < 1) {
    return true;
  }
}

function validateIfNotNegativeBeds() {
  var value = document.getElementById("numberBeds").value;
  if (value < 1) {
    return true;
  }
}

function validateIfNotNegativeBath() {
  var value = document.getElementById("numberBath").value;
  if (value < 1) {
    return true;
  }
}

function AddProperty() {

  const [details,setDetails] = useState({ApartmentType:"Choose Apartment Type",SpaceType:"Choose Space Type",Space:"",
    Street:"",City:"",State:"",Zip:"",County:"",Country:"",Guests:0,Beds:0,Bathrooms:0,Title:"", Description:"",
    Price:""});

    const submitHandler = e => {
      e.preventDefault();
      console.log(details);
      axios
      .post("http://localhost:3002/host",details)
      .then((response) => {
        if(response.status === 201){
          console.log("Property added successfully!");
        }
      })
    }
      //     setDetails({
      //       ApartmentType:details.ApartmentType,
      //       SpaceType:details.SpaceType,
      //       Space:details.Space,
      //       Street:details.Street,
      //       City:details.City,
      //       State:details.State,
      //       Zip:details.Zip,
      //       County:details.County,
      //       Country:details.Country,
      //       Guests:details.Guests,
      //       Beds:details.Beds,
      //       Bathrooms:details.Bathrooms,
      //       Title:details.Title,
      //       Description:details.Description,
      //       Price:details.Price
      //     });
        // navigate("");
     

  return (
    <div className="container px-5">
      <div className="row px-5">
        {/* <div className="col-4">
          <Carousel />
        </div> */}

        <div>
          <form action="addProperty" className="form-group px-5" onSubmit={submitHandler}>
            <div className="row g-2 my-2">
              <div className="col-3">
                <label for="aptType">What kind of place will you host?</label>
              </div>
              <div className="col-3">
                <select name="aptType" id="aptType" onChange={e => setDetails({...details,ApartmentType:e.target.value})} value = {details.ApartmentType}>
                  <option value="ChooseApartmentType">Choose Apartment Type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                  <option value="SecondaryUnit">Secondary Unit</option>
                  <option value="UniqueSpace">Unique space</option>
                  <option value="BedAndBreakfast">Bed and breakfast</option>
                  <option value="Boutiquehotel">Boutique hotel</option>
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
                <select name="spaceType" id="spaceType" onChange={e => setDetails({...details,SpaceType:e.target.value})} value = {details.SpaceType}>
                  <option value="ChooseSpaceType">Choose Space Type</option>
                  <option value="RentalUnit">Rental Unit</option>
                  <option value="Condo">Condo</option>
                  <option value="Loft">Loft</option>
                  <option value="ServicedApartment">Serviced apartment</option>
                  <option value="CasaParticular">Casa particular</option>
                  <option value="VacationHome">Vacation home</option>
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
                <select name="space" id="space" onChange={e => setDetails({...details,Space:e.target.value})} value = {details.Space}>
                  <option value="choosespace">Choose Space</option>
                  <option value="entireplace">Entire place</option>
                  <option value="privateroom">Private room</option>
                  <option value="sharedroom">Shared room</option>
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
                        onChange = {e => setDetails({...details, Street : e.target.value})} value = {details.Street}
                      />
                    </div>
                    <div className="col-4">
                      <input
                        type="city"
                        class="form-control"
                        id="inputCity"
                        placeholder="City"
                        name="city"
                        onChange = {e => setDetails({...details, City : e.target.value})} value = {details.City}
                      />
                    </div>

                    <div className="col-4">
                      <input
                        type="state"
                        class="form-control"
                        id="inputState"
                        placeholder="State"
                        name="state"
                        onChange = {e => setDetails({...details, State : e.target.value})} value = {details.State}
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
                        onChange = {e => setDetails({...details, Zip : e.target.value})} value = {details.Zip}
                      />
                    </div>
                    <div class="col-12 my-2">
                      <input
                        type="county"
                        class="form-control"
                        id="inputCounty"
                        placeholder="County"
                        name="county"
                        onChange = {e => setDetails({...details, County : e.target.value})} value = {details.County}
                      />
                    </div>
                    <div class="col-12 my-2">
                      <input
                        type="country"
                        class="form-control"
                        id="inputCountry"
                        placeholder="Country"
                        name="country"
                        onChange = {e => setDetails({...details, Country : e.target.value})} value = {details.Country}
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
                  onClick={() => {
                    if(!validateIfNotNegativeGuests()){
                      setDetails({...details, Guests : details.Guests - 1})
                    }
                  }}
                  value="Decrease Value"
                >
                  -
                </button>
                <input
                  type="number"
                  id="numberGuests"
                  name="guests"
                  value={details.Guests}
                  min={0}
                  max={10}
                  onChange = {e => {
                    if(!validateIfNotNegativeGuests()){
                      setDetails({...details, Guests : e.target.value})
                    }
                    
                  }
                }
                />
                <button
                  type="button"
                  className="value-button"
                  id="increase"
                  onClick={() => {
                    setDetails({...details, Guests : details.Guests + 1})
                  }}
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
                  onClick={() => {
                    if(!validateIfNotNegativeBeds()){
                      setDetails({...details, Beds : details.Beds - 1})
                    }
                  }}
                  value="Decrease Value"
                >
                  -
                </button>
                <input
                  type="number"
                  id="numberBeds"
                  value={details.Beds}
                  name="beds"
                  min={0}
                  max={10}
                  onChange = {e => {
                    if(!validateIfNotNegativeBeds()){
                      setDetails({...details, Beds : e.target.value})
                    }
                    
                  }
                }
                />
                <button
                  type="button"
                  className="value-button"
                  id="increase"
                  onClick={() => {
                    setDetails({...details, Beds : details.Beds + 1})
                  }}
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
                  onClick={() => {
                    if(!validateIfNotNegativeBath()){
                      setDetails({...details, Bathrooms : details.Bathrooms - 1})
                    }
                  }}
                  value="Decrease Value"
                >
                  -
                </button>
                <input
                  type="number"
                  id="numberBath"
                  value={details.Bathrooms}
                  min={0}
                  max={10}
                  name ="bath"
                  onChange={e => {
                    validateIfNotNegativeBath();
                    setDetails({...details, Bathrooms : e.target.value})
                  }
                }
                />
                <button
                  type="button"
                  className="value-button"
                  id="increase"
                  onClick={() => {
                    setDetails({...details, Bathrooms : details.Bathrooms + 1})
                  }}
                  value="Increase Value"
                >
                  +
                </button>
              </div>
            </div>
            <br></br>

            {/* <div>
              <label>
                <input type="checkbox" id="feature1" name="feature1" value="WiFi"/>
                  WiFi
              </label>
            </div> */}

            <br></br>
            <div className="row g-2 my-2">
              <div className="form-floating mb-3 col-4">
                <input
                  className="form-control"
                  type="text"
                  id="floatingInput"
                  name="title"
                  placeholder="Create a title"
                  onChange = {e => setDetails({...details, Title : e.target.value})} value = {details.Title}/>
                
                <label for="title">Create your title</label>
              </div>
              <div className="form-floating mb-3 col-4">
                <input
                  className="form-control"
                  type="text"
                  name="description"
                  id="floatingInput"
                  placeholder="Describe your property"
                  onChange = {e => setDetails({...details, Description : e.target.value})} value = {details.Description}/>
                
                <label for="title">Enter a description</label>
              </div>
              <div className="form-floating mb-3 col-4">
                <input
                  className="form-control"
                  id="floatingInput"
                  name="price"
                  type="number"
                  placeholder="$00 per night"
                  onChange = {e => setDetails({...details, Price : e.target.value})} value = {details.Price}/>
                
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
