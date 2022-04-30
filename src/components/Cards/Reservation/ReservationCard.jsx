import React from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import Images from '../../../data/images'
import '../Reservation/ReservationCard.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
function ReservationCard(props) {
    const shuffled = Images.sort(() => 0.5 - Math.random());
    const navigate = useNavigate();
  
    function cancelReservation(){
      axios.delete(`http://localhost:3002/deleteReservation/${props.reservationID}`, (req, res) => {
        
      })
      .then( (response) => {
        if(response.status === 201){
          window.location.reload(true)
        }
      })
    }
    let selected = shuffled.slice(0, 1);
  return (
    <div id='propertyCard' class="card">
    <img class="card-img-top" src={selected[0]} alt="Property" id='eventImage' />
    <div class="card-body">
    <Link id='propertyTitle' className='titleLink' to={`/property/${props.propertyID}`}>{props.title}</Link>
      <p class="card-text"></p>
     <span>
        <span id='ratingText'><label><img className='reservationSymbols' alt='checkin' src='https://img.icons8.com/ios/344/clock--v1.png'/> Check-In Date: </label>&nbsp;&nbsp;{props.checkInDate}<br/></span>
        <span id='upvotesText'><label><img className='reservationSymbols' alt='checkin' src='https://img.icons8.com/ios/344/clock--v3.png'/> Checkout Date:  </label>&nbsp;&nbsp;{props.checkOutDate}<br/></span>
        <span id='locationText'><label><img className='reservationSymbols' alt='checkin' src='https://cdn-icons-png.flaticon.com/512/185/185538.png'/> Number of Guests:  </label>&nbsp; {props.guests}</span>
     </span>
     <br/><br/>
      <p><b>Total Cost ${props.price}</b></p>
     <hr/>
      <span>
        <button type="button" className='btn btn-danger' id="btnCancel" data-toggle="modal"
                    data-target="#exampleModal">CANCEL RESERVATION</button>
        <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Confirm Delete Reservation
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div id="modal-body" class="modal-body">Are you sure you want to delete the reservation?</div>
                      <div class="modal-footer">
                        <button id="cancelButton"
                          type="button"
                          class="btn btn-light"
                          data-dismiss="modal"
                        >
                          CLOSE
                        </button>
                        <button id="saveChanges" type="submit" class="btn btn-danger" onClick={cancelReservation}>
                          DELETE RESERVATION
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
        <br/><br/>
        <hr/>
      </span>
    </div>
  </div>
  )
}

export default ReservationCard